import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";
import { dictionaries } from "./dictionaries";

describe("Home page", () => {
  it("renders the nav and key sections", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByText("Tech stack")).toBeInTheDocument();
    expect(
      screen.getByText(dictionaries.ko.education[0].title),
    ).toBeInTheDocument();
    expect(
      screen.getByText(dictionaries.ko.contact.heading),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(dictionaries.ko.experience.company).length,
    ).toBeGreaterThan(0);
  });

  it("renders Korean content by default", () => {
    render(<Home />);
    expect(
      screen.getByText(dictionaries.ko.contact.heading),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(dictionaries.en.contact.heading),
    ).not.toBeInTheDocument();
  });

  it("switches content to English via the picker", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(
      screen.getByText(dictionaries.en.contact.heading),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(dictionaries.ko.contact.heading),
    ).not.toBeInTheDocument();
  });

  it("toggles dark mode from the header", async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(screen.getByRole("button", { name: "다크 모드로 전환" }));

    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
