import { useState } from "react";
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ReferenceLine
} from "recharts";
import { HISTORICAL_DATA, YearData } from "../types";
import { Image, BarChart3, HelpCircle, ArrowUpRight, TrendingDown, AlertTriangle } from "lucide-react";

export default function DataSection() {
  const [activeTab, setActiveTab] = useState<"image" | "interactive">("image");
  const [imgError, setImgError] = useState(false);

  // Filter out nulls for interactive charts or interpolate if needed
  const chartData = HISTORICAL_DATA.map(d => ({
    ...d,
    readingRateDisplay: d.readingRate === null ? undefined : d.readingRate,
    overdependenceDisplay: d.overdependenceIndex === null ? undefined : d.overdependenceIndex
  }));

  // Custom dual-axis tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 dark:bg-zinc-900/95 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-850 shadow-xl backdrop-blur-sm">
          <p className="font-mono text-xs font-bold text-zinc-950 dark:text-zinc-50 mb-2">
            {label}년도 지표 분석
          </p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between space-x-6 py-1">
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-sans flex items-center gap-1.5">
                <span 
                  className="w-2.5 h-2.5 rounded-full inline-block" 
                  style={{ backgroundColor: entry.color }}
                />
                {entry.name}
              </span>
              <span className="text-xs font-mono font-extrabold text-zinc-950 dark:text-white">
                {entry.value !== undefined ? `${entry.value}${entry.unit || ""}` : "데이터 미실시"}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-[#D2D2D7] dark:border-[#2C2C2E] transition-colors duration-300 shadow-sm">
      
      {/* Navigation & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#F5F5F7] dark:border-[#2C2C2E] pb-5 mb-6 gap-4">
        <div>
          <h2 className="text-[#1D1D1F] dark:text-white text-base font-bold flex items-center gap-2 font-display tracking-tight">
            연도별 추이 분석 시각화
          </h2>
          <p className="text-xs text-apple-secondary dark:text-zinc-400 mt-1">
            문화체육관광부 청소년 독서실태 조사 및 과기정통부 청소년 스마트폰 과의존 지표 교차 검토
          </p>
        </div>
        
        {/* Toggle Switch Tabs in Apple segment style */}
        <div className="flex self-start sm:self-center p-1 bg-[#E8E8ED] dark:bg-zinc-800 rounded-full border border-[#D2D2D7]/40 dark:border-zinc-700">
          <button
            onClick={() => setActiveTab("image")}
            className={`flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 ${
              activeTab === "image"
                ? "bg-white dark:bg-zinc-900 text-apple-text dark:text-white shadow-xs"
                : "text-apple-secondary dark:text-[#86868B]"
            }`}
          >
            <Image className="w-3.5 h-3.5 text-apple-blue" />
            보고서 이미지 원본
          </button>
          <button
            onClick={() => setActiveTab("interactive")}
            className={`flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 ${
              activeTab === "interactive"
                ? "bg-white dark:bg-zinc-900 text-apple-text dark:text-white shadow-xs"
                : "text-apple-secondary dark:text-[#86868B]"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-apple-blue" />
            인터랙티브 추세 차트
          </button>
        </div>
      </div>

      {/* Main Plot Area */}
      <div className="flex justify-center items-center w-full min-h-[400px] mb-8 bg-[#FAFAFA] dark:bg-zinc-950 rounded-2xl overflow-hidden border border-[#D2D2D7] dark:border-[#2C2C2E] transition-colors">
        
        {activeTab === "image" ? (
          <div className="w-full flex flex-col justify-center items-center p-4">
            {!imgError ? (
              <img 
                src="/youth_reading_vs_internet.png" 
                alt="청소년 독서율 및 인터넷·스마트폰 과의존 추이 (2013-2025)"
                onError={() => setImgError(true)}
                id="report-visual-image"
                className="max-h-[500px] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="p-8 text-center max-w-md">
                <AlertTriangle className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  보고서 그래프 이미지 파일 로딩 대기 중
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                  프로젝트 내에 이미지 파일이 배치되면 자동으로 연동됩니다. 상단의 '인터랙티브 추세 차트' 탭을 사용하여 정적 데이터를 실시간으로 시뮬레이션하십시오.
                </p>
                <button
                  onClick={() => setActiveTab("interactive")}
                  className="mt-4 px-4 py-2 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-medium rounded-xl hover:opacity-90 cursor-pointer transition-all"
                >
                  대화형 차트 대시보드로 이동
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-[450px] p-4 sm:p-6 select-none">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 px-1 gap-2">
              <span className="font-sans text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
                청소년 독서율 및 과의존지수 이중 축 시계열 분석 (2013-2025)
              </span>
              <div className="flex items-center gap-4 text-[10px] font-mono">
                <span className="flex items-center gap-1.5 text-sky-500 font-semibold">
                  <span className="w-2.5 h-1 bg-sky-500 inline-block rounded-full" /> 종이책 독서율 (%)
                </span>
                <span className="flex items-center gap-1.5 text-rose-500 font-semibold">
                  <span className="w-2.5 h-1 border-t-2 border-dashed border-rose-500 inline-block" /> 과의존 지수 (4점 만점)
                </span>
              </div>
            </div>
            
            <div className="w-full h-84">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={chartData}
                  margin={{ top: 20, right: 10, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#eaeaea" className="dark:opacity-10" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#888" 
                    fontSize={11} 
                    tickLine={false} 
                    axisLine={false}
                    dy={8}
                  />
                  {/* Left Axis for Reading Rates */}
                  <YAxis 
                    yAxisId="left"
                    domain={[80, 100]}
                    stroke="#0284c7"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    dx={-6}
                  />
                  {/* Right Axis for Overdependence */}
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    domain={[1.5, 2.5]}
                    stroke="#f43f5e"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    dx={6}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine 
                    yAxisId="left" 
                    y={87.4} 
                    stroke="#f43f5e" 
                    strokeDasharray="3 3" 
                  />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    name="종이책 독서율"
                    dataKey="readingRateDisplay"
                    stroke="#0284c7"
                    strokeWidth={3}
                    dot={{ r: 6, strokeWidth: 1 }}
                    activeDot={{ r: 8 }}
                    unit="%"
                    connectNulls
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    name="스마트폰 과의존 지수"
                    dataKey="overdependenceDisplay"
                    stroke="#f43f5e"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ r: 6, strokeWidth: 1 }}
                    activeDot={{ r: 8 }}
                    unit="점"
                    connectNulls
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            <p className="mt-4 text-[10px] text-zinc-400 select-none text-center italic">
              * 상관분석에 따르면 스마트폰 집착(인지적 현저성)과 독서 행태는 r = -0.8493으로 극도의 역상관을 입증합니다.
            </p>
          </div>
        )}
      </div>

      {/* Custom styled HTML metrics table */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
            연도별 상세 실무 통계 지표 대시보드
          </h3>
          <span className="text-[10px] text-zinc-400 flex items-center gap-1 leading-none font-sans">
            <HelpCircle className="w-3.5 h-3.5" /> 격년 및 상반기 추이를 교정 반영함.
          </span>
        </div>
        
        <div className="overflow-x-auto rounded-xl border border-[#D2D2D7] dark:border-[#2C2C2E]">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#F5F5F7] dark:bg-zinc-800/60 border-b border-[#D2D2D7] dark:border-[#2C2C2E]">
                <th className="p-4 font-semibold text-apple-text dark:text-white">조사 연도</th>
                <th className="p-4 font-semibold text-apple-blue">청소년 종이책 독서율 (%)</th>
                <th className="p-4 font-semibold text-rose-600">스마트폰 과의존 지수 (4점 만점)</th>
                <th className="p-4 font-semibold text-apple-secondary dark:text-zinc-400 font-sans">특이 사항 및 주요 트렌드</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
              {HISTORICAL_DATA.map((item: YearData) => {
                const isPeakOverdep = item.year === 2025;
                const isWorstReading = item.year === 2021;
                
                return (
                  <tr 
                    key={item.year} 
                    className="hover:bg-zinc-50/50 dark:hover:bg-zinc-850/30 transition-colors"
                  >
                    <td className="p-4 font-bold text-zinc-950 dark:text-white">
                      {item.year}년
                    </td>
                    <td className="p-4">
                      {item.readingRate !== null ? (
                        <div className="flex items-center space-x-1.5">
                          <span className={`font-semibold ${isWorstReading ? "text-rose-500 font-extrabold" : ""}`}>
                            {item.readingRate}%
                          </span>
                          {isWorstReading && (
                            <span className="text-[9px] bg-rose-50 dark:bg-rose-950/20 text-rose-500 px-1.5 py-0.5 rounded font-bold font-sans">
                              사상 최저치
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-zinc-400 italic">조사 미실시(격년)</span>
                      )}
                    </td>
                    <td className="p-4">
                      {item.overdependenceIndex !== null ? (
                        <div className="flex items-center space-x-1.5">
                          <span className={`font-semibold ${isPeakOverdep ? "text-rose-600 font-extrabold" : ""}`}>
                            {item.overdependenceIndex.toFixed(2)}점
                          </span>
                          {isPeakOverdep && (
                            <span className="text-[9px] bg-red-50 dark:bg-rose-950/30 text-rose-600 px-1.5 py-0.5 rounded font-bold font-sans">
                              역대 최고치
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-zinc-400 italic">통계 설계 전</span>
                      )}
                    </td>
                    <td className="p-4 font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.year === 2013 && "종이책 중심의 마지막 전통 가독성 우위 세대."}
                      {item.year === 2015 && "스마트 기기 보급 본격화로 저하 국면에 직면."}
                      {item.year === 2016 && "스마트폰 과의존 척도 정밀 실태조사 도임 개시."}
                      {item.year === 2017 && "미디어 플랫폼 다악화로 독서율 90% 중반 붕괴."}
                      {item.year === 2018 && "유튜브 등 무한 알고리즘 기반 비디오 유행 가속."}
                      {item.year === 2019 && "활자 이탈 및 디지털 편식이 복동화되며 가강화."}
                      {item.year === 2020 && "팬데믹 원격 기기 보급에 따른 몰입 시작."}
                      {item.year === 2021 && "종이책 독서율 조사 최하점 기록 및 피독 하락."}
                      {item.year === 2022 && "온라인 플랫폼 대체 현상이 정상화되며 유지."}
                      {item.year === 2023 && "숏폼 및 숏비디오가 청소년 전두엽 주의력을 전면 장악."}
                      {item.year === 2024 && "도서관 중심 디지털 독서 융합 리퍼런스 논의 확대."}
                      {item.year === 2025 && "스마트기기 과몰입 점수가 최고점에 도달하며 리터러시 위기 선포."}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
