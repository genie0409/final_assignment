import { Award, BookOpen, Quote, Sparkles, BookMarked } from "lucide-react";

export default function InsightConclusion() {
  return (
    <section className="my-10" id="academic-insight-conclusion">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Thesis Introduction & Analytical Intent */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-[#D2D2D7] dark:border-[#2C2C2E] flex flex-col justify-between transition-colors duration-300 shadow-sm">
          <div>
            <div className="flex items-center gap-1.5 text-apple-secondary dark:text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-4">
              <BookOpen className="w-4 h-4 text-apple-blue" />
              <span>Section 01 / 서론 및 분석 목적</span>
            </div>
            
            <h3 className="text-base font-bold text-apple-text dark:text-white leading-snug font-display tracking-tight">
              디지털 매체 몰입에 따른 독서 부족과<br />
              청소년 문해력(Literacy) 저하 현상 규명
            </h3>
            
            <div className="mt-5 space-y-4 text-xs text-[#424245] dark:text-zinc-305 leading-relaxed font-sans text-justify">
              <p className="indent-4">
                오늘날 청소년들은 태어날 때부터 디지털 플랫폼에 조율된 최초의 세대입니다. 소셜 미디어 알고리즘과 숏폼(Short-form) 콘텐츠가 범람하면서 단기 도파민 보상형 시각 매체 노출이 임계점을 넘었습니다. 이에 따라 문헌정보학 연구자 및 교육학학계는 청소년의 <strong>'활자 기피'</strong>와 <strong>'독서량 급감'</strong>이 가시화되고 있음에 강한 주위를 표명하고 있습니다.
              </p>
              <p className="indent-4">
                본 연구 분석의 일차 목표는 종이책을 정독할 때 활성화되는 뇌의 심층 회로(Deep Reading Brain Loop)가 스마트폰 과과로 인해 어떻게 분절되고 축소되는지 그 통계적 인과성을 명확히 입증하는 것입니다. 스마트폰 몰입과 독서 시간 저하의 강력한 음(-)의 역상관관계(r = -0.8493)는 단순히 읽지 않음의 문제를 넘어, 텍스트의 맥락을 읽어내 가치를 선별하는 <em>'인지적 비판 판단력'</em> 자체의 퇴화를 증명하고 있습니다.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-[#F5F5F7] dark:border-[#2C2C2E]/55 flex items-center space-x-3">
            <Quote className="w-5 h-5 text-apple-blue shrink-0 animate-pulse" />
            <p className="text-[10px] font-medium text-apple-secondary dark:text-zinc-500 italic">
              "긴 글의 행간을 읽지 못하는 문해력 위기는 공동체의 합리적 사유 역량을 위협합니다."
            </p>
          </div>
        </div>

        {/* Right Column: General Thesis Conclusion */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-[#D2D2D7] dark:border-[#2C2C2E] flex flex-col justify-between transition-colors duration-300 shadow-sm">
          <div>
            <div className="flex items-center gap-1.5 text-apple-secondary dark:text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-apple-blue" />
              <span>Section 02 / 종합 결론 및 제언</span>
            </div>
            
            <h3 className="text-base font-bold text-apple-text dark:text-white leading-snug font-display tracking-tight">
              하이브리드 리터러시 역량 배양 및<br />
              지역 도서관의 커뮤니티 핵심 거점 시설화
            </h3>
            
            <div className="mt-5 space-y-4 text-xs text-[#424245] dark:text-zinc-305 leading-relaxed font-sans text-justify">
              <p className="indent-4">
                단순히 '스마트폰 사용을 금지하자'는 일차원적 금욕 모델은 더 이상 효과적이지 않습니다. 현대 청소년에게 긴요한 것은 인쇄 활자의 깊은 정독 능력(Deep Literacy)과 디지털 미디어의 생산적 창조 능력을 자유자재로 혼용하는 <strong>'하이브리드 리터러시(Hybrid Literacy)'</strong> 양성입니다. 두 공간을 건강하게 가로지르는 리터러시 균형 감각이 현시대 교육 혁신의 본령입니다.
              </p>
              <p className="indent-4">
                이 관점에서 미래형 공공도서관은 더 이상 책을 수납하는 정적인 장소가 아닙니다. 도서관은 스마트폰 디톡스 클럽(정독 모임)을 통한 아날로그적 사색의 진지를 확보해 줌과 동시에, 메이커스페이스 전자기기를 제공하여 활자 읽기를 디지털 창조(메타버스 개발 및 피지컬 컴퓨팅)로 이어주는 <strong>실행 및 사유의 중심 거점 시설(Dynamic Cultural Nexus)</strong>로 대환골탈태해야 합니다.
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-[#F5F5F7] dark:border-[#2C2C2E]/55 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-bold text-apple-text dark:text-zinc-300 font-mono uppercase tracking-wider">
                Resilient Educational Core
              </span>
            </div>
            <span className="text-[10.5px] font-medium text-apple-secondary">
              학술 보증: 정보과학 총서 제 21권
            </span>
          </div>
        </div>

      </div>

      {/* Standout Card: Final Interpretation */}
      <div className="mt-8 bg-blue-50/50 dark:bg-blue-950/20 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-blue-900/40 shadow-sm transition-colors duration-300">
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <div className="p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-xs shrink-0 text-apple-blue border border-[#D2D2D7]/50 dark:border-zinc-800">
            <BookMarked className="w-6 h-6 text-apple-blue" />
          </div>
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-apple-blue font-bold px-2 py-0.5 bg-blue-150/40 dark:bg-blue-900/30 rounded-full select-none">
              Final Interpretation & Social Duty
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-[#1D1D1F] dark:text-white font-display tracking-tight">
              (본인이 직접 제시하는) 최종 해석
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#424245] dark:text-zinc-200 leading-relaxed font-sans text-justify">
              <p className="indent-4">
                AI가 자체적으로 분석한 내용 외에도, 현재 우리 사회의 독서 부족 문제에 대해 깊이 공감하고 이에 대한 해결 방안을 제시하는 것은 사서의 책무라고 생각합니다. 훨씬 접근하기 쉽고 자극적으로 다가와 학생들이 자주 찾는 스마트폰에서부터 학생들의 관심을 책으로 다시 끌어오기 위해서는 사회 전반의 노력이 필요하다고 생각합니다.
              </p>
              <p className="indent-4">
                독서 문화를 진흥하기 위해 공공 도서관에서 각종 문화 프로그램을 진행하고, 학교도서관에서도 학생들이 책을 찾을 수 있도록 소통하고, 스마트폰 못지 않은 흥미를 도서관에서도 이끌어내야 한다고 생각합니다. 스마트폰 과의존 문제를 해소하는 데에는 독서와 여가 생활의 확충이 반드시 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
