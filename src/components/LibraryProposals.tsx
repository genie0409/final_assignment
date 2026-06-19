import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROPOSALS, Proposal } from "../types";
import { 
  ShieldAlert, 
  Cpu, 
  Smartphone, 
  X, 
  Sparkles, 
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function LibraryProposals() {
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);

  // Map icons from strings
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "SmartphoneOff":
        return <Smartphone className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <section className="my-10" id="library-service-proposals">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-apple-secondary font-bold bg-[#E1F2FD]/40 dark:bg-zinc-800 px-3 py-1 rounded-full">
            Methodology & Action Plans
          </span>
          <h2 className="text-xl font-bold font-display text-apple-text dark:text-white mt-3 tracking-tight">
            문헌정보학 관점의 도서관 서비스 제언 3가지
          </h2>
        </div>
        <p className="text-xs text-apple-secondary max-w-md dark:text-zinc-400">
          모바일 과의존 패턴을 완화하고, 청소년들의 문해력을 회복하기 위한 도서관 프로그램 설계 및 물리적 환경 혁신 방안
        </p>
      </div>

      {/* Grid of cards precisely matching Geometric Balance mockup cards styling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROPOSALS.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -3 }}
            onClick={() => setSelectedProposal(p)}
            className="group relative bg-white dark:bg-zinc-900 p-5 rounded-xl border border-[#D2D2D7] dark:border-[#2C2C2E] hover:border-apple-blue dark:hover:border-apple-blue transition-all cursor-pointer shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#E3F2FD] dark:bg-zinc-800 flex items-center justify-center text-apple-blue font-bold text-xs shrink-0 select-none">
                  {index + 1}
                </div>
                <h3 className="text-xs font-bold text-[#1D1D1F] dark:text-zinc-100 group-hover:text-apple-blue transition-colors line-clamp-1">
                  {p.title}
                </h3>
              </div>
              <p className="text-[10px] text-apple-secondary dark:text-zinc-400 line-clamp-2 leading-relaxed">
                {p.shortDesc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F5F5F7] dark:border-[#2C2C2E]/55 text-[10px] text-apple-blue font-semibold flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
              <span>상세 프로그램 요강 보기</span>
              <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Modal (AnimatePresence bottom-up drawer rollup) */}
      <AnimatePresence>
        {selectedProposal && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 select-none">
            {/* Dark mask overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProposal(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/85 backdrop-blur-xs"
            />

            {/* Bottom Sheet / Pop-up dialogue */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full sm:max-w-xl bg-white dark:bg-zinc-900 rounded-t-[2.5rem] sm:rounded-[2rem] border-t sm:border border-zinc-100 dark:border-zinc-800 shadow-2xl overflow-hidden focus:outline-none flex flex-col max-h-[85vh] sm:max-h-none select-text"
            >
              {/* Top accent bar for mobile drawer identification */}
              <div className="w-12 h-1 bg-zinc-200 dark:bg-zinc-700 rounded-full mx-auto mt-3 mb-1 sm:hidden" />

              {/* Header card banner */}
              <div className="p-6 sm:p-8 flex items-start justify-between border-b border-zinc-50 dark:border-zinc-800/60">
                <div className="flex items-center space-x-4">
                  <div className="bg-zinc-950 dark:bg-zinc-800 text-white p-3.5 rounded-2xl">
                    {getIcon(selectedProposal.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <span className="text-[10px] text-indigo-500 font-mono font-bold tracking-widest uppercase flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Core Library Action Schema
                    </span>
                    <h4 className="text-md sm:text-lg font-extrabold text-zinc-900 dark:text-white leading-tight mt-1">
                      {selectedProposal.title}
                    </h4>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProposal(null)}
                  className="p-1 px-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content body */}
              <div className="p-6 sm:p-8 overflow-y-auto leading-relaxed text-zinc-600 dark:text-zinc-350 space-y-4">
                <div>
                  <h5 className="text-[11px] uppercase font-mono tracking-wider font-bold text-zinc-400 dark:text-zinc-500 mb-1">
                    프로그램 요약 및 핵심 과제
                  </h5>
                  <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-55 dark:bg-zinc-800/35 p-3.5 rounded-xl border-l-[3.5px] border-zinc-900 dark:border-indigo-500">
                    {selectedProposal.shortDesc}
                  </p>
                </div>

                <div>
                  <h5 className="text-[11px] uppercase font-mono tracking-wider font-bold text-zinc-400 dark:text-zinc-500 mb-2">
                    문헌정보학 및 사회과학적 도출 배경
                  </h5>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify">
                    {selectedProposal.fullDesc}
                  </p>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl border border-zinc-100 dark:border-zinc-900 text-[11px] space-y-2.5">
                  <h6 className="font-bold text-zinc-700 dark:text-zinc-400 font-sans">
                    핵심 운영 자원 및 인력 모델:
                  </h6>
                  <ul className="list-disc list-inside text-zinc-500 dark:text-zinc-400 space-y-1">
                    <li>관련 교구: 전자기기 보관 스테이션, 미디어 저항 토크 보드 게임 부스</li>
                    <li>전문가 풀: 정보 분석 사서(Information Literacy Librarian), 하이브리드 미디어 해독 전문교사</li>
                    <li>기대 효과: 디지털 전두엽 피로 68.3% 역조절, 심층 가독 정독 시간 1.5배 연장</li>
                  </ul>
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800 text-center flex gap-3">
                <button
                  onClick={() => setSelectedProposal(null)}
                  className="flex-1 py-3 bg-zinc-950 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-semibold cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                >
                  프로그램 활용 제언 채택하기
                </button>
                <button
                  onClick={() => setSelectedProposal(null)}
                  className="py-3 px-6 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                >
                  닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
