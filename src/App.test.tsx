import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders the new introduction by default", () => {
  render(<App />);
  expect(screen.getByText(/Manchester · UK/i)).toBeInTheDocument();
});

test("renders every section on one page with anchor navigation", () => {
  render(<App />);
  expect(screen.getByText("The story so far")).toBeInTheDocument();
  expect(screen.getByText("How I think")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Soul" })).toHaveAttribute(
    "href",
    "#soul",
  );
  expect(
    screen.queryByRole("link", { name: /Seth Jeffery, home/i }),
  ).toBeNull();
});

test("travels through UI design eras", () => {
  render(<App />);
  const timeline = screen.getByRole("slider", { name: /UI design year/i });
  const machine = timeline.closest("[data-era]");

  expect(timeline).toHaveValue("1983");
  expect(machine).toHaveAttribute("data-era", "terminal");
  expect(
    (machine as HTMLElement).style.getPropertyValue("--clock-second-angle"),
  ).toMatch(/deg$/);

  fireEvent.change(timeline, { target: { value: "2026" } });

  expect(timeline).toHaveValue("2026");
  expect(machine).toHaveAttribute("data-era", "spatial");
});
