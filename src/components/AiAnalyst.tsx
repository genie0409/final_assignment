import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, AlertCircle, Bot, User, Trash2 } from "lucide-react";
import { ChatMessage } from "../types";

export default function AiAnalyst() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-welcome",
      role: "model",
      text: "안녕하세요! 문헌정보학 및 청소년 미디어 과몰입 상관관계 리포트 분석가 AI입니다. 문체부 및 과기정통부 실증 연구 결과를 토대로 청소년 한글 문해력, 미디어 중독 극복을 위한 미래형 도서관 제언, 통계 지표 분석 등에 대해 어떤 학술적 자문이 필요하신가요?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = (customPrompt || inputMessage).trim();
    if (!textToSend || isLoading) return;

    // Reset some states
    setInputMessage("");
    setError(null);

    // Create user message
    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // ⭐ [긴급 변경] 백엔드를 거치지 않고 구글 제미나이 API 서버로 다이렉트 통신합니다.
      // ⭐ 아래 "AIzaSy..." 자리에 진짜 제미나이 API 키 문자열을 따옴표 안에 입력하세요!
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AQ.Ab8RN6KCOPPKmf-oXSLnZZozeGYlojD0pZ36wOT4Fz_f91Cxng"; 
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: textToSend }]
          }]
        })
      });

      const data = await response.json();

      // [긴급 변경] 제미나이 공식 응답 구조에서 텍스트 추출하기
      if (!data.candidates || !data.candidates[0].content || !data.candidates[0].content.parts) {
        throw new Error("AI 응답 데이터 구조가 올바르지 않습니다. API 키나 서버 상태를 확인하세요.");
      }

      const aiResponse = data.candidates[0].content.parts[0].text;

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "model",
        text: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "AI 분석 서버와 연결하는 과정에서 문제가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "initial-welcome",
        role: "model",
        text: "역사적인 상관관계 대화 기록을 초기화했습니다. 도서관 교육 시스템 혁신이나 문해력 신경망 형성 메커니즘 차트에 대해 질문하세요.",
        timestamp: new Date()
      }
    ]);
    setError(null);
  };

  const PRESETS = [
    "r = -0.8493의 문헌학적 의미가 무엇인가요?",
    "스마트폰 디톡스 클럽 대안의 비용 효율적 운영 방안",
    "숏폼에 중독된 청소년 전두엽과 활자의 연관관계",
  ];

  return (
    <section className="my-10" id="ai-academic-analyst">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-[#D2D2D7] dark:border-[#2C2C2E] transition-colors duration-300 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Chat Instructions panel (Left) */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-apple-blue dark:text-blue-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-apple-blue animate-pulse" />
                <span>AI-Powered Insights</span>
              </div>
              <h2 className="text-xl font-bold text-apple-text dark:text-white leading-tight font-display tracking-tight">
                AI 직통 API 연결<br />
                기말고사 과제 최종 보조
              </h2>
              <p className="text-xs text-apple-secondary dark:text-zinc-400 mt-3 leading-relaxed">
                이 챗봇 부스는 백엔드 서버 문제로 인해 <span className="font-mono bg-[#E8E8ED] dark:bg-zinc-850 px-1.5 py-0.5 rounded text-apple-text dark:text-zinc-200">GEMINI_API_KEY</span>를 코드에 직접 하드코딩하여 **구글 제미나이 API 서버와 다이렉트로 통신**하도록 긴급 수정되었습니다. 시험 제출용으로 정상 구동됩니다.
              </p>
              
              <div className="mt-6 space-y-2">
                <span className="text-[10px] text-apple-secondary font-mono font-bold tracking-wider uppercase">
                  연구 분석 빠른 질의 템플릿
                </span>
                <div className="flex flex-col gap-2 mt-1.5">
                  {PRESETS.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(preset)}
                      className="text-left text-xs bg-[#FAFAFA] dark:bg-zinc-950 hover:bg-[#F5F5F7] dark:hover:bg-zinc-900 p-2.5 rounded-xl border border-[#D2D2D7]/60 dark:border-zinc-800 text-apple-text dark:text-zinc-300 transition-all font-sans cursor-pointer flex items-center justify-between"
                      disabled={isLoading}
                    >
                      <span className="line-clamp-1">{preset}</span>
                      <span className="text-[10px] bg-white dark:bg-zinc-800 text-apple-secondary rounded px-1.5 py-0.5 ml-2 font-mono shrink-0 border border-[#D2D2D7]/40">
                        Ask
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 lg:mt-0 pt-6 border-t border-[#F5F5F7] dark:border-[#2C2C2E]/60">
              <button
                onClick={clearChat}
                className="flex items-center gap-1.5 text-[11px] font-mono text-apple-secondary hover:text-rose-500 dark:hover:text-[#FF2D55] transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5 text-apple-secondary" />
                대화 로그 전체 클리어하기
              </button>
            </div>
          </div>

          {/* Interactive Chat window (Right) */}
          <div className="flex-1 bg-[#FAFAFA] dark:bg-zinc-950 rounded-xl border border-[#D2D2D7] dark:border-[#2C2C2E] flex flex-col h-[400px] overflow-hidden shadow-sm transition-colors">
            
            {/* Header of Chat */}
            <div className="p-4 bg-[#F5F5F7] dark:bg-zinc-800/40 border-b border-[#D2D2D7] dark:border-[#2C2C2E] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping shrink-0" />
                <span className="font-mono text-xs font-semibold text-apple-text dark:text-zinc-300">
                  학술 교원 연구 보조 봇 (Gemini 1.5 Flash)
                </span>
              </div>
              <span className="text-[10px] font-mono text-apple-secondary">
                DIRECT API SECURE
              </span>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans text-xs flex flex-col bg-white dark:bg-zinc-900">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 flex items-center justify-center ${
                    msg.role === "user"
                      ? "bg-[#F5F5F7] dark:bg-zinc-800 text-apple-text dark:text-zinc-100"
                      : "bg-[#E3F2FD] dark:bg-zinc-850 text-apple-blue dark:text-blue-400"
                  }`}>
                    {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  
                  <div className={`p-3.5 rounded-xl leading-relaxed whitespace-pre-wrap select-text ${
                    msg.role === "user"
                      ? "bg-apple-blue text-white rounded-tr-none shadow-xs"
                      : "bg-[#FAFAFA] dark:bg-zinc-950 text-apple-text dark:text-zinc-250 border border-[#D2D2D7] dark:border-zinc-800/80 rounded-tl-none font-sans"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 self-start max-w-[85%]">
                  <div className="p-2.5 rounded-xl bg-[#E3F2FD] dark:bg-zinc-850 text-apple-blue shrink-0 flex items-center justify-center">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-[#FAFAFA] dark:bg-zinc-950 p-4 rounded-xl rounded-tl-none border border-[#D2D2D7]/85 dark:border-zinc-800/85">
                    <div className="flex items-center space-x-1.5 py-0.5">
                      <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex items-center gap-2 p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-[#FF2D55]/60 rounded-xl text-rose-650 text-[11px] self-center max-w-md w-full">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <p>{error}</p>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-3 bg-[#F5F5F7] dark:bg-zinc-850 border-t border-[#D2D2D7] dark:border-zinc-800/80 flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="문헌정보학 분석 연구 및 통계에 관해 질문하세요..."
                className="flex-1 bg-white dark:bg-zinc-900 text-apple-text dark:text-white px-4 py-2.5 rounded-xl border border-[#D2D2D7] dark:border-zinc-800 text-xs focus:ring-1 focus:ring-apple-blue outline-none transition-all dark:placeholder:text-zinc-500"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-apple-blue hover:bg-[#0071E3]/90 text-white p-2.5 px-4 rounded-xl text-xs font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
