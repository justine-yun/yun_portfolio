import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguagePicker, useDict } from "./language";
import { dictionaries } from "./dictionaries";

// Minimal consumer to observe which dictionary is active.
function Probe() {
  const dict = useDict();
  return <p>{dict.hero.contactCta}</p>;
}

describe("LanguagePicker", () => {
  it("renders a button for each locale", () => {
    render(<LanguagePicker />);
    expect(screen.getByRole("button", { name: "KO" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
  });

  it("defaults to Korean", () => {
    render(<Probe />);
    expect(
      screen.getByText(dictionaries.ko.hero.contactCta),
    ).toBeInTheDocument();
  });

  it("switches the active dictionary and persists the choice", async () => {
    const user = userEvent.setup();
    render(
      <>
        <LanguagePicker />
        <Probe />
      </>,
    );

    await user.click(screen.getByRole("button", { name: "EN" }));

    expect(
      screen.getByText(dictionaries.en.hero.contactCta),
    ).toBeInTheDocument();
    expect(localStorage.getItem("locale")).toBe("en");
    expect(screen.getByRole("button", { name: "EN" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("falls back to the default for an invalid stored locale", () => {
    localStorage.setItem("locale", "fr");
    render(<Probe />);
    expect(
      screen.getByText(dictionaries.ko.hero.contactCta),
    ).toBeInTheDocument();
  });
});
