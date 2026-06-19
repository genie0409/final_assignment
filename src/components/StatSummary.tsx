import { BookDown, Smartphone, LineChart } from "lucide-react";

export default function StatSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Youth Paper Book Reading Rate Record Low */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-[#D2D2D7] dark:border-[#2C2C2E] shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/30 px-3 py-1 rounded-full uppercase tracking-wider">
              조사 최저치 ↓
            </span>
            <div className="bg-rose-50 dark:bg-rose-950/20 p-2 rounded-xl text-rose-600">
              <BookDown className="w-4.5 h-4.5" />
            </div>
          </div>
          <span className="text-apple-secondary text-xs font-semibold uppercase tracking-widest block">
            청소년 종이책 독서율
          </span>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-4xl font-extrabold text-apple-text dark:text-zinc-50 tracking-tight font-display">
              87.4%
            </span>
            <span className="text-rose-600 text-xs font-bold leading-none bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded">
              ↓ 최저치
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-[#F5F5F7] dark:border-[#2C2C2E]">
          <p className="text-[11px] text-apple-secondary dark:text-zinc-400 leading-relaxed font-sans">
            문화체육관광부 청소년 독서실태 데이터 최저점. 2013년 96.0%에서 장기 우하향 곡선을 가파르게 겪으며 위기 국면에 직면했습니다.
          </p>
        </div>
      </div>

      {/* Card 2: Smartphone Overdependence Index Peak */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-[#D2D2D7] dark:border-[#2C2C2E] shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/30 px-3 py-1 rounded-full uppercase tracking-wider">
              조사 최고치 ↑
            </span>
            <div className="bg-amber-50 dark:bg-amber-950/20 p-2 rounded-xl text-amber-600">
              <Smartphone className="w-4.5 h-4.5" />
            </div>
          </div>
          <span className="text-apple-secondary text-xs font-semibold uppercase tracking-widest block">
            스마트폰 과의존 지수 
          </span>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-4xl font-extrabold text-apple-text dark:text-zinc-50 tracking-tight font-display">
              2.26점
            </span>
            <span className="text-apple-secondary text-sm font-light">
              / 4.0
            </span>
            <span className="text-rose-650 text-xs font-bold leading-none bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded ml-1">
              ↑ 최고치
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-[#F5F5F7] dark:border-[#2C2C2E]">
          <p className="text-[11px] text-apple-secondary dark:text-zinc-400 leading-relaxed font-sans">
            과학기술정보통신부 조사 기준 사상 최고 과몰입 임계치. 2016년 2.01점 대비 지속 증가해 단기 도파민 보상형 콘텐츠 편식이 심화되었습니다.
          </p>
        </div>
      </div>

      {/* Card 3: Deep Negative Correlation */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-[#D2D2D7] dark:border-[#2C2C2E] shadow-xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold text-apple-blue bg-[#E3F2FD] dark:bg-zinc-800 px-3 py-1 rounded-full uppercase tracking-wider">
              역상관 도출 r
            </span>
            <div className="bg-blue-50 dark:bg-blue-950/20 p-2 rounded-xl text-apple-blue">
              <LineChart className="w-4.5 h-4.5" />
            </div>
          </div>
          <span className="text-apple-secondary text-xs font-semibold uppercase tracking-widest block">
            상관관계 계수 (Pearson)
          </span>
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-4xl font-extrabold text-apple-text dark:text-zinc-50 tracking-tight font-display">
              -0.8493
            </span>
            <span className="text-apple-blue text-xs font-bold leading-none bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded italic">
              강한 음의 관계
            </span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-[#F5F5F7] dark:border-[#2C2C2E]">
          <p className="text-[11px] text-apple-secondary dark:text-zinc-400 leading-relaxed font-sans">
            과의존 하위 척도인 '인지적 현저성(집착)' 지수와 종이책 읽기 간의 극단적인 역상관성 입증. 활자 독서 신경망 형성을 전면 저해하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
