import { Sun, Moon, BookOpen, GraduationCap, Home } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ darkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-[#D2D2D7] dark:border-[#2C2C2E] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Academic Context */}
        <div className="flex items-center space-x-3.5">
          <div className="bg-apple-blue text-white p-2.5 rounded-xl flex items-center justify-center shadow-xs">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-apple-secondary" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-apple-secondary font-semibold">
                Ministry of Culture, Sports and Tourism x MSIT
              </span>
            </div>
            <h1 className="text-sm font-semibold text-apple-text dark:text-zinc-50 line-clamp-1 font-display tracking-tight">
              청소년 독서 생태계 변화 리포트 (문헌정보학)
            </h1>
          </div>
        </div>

        {/* Right Controls - Theme toggle bar */}
        <div className="flex items-center space-x-6">
          {/* Integrated visual toggle selector simulating Apple UI segment controls */}
          <div 
            onClick={onToggleDarkMode}
            className="flex bg-[#E8E8ED] dark:bg-zinc-800 p-1 rounded-full cursor-pointer transition-all select-none border border-[#D2D2D7]/40 dark:border-zinc-700"
          >
            <button
              className={`px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                !darkMode 
                  ? "bg-white text-apple-text shadow-xs" 
                  : "text-zinc-500"
              }`}
            >
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              Light
            </button>
            <button
              className={`px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                darkMode 
                  ? "bg-zinc-950 text-white shadow-xs" 
                  : "text-[#86868B]"
              }`}
            >
              <Moon className="w-3.5 h-3.5 text-apple-blue" />
              Dark
            </button>
          </div>

          {/* Home Link Button */}
          <a
            href="https://genie0409.github.io/AI2026/"
            className="flex items-center gap-1.5 px-4 py-2 bg-apple-blue hover:bg-[#0071E3]/90 text-white rounded-full text-xs font-semibold shadow-xs transition-colors cursor-pointer select-none"
          >
            <Home className="w-3.5 h-3.5 text-white" />
            <span className="hidden sm:inline">홈으로 가기</span>
            <span className="sm:hidden">홈</span>
          </a>
        </div>
      </div>
      
      {/* Editorial academic category banner spanning across */}
      <div className="bg-zinc-900 text-white text-center py-3.5 px-4 transition-colors">
        <p className="text-xs sm:text-sm md:text-base font-bold tracking-tight font-display text-zinc-100">
          문헌정보학적 관점: 디지털 매체 몰입에 따른 청소년 독서 생태계 변화 리포트 (실증 데이터 상관분석)
        </p>
      </div>
    </header>
  );
}

