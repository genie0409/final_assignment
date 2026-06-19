import { useState, useEffect } from "react";
import Header from "./components/Header";
import StatSummary from "./components/StatSummary";
import DataSection from "./components/DataSection";
import LibraryProposals from "./components/LibraryProposals";
import AiAnalyst from "./components/AiAnalyst";
import InsightConclusion from "./components/InsightConclusion";
import { 
  BarChart, 
  BookOpen, 
  Compass, 
  HelpCircle, 
  Sparkles,
  School,
  FileText,
  FileDown
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Default to light mode as requested, but check local storage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      return saved === "dark";
    }
    return false;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-[#F5F5F7] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen transition-colors duration-300 font-sans">
        
        {/* Navigation Header */}
        <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

        {/* Global layout container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          
          {/* Section: Academic Hero Banner */}
          <section className="text-center sm:text-left flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#D2D2D7]/50 dark:border-zinc-900 gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#E1F2FD]/60 dark:bg-blue-950/45 border border-blue-100/50 dark:border-blue-900/65 rounded-full px-3 py-1 text-[10px] font-bold text-apple-blue font-mono tracking-wider select-none">
                <Sparkles className="w-3.5 h-3.5 text-apple-blue" />
                <span>MINISTRY OF CULTURE, SPORTS & TOURISM × MSIT DATABASE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-apple-text dark:text-white tracking-tight leading-tight font-display">
                청소년 독서율 및 <br className="hidden sm:inline" />
                인터넷·스마트폰 과의존 상관분석 대시보드
              </h2>
              <p className="text-sm text-apple-secondary dark:text-zinc-400 font-medium leading-relaxed font-sans">
                대한민국 청소년의 활자 기반 종이책 독서 여력 붕괴 현상과 모바일 무한 스크롤형 스마트 기기 몰입 패턴을 문헌정보학 실무 연구 렌즈를 통해 다층적으로 교차 대조하고 미래형 공공 교육 거점 수립안을 탐색합니다.
              </p>

              {/* Document Download Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/analyze_report.pdf"
                  download="analyze_report.pdf"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 border border-[#D2D2D7] dark:border-[#2C2C2E] hover:border-apple-blue dark:hover:border-apple-blue shadow-sm hover:shadow-md hover:-translate-y-0.5 rounded-full text-xs font-bold text-[#1D1D1F] dark:text-zinc-200 transition-all cursor-pointer"
                  title="GitHub 연결 및 분석보고서 다운로드"
                >
                  <FileDown className="w-4 h-4 text-apple-blue animate-pulse" />
                  <span>분석보고서 다운로드</span>
                </a>
                <a
                  href="/final.pdf"
                  download="final.pdf"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-900 border border-[#D2D2D7] dark:border-[#2C2C2E] hover:border-apple-blue dark:hover:border-apple-blue shadow-sm hover:shadow-md hover:-translate-y-0.5 rounded-full text-xs font-bold text-[#1D1D1F] dark:text-zinc-200 transition-all cursor-pointer"
                  title="GitHub 연결 및 기말고사 과제 보고서 다운로드"
                >
                  <FileDown className="w-4 h-4 text-emerald-500 animate-pulse" />
                  <span>기말고사 과제 보고서 다운로드</span>
                </a>
              </div>
            </div>

            {/* Quick Context panel - styled in Apple style book card */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#D2D2D7] dark:border-[#2C2C2E] shadow-sm max-w-sm shrink-0 space-y-3 font-mono">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-apple-blue" />
                <span className="text-[10px] font-bold text-apple-text dark:text-zinc-200 uppercase tracking-widest">
                  연구 개요 서지 데이터
                </span>
              </div>
              <div className="space-y-1.5 text-[11px] leading-snug">
                <div className="flex justify-between border-b border-[#F5F5F7] dark:border-zinc-800/40 pb-1">
                  <span className="text-apple-secondary">데이터 소스</span>
                  <span className="font-semibold text-[#1D1D1F] dark:text-zinc-300">문체부 · 과학기술정보통신부</span>
                </div>
                <div className="flex justify-between border-b border-[#F5F5F7] dark:border-zinc-800/40 pb-1">
                  <span className="text-apple-secondary">분석 모델</span>
                  <span className="font-semibold text-[#1D1D1F] dark:text-zinc-300">이중 축 시계열 회귀 요건</span>
                </div>
                <div className="flex justify-between border-b border-[#F5F5F7] dark:border-zinc-800/40 pb-1">
                  <span className="text-apple-secondary">연구 방법</span>
                  <span className="font-semibold text-[#1D1D1F] dark:text-zinc-300">인지적 현저성 역산 계수 도출</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-apple-secondary">상관계수</span>
                  <span className="font-semibold font-mono text-apple-blue dark:text-blue-400">r = -0.8493 (강한 음의 관계)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Academic Stats Summaries */}
          <StatSummary />

          {/* Section: Data Visualizer & Historical Table */}
          <DataSection />

          {/* Section: 3 Library Action Proposals & Modals */}
          <LibraryProposals />

          {/* Section: Co-pilot Intelligent Academic Analyst Panel */}
          <AiAnalyst />

          {/* Section: Conclusions & Deep Philosophical Goals */}
          <InsightConclusion />

        </main>

        {/* Standard Editorial Academic Footer */}
        <footer className="border-t border-[#D2D2D7] dark:border-zinc-850 bg-white dark:bg-zinc-950 py-12 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Academic Credit Left */}
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <School className="w-5 h-5 text-apple-blue" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#1D1D1F] dark:text-zinc-200 uppercase">
                  LIS Academic Laboratory Research
                </span>
              </div>
              <p className="text-[11px] text-apple-secondary max-w-md font-sans">
                본 대시보드는 문화체육관광부 청소년 2개년 주기 실태조사 통계 및 과학기술정보통신부 스마트폰 과의존 연간 추이 실무 데이터셋에 의거하여 제작되었습니다.
              </p>
            </div>

            {/* Platform links Right / Sync ready */}
            <div className="text-center md:text-right space-y-1.5 leading-none">
              <span className="text-[11px] font-mono text-apple-blue uppercase tracking-widest block font-bold">
                Deployable to Vercel & Sync to GitHub
              </span>
              <p className="text-[10px] text-apple-secondary font-sans mt-1">
                © {new Date().getFullYear()} 문헌정보학적 관점 디지털 매체 연관 리포트. All rights reserved.
              </p>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
}
