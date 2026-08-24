import type React from "react";

export const moods = ["dawn", "day", "dusk", "deep"] as const;

export type Mood = (typeof moods)[number];
export type CssVariables = React.CSSProperties &
  Record<`--${string}`, string | number>;
