import { describe, it, expect, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { DevtoolsGuard } from "./devtools-guard";

afterEach(() => {
  vi.unstubAllEnvs();
});

function fireKey(init: KeyboardEventInit): KeyboardEvent {
  const event = new KeyboardEvent("keydown", {
    ...init,
    cancelable: true,
    bubbles: true,
  });
  window.dispatchEvent(event);
  return event;
}

describe("DevtoolsGuard", () => {
  it("does nothing outside production", () => {
    vi.stubEnv("NODE_ENV", "development");
    render(<DevtoolsGuard />);
    expect(fireKey({ key: "F12" }).defaultPrevented).toBe(false);
  });

  it("blocks devtools shortcuts in production", () => {
    vi.stubEnv("NODE_ENV", "production");
    render(<DevtoolsGuard />);
    expect(fireKey({ key: "F12" }).defaultPrevented).toBe(true);
    expect(
      fireKey({ key: "i", ctrlKey: true, shiftKey: true }).defaultPrevented,
    ).toBe(true);
    expect(
      fireKey({ key: "j", metaKey: true, shiftKey: true }).defaultPrevented,
    ).toBe(true);
    expect(fireKey({ key: "u", ctrlKey: true }).defaultPrevented).toBe(true);
  });

  it("blocks the context menu in production", () => {
    vi.stubEnv("NODE_ENV", "production");
    render(<DevtoolsGuard />);
    const event = new MouseEvent("contextmenu", {
      cancelable: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it("ignores unrelated keys in production", () => {
    vi.stubEnv("NODE_ENV", "production");
    render(<DevtoolsGuard />);
    expect(fireKey({ key: "a", ctrlKey: true }).defaultPrevented).toBe(false);
  });
});
