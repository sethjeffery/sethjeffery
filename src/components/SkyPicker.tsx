import type React from "react";
import { useState } from "react";
import { type CssVariables, type Mood, moods } from "../types";
import styles from "./SkyPicker.module.css";

type SkyPickerProps = {
  mood: Mood;
  setMood: (mood: Mood) => void;
};

export function SkyPicker({
  mood,
  setMood,
}: SkyPickerProps): React.ReactElement {
  const moodIndex = moods.indexOf(mood);
  const [turn, setTurn] = useState(moodIndex);
  const nextMood = moods[(moodIndex + 1) % moods.length];

  const advanceTime = (): void => {
    setTurn((currentTurn) => currentTurn + 1);
    setMood(nextMood);
  };

  const style: CssVariables = { "--sky-turn": `${turn * 90}deg` };

  return (
    <button
      className={styles.picker}
      data-mood={mood}
      style={style}
      onClick={advanceTime}
      aria-label={`${mood} theme selected. Switch to ${nextMood}`}
      title={`Time of day: ${mood}. Click for ${nextMood}.`}
      type="button"
    >
      <span className={styles.arch} aria-hidden="true">
        <span className={styles.orbit}>
          <i className={`${styles.celestial} ${styles.sun}`} />
          <i className={`${styles.celestial} ${styles.moon}`} />
        </span>
        <i className={styles.horizon} />
      </span>
      <span className={styles.label}>{mood}</span>
    </button>
  );
}
