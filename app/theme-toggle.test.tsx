import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./theme-toggle";

describe("ThemeToggle", () => {
  it("starts in light mode (no system preference)", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "다크 모드로 전환",
    );
  });

  it("switches to dark on click and persists the choice", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(button).toHaveAttribute("aria-label", "라이트 모드로 전환");
  });

  it("toggles back to light on a second click", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    await user.click(button);
    await user.click(button);

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
