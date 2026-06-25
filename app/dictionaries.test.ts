import { describe, it, expect } from "vitest";
import { DEFAULT_LOCALE, LOCALES, dictionaries } from "./dictionaries";

const locales = LOCALES.map((l) => l.code);

describe("dictionaries", () => {
  it("declares the default locale among LOCALES", () => {
    expect(locales).toContain(DEFAULT_LOCALE);
  });

  it("has a dictionary for every declared locale", () => {
    for (const code of locales) {
      expect(dictionaries[code]).toBeDefined();
    }
  });

  it("keeps matching list lengths across locales", () => {
    const base = dictionaries[DEFAULT_LOCALE];
    for (const code of locales) {
      const d = dictionaries[code];
      expect(d.projects).toHaveLength(base.projects.length);
      expect(d.education).toHaveLength(base.education.length);
      expect(d.experience.achievements).toHaveLength(
        base.experience.achievements.length,
      );
      expect(d.hero.description).toHaveLength(base.hero.description.length);
    }
  });

  it("keeps identical tags per project across locales", () => {
    const base = dictionaries[DEFAULT_LOCALE];
    for (const code of locales) {
      dictionaries[code].projects.forEach((project, i) => {
        expect(project.tags).toEqual(base.projects[i].tags);
        expect(project.roles).toHaveLength(base.projects[i].roles.length);
      });
    }
  });

  it("has no empty translatable strings", () => {
    for (const code of locales) {
      const d = dictionaries[code];
      const strings = [
        d.hero.eyebrow,
        d.hero.titleName,
        d.hero.contactCta,
        d.hero.projectCta,
        ...d.hero.description,
        d.experience.company,
        d.experience.period,
        d.experience.role,
        ...d.experience.achievements,
        ...d.projects.flatMap((p) => [p.title, p.summary, p.year, ...p.roles]),
        ...d.education.flatMap((e) => [e.title, e.detail, e.period]),
        d.contact.heading,
        d.footer,
      ];
      for (const s of strings) {
        expect(s.trim().length).toBeGreaterThan(0);
      }
    }
  });
});
