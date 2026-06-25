export type Locale = "ko" | "en";

export const DEFAULT_LOCALE: Locale = "ko";

// Add "ja" here (and a `ja` block in `dictionaries`) once Japanese text is ready.
export const LOCALES: { code: Locale; label: string }[] = [
  { code: "ko", label: "KO" },
  { code: "en", label: "EN" },
];

type Project = {
  title: string;
  blurb: string;
  year: string;
  tags: string[];
};

type EducationEntry = {
  title: string;
  detail: string;
  period: string;
};

export type Dictionary = {
  hero: {
    eyebrow: string;
    titlePre: string;
    titleName: string;
    titlePost: string;
    description: string[];
    contactCta: string;
    projectCta: string;
  };
  experience: {
    company: string;
    period: string;
    role: string;
    achievements: string[];
  };
  projects: Project[];
  education: EducationEntry[];
  contact: {
    heading: string;
  };
  footer: string;
};

export const dictionaries: Record<Locale, Dictionary> = {
  ko: {
    hero: {
      eyebrow: "Backend Engineer · 윤성호",
      titlePre: "백엔드 개발자 ",
      titleName: "윤성호",
      titlePost: "입니다.",
      description: [
        "DB 스키마 모델링부터 외부 API 연동, 주기적 데이터 수집까지 —",
        "사용자에게 보이지 않는 곳에서 서비스가 안정적으로 돌아가게 만드는 일을 좋아합니다.",
      ],
      contactCta: "연락하기",
      projectCta: "프로젝트 보기",
    },
    experience: {
      company: "한국축산데이터",
      period: "2023.04 — 2024.10 · 1년 7개월",
      role: "웹 백엔드 개발자 · 개발팀",
      achievements: [
        "Retool 어드민을 Phoenix LiveView로 마이그레이션 — 구독료 월 $60 절감",
        "출하 등급 데이터 수집 파이프라인 구축 — 일 70,000여 건 수집",
        "정적 코드 분석으로 중복 코드 검출, Template으로 묶어 개발 생산성 개선",
        "카카오톡 연계 알림으로 사용자 접근성 향상",
      ],
    },
    projects: [
      {
        title: "팜스플랜 양돈 매니저",
        blurb: "양돈 농장 관리 서비스. 번식돈·비육돈 관리 기능 리팩토링, 양식 엑셀 파일 업로드 기능 구현.",
        year: "2023",
        tags: ["Elixir", "Phoenix LiveView", "PostgreSQL"],
      },
      {
        title: "팜스플랜 양계 매니저",
        blurb: "양계 농장 관리 서비스. DB 스키마 모델링, 백엔드 context 작성, 주기별 입고·출하 관리 페이지 개발.",
        year: "2023",
        tags: ["Elixir", "Phoenix LiveView", "PostgreSQL"],
      },
      {
        title: "사내 어드민 페이지",
        blurb: "농장 및 유저 관리 페이지. 기존 Retool로 구현된 어드민을 Phoenix LiveView로 마이그레이션.",
        year: "2024",
        tags: ["Elixir", "Phoenix LiveView", "Migration"],
      },
      {
        title: "비육돈 출하정산 서비스",
        blurb:
          "출하 등급 데이터를 수집해 예상 판매가를 계산하고 알림을 제공. 공공데이터포털 API Client와 돼지 출하 데이터 수집 크롤러 개발. NHN·Kakao Business API를 활용한 시세·계근표 알림 전송 기능 개발.",
        year: "2024",
        tags: ["Elixir", "Crawler", "API Client", "NHN", "Kakao"],
      },
    ],
    education: [
      {
        title: "한양대학교 ERICA",
        detail: "공학대학 전자공학부 학사",
        period: "2013.03 — 2020.08",
      },
      {
        title: "부스트캠프 웹·모바일 7기",
        detail: "네이버 커넥트재단 · 챌린지 / 멤버십 수료",
        period: "2022.07 — 2022.12",
      },
    ],
    contact: {
      heading: "함께하실 분들의 연락을 기다립니다.",
    },
    footer: "© 2026 윤성호 · Backend Engineer",
  },
  en: {
    hero: {
      eyebrow: "Backend Engineer · Seongho Yun",
      titlePre: "",
      titleName: "Seongho Yun",
      titlePost: ", a backend engineer.",
      description: [
        "From DB schema modeling to external API integration and scheduled data collection —",
        "Enjoying building the unseen parts that keep a service running reliably.",
      ],
      contactCta: "Get in touch",
      projectCta: "View projects",
    },
    experience: {
      company: "한국축산데이터",
      period: "Apr 2023 — Oct 2024 · 1 yr 7 mos",
      role: "Web Backend Engineer · Dev Team",
      achievements: [
        "Migrated the Retool admin to Phoenix LiveView — cut $60/mo in subscription fees",
        "Built a shipping-grade data collection pipeline — ~70,000 records per day",
        "Detected duplicate code with static analysis and unified it via templates, improving productivity",
        "Improved user accessibility with KakaoTalk-linked notifications",
      ],
    },
    projects: [
      {
        title: "Farmsplan Pig Manager",
        blurb:
          "A pig farm management service. Breeding/feeder pig feature refactoring, Excel-template data upload.",
        year: "2023",
        tags: ["Elixir", "Phoenix LiveView", "PostgreSQL"],
      },
      {
        title: "Farmsplan Poultry Manager",
        blurb:
          "A poultry farm management service. DB schema modeling, backend context authoring, inbound/shipping management pages.",
        year: "2023",
        tags: ["Elixir", "Phoenix LiveView", "PostgreSQL"],
      },
      {
        title: "Internal Admin Page",
        blurb: "Farm and user management page. Retool admin migration to Phoenix LiveView.",
        year: "2024",
        tags: ["Elixir", "Phoenix LiveView", "Migration"],
      },
      {
        title: "Feeder-Pig Shipping Settlement",
        blurb:
          "Shipping-grade data collection, sale-price estimation, and alerts. Public-data API client & crawler development, price/scale-ticket alerts via NHN and Kakao Business APIs.",
        year: "2024",
        tags: ["Elixir", "Crawler", "API Client", "NHN", "Kakao"],
      },
    ],
    education: [
      {
        title: "Hanyang University ERICA",
        detail: "B.S. in Electronic Engineering",
        period: "2013.03 — 2020.08",
      },
      {
        title: "Boostcamp Web·Mobile 7",
        detail: "Naver Connect Foundation · Challenge / Membership",
        period: "2022.07 — 2022.12",
      },
    ],
    contact: {
      heading: "Looking forward to hearing from you.",
    },
    footer: "© 2026 Seongho Yun · Backend Engineer",
  },
};
