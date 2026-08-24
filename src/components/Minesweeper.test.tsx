import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import { Minesweeper } from "./Minesweeper";

let resize: ((entries: ResizeObserverEntry[]) => void) | undefined;

class ResizeObserverMock {
  constructor(callback: ResizeObserverCallback) {
    resize = callback as (entries: ResizeObserverEntry[]) => void;
  }

  observe(): void {}
  disconnect(): void {}
  unobserve(): void {}
}

afterEach(() => {
  resize = undefined;
  vi.unstubAllGlobals();
});

test("rebuilds and resets the game when the observed width changes the grid", () => {
  vi.stubGlobal("ResizeObserver", ResizeObserverMock);
  render(<Minesweeper />);

  fireEvent.click(screen.getAllByRole("button", { name: /Covered cell/ })[0]);
  expect(screen.getByText("Clearing the field")).toBeInTheDocument();

  act(() => {
    resize?.([
      { contentRect: { width: 920 } } as unknown as ResizeObserverEntry,
    ]);
  });

  expect(
    screen.getByRole("group", { name: "20 by 8 Minesweeper board" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Choose a square")).toBeInTheDocument();
});

test("turns every mine into a smiley face when the field is cleared", () => {
  vi.spyOn(Math, "random").mockReturnValue(0);
  render(<Minesweeper />);

  const cells = screen.getAllByRole("button", { name: /Covered cell/ });
  fireEvent.click(cells[0]);

  const mines = new Set([3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19]);
  cells.forEach((cell, index) => {
    if (!mines.has(index)) fireEvent.click(cell);
  });

  expect(screen.getByText("Field cleared — lovely")).toBeInTheDocument();
  expect(screen.getAllByRole("button", { name: /Smiley face/ })).toHaveLength(
    15,
  );
});
