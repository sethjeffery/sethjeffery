import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { TimeMachine } from "./TimeMachine";

let notifyIntersection: IntersectionObserverCallback;

class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly scrollMargin = "0px";
  readonly thresholds = [0.35];

  constructor(callback: IntersectionObserverCallback) {
    notifyIntersection = callback;
  }

  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn(() => []);
  unobserve = vi.fn();
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

function setVisible(isIntersecting: boolean): void {
  act(() => {
    notifyIntersection(
      [{ isIntersecting } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
  });
}

test("auto-advances eras while visible and loops back to 1983", () => {
  render(<TimeMachine />);
  const timeline = screen.getByRole("slider", { name: /UI design year/i });

  setVisible(true);
  act(() => vi.advanceTimersByTime(499));
  expect(timeline).toHaveValue("1983");

  act(() => vi.advanceTimersByTime(1));
  expect(timeline).toHaveValue("1985");

  act(() => vi.advanceTimersByTime(8000));
  expect(timeline).toHaveValue("2026");

  act(() => vi.advanceTimersByTime(1000));
  expect(timeline).toHaveValue("1983");
});

test("stops auto-advancing after a click inside the time machine", () => {
  render(<TimeMachine />);
  const timeline = screen.getByRole("slider", { name: /UI design year/i });
  const machine = timeline.closest("[data-era]");

  setVisible(true);
  act(() => vi.advanceTimersByTime(500));
  expect(timeline).toHaveValue("1985");

  fireEvent.click(machine as HTMLElement);
  act(() => vi.advanceTimersByTime(5000));
  expect(timeline).toHaveValue("1985");
});
