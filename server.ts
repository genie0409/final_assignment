import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK
const geminiApiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (geminiApiKey) {
  ai = new GoogleGenAI({
    apiKey: geminiApiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// Health check API
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    geminiConfigured: !!geminiApiKey,
    timestamp: new Date().toISOString()
  });
});

// Interactive statistics and report queries
app.post("/api/analyze", async (req, res) => {
  try {
    const { message, chatHistory } = req.body;
    
    if (!ai) {
      return res.status(500).json({
        error: "Gemini API key is missing. Please add GEMINI_API_KEY to your secrets settings."
      });
    }

    const systemPrompt = `
당신은 대한민국 문화체육관광부(종이책 독서 실태 발표 데이터) 및 과학기술정보통신부(인터넷 스마트폰 과의존 실태조사 데이터) 통계를 분석하는 전문 수석 연구원입니다.
문헌정보학(Library and Information Science) 관점에서 디지털 매체 몰입에 따른 청소년의 독서율 하락 원인, 문해력 저하 우려, 그리고 이를 예방/회복하기 위한 도서관 개선 서비스 제언을 바탕으로 학술적이고 가독성 높은 한국어 분석을 제공해야 합니다.

통계 기준 정보 요약:
1. 청소년 종이책 독서율 추이:
   - 2013년: 96.0% (높은 종이책 독서율)
   - 2015년: 94.9%
   - 2017년: 91.7%
   - 2019년: 90.7%
   - 2021년: 87.4% (사상 최저치 기록)

2. 스마트폰 및 인터넷 과의존 지수 추이 (4점 만점 구조):
   - 2016년: 2.01점
   - 2017년: 2.06점
   - 2018년: 2.10점
   - 2019년: 2.10점
   - 2020년: 2.14점
   - 2021년: 2.08점
   - 2022년: 2.14점
   - 2023년: 2.22점
   - 2024년: 2.19점
   - 2025년: 2.26점 (사상 최고치 기록)

3. 상관관계 연구 인사이트:
   - 인지적 현저성(Cognitive Salience / 스마트폰에 대한 현저한 몰입 및 집착) 문항과 독서율 간의 매우 강한 한계선상의 음의 상관관계: r = -0.8493
   - 디지털 미디어의 단기 도파민 보상 메커니즘과 활자 텍스트 독서의 느린 뇌(Slow Brain) 활성화 방식 간의 충돌. 즉, 숏폼/자극적 미디어 소비가 문해 신경망 형성을 방해함.

도서관 전문 제언 (3가지 핵심 축):
1. 비판적 미디어 정보 해독력(Critical Media Literacy) 교육 제공: 자극적인 콘텐츠와 가짜뉴스를 분별하고 생성형 AI가 출력한 정보의 편향성을 스스로 검증하는 비판적 디지털 문해력 워크숍 활성화.
2. 메이커스페이스(Digital Maker Space)를 통한 능동적 창작과 독서의 융합: 독서 토론한 내용을 바탕으로 메타버스 공간 제작, 아두이노 프로젝트 등 텍스트 읽기가 디지털 창작으로 순환하는 선순환 구조 유도.
3. 스마트폰 디톡스 독서클럽(Digital Detox Book Club) 개설: 도서관 내 전자기기를 보관해두고 온전히 정독하는 '고요한 읽기 모임(Silent Reading)' 운영 및 오프라인 공동체 회복.

답변 규칙:
- 사용자의 질문에 답할 때 위의 통계 정보 및 상관관계 인사이트, 세 가지 제언을 학술적이면서도 이해하기 쉽게 풀어서 작성하세요.
- 불필요한 은어나 슬랭은 피하며, 격조 있고 신뢰성 있는 문체를 사용하세요.
- 마크다운(Markdown) 형식을 활용해 중요 인자들을 강조하고 표, 리스트 등을 사용해 가독성을 기르세요.
`;

    // Format chat history for Gemini 2.x SDK
    const contents: any[] = [];
    if (chatHistory && Array.isArray(chatHistory)) {
      chatHistory.forEach((turn: any) => {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }]
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    res.json({
      text: response.text,
      success: true
    });
  } catch (error: any) {
    console.error("Gemini service error:", error);
    res.status(500).json({
      error: error.message || "An error occurred with Gemini processing.",
      success: false
    });
  }
});

// Setup server and Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
}

startServer();
