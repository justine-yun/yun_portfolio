import { ThemeToggle } from "./theme-toggle";

const EMAIL = "riskyjunk@gmail.com";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

const achievements = [
  "Retool 어드민을 Phoenix LiveView로 마이그레이션 — 구독료 월 $60 절감",
  "출하 등급 데이터 수집 파이프라인 구축 — 일 70,000여 건 수집",
  "정적 코드 분석으로 중복 코드 검출, Template으로 묶어 개발 생산성 개선",
  "카카오톡 연계 알림으로 사용자 접근성 향상",
];

const projects = [
  {
    title: "팜스플랜 양돈 매니저",
    blurb:
      "양돈 농장 관리 서비스. 번식돈·비육돈 관리 기능을 리팩토링하고, 양식 엑셀 파일을 서비스 데이터로 업로드하는 기능을 구현했다.",
    year: "2023",
    tags: ["Elixir", "Phoenix LiveView", "PostgreSQL"],
  },
  {
    title: "팜스플랜 양계 매니저",
    blurb:
      "양계 농장 관리 서비스. DB 스키마 모델링과 백엔드 context를 작성하고 주기별 입고·출하 관리 페이지를 개발했다.",
    year: "2023",
    tags: ["Elixir", "Phoenix LiveView", "PostgreSQL"],
  },
  {
    title: "사내 어드민 페이지",
    blurb: "농장 및 유저 관리 페이지. 기존 Retool로 구현된 어드민을 Phoenix LiveView로 마이그레이션했다.",
    year: "2024",
    tags: ["Elixir", "Phoenix LiveView", "Migration"],
  },
  {
    title: "비육돈 출하정산 서비스",
    blurb:
      "출하 등급 데이터를 수집해 예상 판매가를 계산하고 알림을 제공. 공공데이터포털 API Client와 크롤러를 개발하고, NHN·Kakao Business API로 시세·계근표 알림을 전송했다.",
    year: "2024",
    tags: ["Elixir", "Crawler", "API Client", "NHN", "Kakao"],
  },
];

const techStack = [
  { group: "Language", items: ["Elixir", "JavaScript", "TypeScript"] },
  { group: "Backend", items: ["Phoenix LiveView", "Express.js", "NestJS"] },
  {
    group: "Database & Infra",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Naver Cloud Platform"],
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-medium tracking-tight">
          Yun<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="eyebrow transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-24 sm:pt-36">
      <p className="eyebrow rise">Backend Engineer · 윤성호</p>
      <h1 className="rise mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
        백엔드 개발자 <span className="text-accent">윤성호</span>입니다.
      </h1>
      <p className="rise mt-8 max-w-2xl text-lg leading-8 text-muted">
        DB 스키마 모델링부터 외부 API 연동, 주기적 데이터 수집까지 —
        <br />
        사용자에게 보이지 않는 곳에서 서비스가 안정적으로 돌아가게 만드는 일을 좋아합니다.
      </p>
      <div className="rise mt-10 flex items-center gap-6">
        <a
          href="#contact"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          연락하기
        </a>
        <a
          href="#project"
          className="text-sm font-medium underline decoration-hairline decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
        >
          프로젝트 보기
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-hairline">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[200px_1fr]">
        <p className="eyebrow">About</p>
        <div className="max-w-2xl space-y-6 text-lg leading-8">
          <p>
            서비스의 데이터 흐름을 설계하는 일을 좋아하는 백엔드 개발자다. DB 스키마 모델링과 백엔드 context 작성부터
            외부 API 연동, 주기적 데이터 수집까지 — 사용자에게 보이지 않는 곳에서 서비스가 안정적으로 돌아가게 만드는 데
            집중한다.
          </p>
          <p className="text-muted">
            한양대학교 ERICA 전자공학부를 졸업하고, 네이버 커넥트재단 부스트캠프 웹·모바일 7기 챌린지·멤버십 과정을 거쳐
            개발자로 전향했다.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-hairline">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[200px_1fr]">
        <div>
          <p className="eyebrow">Experience</p>
          <p className="eyebrow mt-3">2023 — 2024</p>
        </div>
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-xl font-medium tracking-tight">한국축산데이터</h3>
            <span className="eyebrow">2023.04 — 2024.10 · 1년 7개월</span>
          </div>
          <p className="mt-2 text-muted">웹 백엔드 개발자 · 개발팀</p>
          <ul className="mt-8 space-y-4">
            {achievements.map(item => (
              <li key={item} className="flex gap-3 leading-7">
                <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Project() {
  return (
    <section id="project" className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="eyebrow">Project</p>
        <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-[200px_1fr]">
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight">한국축산데이터</h3>
            <p className="eyebrow mt-3">2023 — 2024</p>
          </div>
          <ul>
            {projects.map(project => (
              <li key={project.title} className="group border-t border-hairline">
              <div className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <div className="flex items-baseline gap-4">
                    <h3 className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <span className="eyebrow">{project.year}</span>
                  </div>
                  <p className="mt-2 max-w-xl leading-7 text-muted">{project.blurb}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:max-w-[220px] sm:justify-end">
                  {project.tags.map(tag => (
                    <span key={tag} className="rounded-full border border-hairline px-3 py-1 text-xs text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-t border-hairline">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[200px_1fr]">
        <p className="eyebrow">Tech stack</p>
        <div className="max-w-2xl space-y-10">
          {techStack.map(row => (
            <div key={row.group}>
              <p className="eyebrow">{row.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {row.items.map(item => (
                  <span key={item} className="rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          함께 만들 일이 있다면 연락 주세요.
        </h2>
        <div className="mt-10">
          <a
            href={`mailto:${EMAIL}`}
            className="text-lg underline decoration-hairline decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {EMAIL}
          </a>
        </div>
        <p className="eyebrow mt-20">© 2026 윤성호 · Backend Engineer</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-paper">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Project />
        <Stack />
        <Contact />
      </main>
    </div>
  );
}
