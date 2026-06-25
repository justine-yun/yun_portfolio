"use client";

import {
  SiElixir,
  SiJavascript,
  SiTypescript,
  SiPhoenixframework,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiNaver,
} from "react-icons/si";
import { ThemeToggle } from "./theme-toggle";
import { LanguagePicker, useDict } from "./language";

const EMAIL = "riskyjunk@gmail.com";
const PHONE_NUMBER = "";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" },
  { label: "Stack", href: "#stack" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const techStack = [
  {
    group: "Language",
    items: [
      { name: "Elixir", Icon: SiElixir, color: "#4B275F" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Phoenix LiveView", Icon: SiPhoenixframework, color: "#FD4F00" },
      // Express brand is monochrome — inherit accent for dark-mode contrast.
      { name: "Express.js", Icon: SiExpress, color: undefined },
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
    ],
  },
  {
    group: "Database & Infra",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
      { name: "Naver Cloud Platform", Icon: SiNaver, color: "#03C75A" },
    ],
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-medium tracking-tight">
          Yun<span className="text-accent">.</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="eyebrow transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguagePicker />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const { hero } = useDict();
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-24 sm:pt-36">
      <p className="eyebrow rise">{hero.eyebrow}</p>
      <h1 className="rise mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl">
        {hero.titlePre}
        <br className="sm:hidden" />
        <span className="text-accent">{hero.titleName}</span>
        {hero.titlePost}
      </h1>
      <p className="rise mt-8 max-w-2xl text-lg leading-8 text-muted">
        {hero.description.map((line, i) => (
          <span key={line}>
            {line}
            {i < hero.description.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className="rise mt-10 flex items-center gap-6">
        <a
          href="#contact"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
        >
          {hero.contactCta}
        </a>
        <a
          href="#project"
          className="text-sm font-medium underline decoration-hairline decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
        >
          {hero.projectCta}
        </a>
      </div>
    </section>
  );
}

function Experience() {
  const { experience } = useDict();
  return (
    <section id="experience" className="border-t border-hairline">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[200px_1fr]">
        <div>
          <p className="eyebrow">Experience</p>
          <p className="eyebrow mt-3">2023 — 2024</p>
        </div>
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-xl font-medium tracking-tight">{experience.company}</h3>
            <span className="eyebrow">{experience.period}</span>
          </div>
          <p className="mt-2 text-muted">{experience.role}</p>
          <ul className="mt-8 space-y-4">
            {experience.achievements.map(item => (
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
  const { projects, experience } = useDict();
  return (
    <section id="project" className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="eyebrow">Project</p>
        <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-[200px_1fr]">
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight">{experience.company}</h3>
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
                    <p className="mt-2 max-w-xl leading-7 text-muted">{project.summary}</p>
                    <ul className="mt-3 space-y-1.5">
                      {project.roles.map(role => (
                        <li key={role} className="flex gap-2 leading-6 text-muted">
                          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
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
                {row.items.map(({ name, Icon, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5 rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent"
                  >
                    <Icon aria-hidden className="h-4 w-4" color={color} />
                    {name}
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

function Education() {
  const { education } = useDict();
  return (
    <section id="education" className="border-t border-hairline">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 sm:grid-cols-[200px_1fr]">
        <p className="eyebrow">Education</p>
        <ul className="max-w-2xl">
          {education.map(item => (
            <li key={item.title} className="border-t border-hairline py-6 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-medium tracking-tight">{item.title}</h3>
                <span className="eyebrow">{item.period}</span>
              </div>
              <p className="mt-2 text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const { contact, footer } = useDict();
  return (
    <footer id="contact" className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-6 max-w-2xl font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
          {contact.heading}
        </h2>
        <div className="mt-10">
          ✉️
          <a
            href={`mailto:${EMAIL}`}
            className="text-lg ml-2 underline decoration-hairline decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {EMAIL}
          </a>
        </div>
        <div className="mt-5">
          📞
          <span className="text-lg ml-2 underline decoration-hairline decoration-2 underline-offset-4 transition-colors hover:decoration-accent">
            {PHONE_NUMBER}
          </span>
        </div>
        <p className="eyebrow mt-20">{footer}</p>
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
        <Experience />
        <Project />
        <Stack />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
