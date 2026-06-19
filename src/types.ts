/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface YearData {
  year: number;
  readingRate: number | null; // 백분율 (%)
  overdependenceIndex: number | null; // 4점 만점
}

export interface Proposal {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export const HISTORICAL_DATA: YearData[] = [
  { year: 2013, readingRate: 96.0, overdependenceIndex: null },
  { year: 2015, readingRate: 94.9, overdependenceIndex: null },
  { year: 2016, readingRate: null, overdependenceIndex: 2.01 },
  { year: 2017, readingRate: 91.7, overdependenceIndex: 2.06 },
  { year: 2018, readingRate: null, overdependenceIndex: 2.10 },
  { year: 2019, readingRate: 90.7, overdependenceIndex: 2.10 },
  { year: 2020, readingRate: null, overdependenceIndex: 2.14 },
  { year: 2021, readingRate: 87.4, overdependenceIndex: 2.08 },
  { year: 2022, readingRate: null, overdependenceIndex: 2.14 },
  { year: 2023, readingRate: null, overdependenceIndex: 2.22 },
  { year: 2024, readingRate: null, overdependenceIndex: 2.19 },
  { year: 2025, readingRate: null, overdependenceIndex: 2.26 },
];

export const PROPOSALS: Proposal[] = [
  {
    id: "critical-media",
    title: "비판적 미디어 정보 해독력(Critical Media Literacy) 교육 제공",
    icon: "ShieldAlert",
    shortDesc: "자극적인 가짜뉴스를 분별하고 생성형 AI가 출력한 정보의 편향성을 스스로 검증하는 비판적 문해력 워크숍 활성화.",
    fullDesc: "스마트폰을 통한 자극적인 단문형 숏폼 콘텐츠 소비와 넘쳐나는 가짜뉴스 속에서 청소년들이 스스로 주체적인 정보 필터 역할을 할 수 있도록 비판적 디지털 문해력 워크숍 및 팩트체크 리터러시 전용 세션을 상시 운영합니다. 생성형 AI 출처 정보 점검 및 소셜 미디어 알고리즘의 확증편향(Filter Bubble)을 폭넓게 고찰할 수 있는 문헌정보학 기반 심화 교과 제언입니다."
  },
  {
    id: "makerspace-creative",
    title: "메이커스페이스(Digital Maker Space)를 통한 능동적 창작과 독서의 융합",
    icon: "Cpu",
    shortDesc: "독서 토론한 내용을 메타버스 공간이나 아두이노 장비 개발 등으로 환원하는 텍스트-디지털 선순환 구조 유도.",
    fullDesc: "전통적인 '읽기'에 머물러 있지 않고, 도서관의 메이커 장비와 디지털 미디어를 결합하여 문해력을 시각적 및 하드웨어적 결과물로 표출합니다. 독서 토론 및 문헌 탐색 결과를 기획서 삼아 VR/XR 메타버스 갤러리 빌드, 3D 프린팅 키트 제작, 혹은 코딩 피지컬 컴퓨팅으로 연계하여 청소년들이 활자 매체를 생생한 창조 지식으로 다루게 합니다."
  },
  {
    id: "digital-detox-club",
    title: "스마트폰 디톡스 독서클럽(Digital Detox Book Club) 개설",
    icon: "SmartphoneOff",
    shortDesc: "도서관 내 전자기기를 안전하게 보관용 상자에 수납하고, 스마트폰 없는 '고요한 읽기 모임(Silent Reading)' 구성.",
    fullDesc: "스마트 기기의 과도한 푸시 알림과 간섭으로부터 청소년의 수용 기억과 전두엽을 일시 보호하고 깊은 생각(Deep Thinking)을 복원시킵니다. 스마트폰이나 스마트워치 등 유해 기기를 사물함/바구니에 보관한 뒤 지정 좌석에서 한적한 노이즈 캔슬링 속에 종이책만 온전히 집중하여 정독하는 90분 독서 세션과 면대면 활력 토론을 진행하며 무너진 오프라인 공동체를 회복합니다."
  }
];
