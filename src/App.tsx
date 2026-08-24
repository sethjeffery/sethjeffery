import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heart } from "./pages/Heart";
import { Mind } from "./pages/Mind";
import { Soul } from "./pages/Soul";
import { Strength } from "./pages/Strength";
import type { Mood } from "./types";

function moodForHour(hour: number): Mood {
  if (hour >= 5 && hour < 9) return "dawn";
  if (hour >= 9 && hour < 17) return "day";
  if (hour >= 17 && hour < 21) return "dusk";
  return "deep";
}

const legacySections: Record<string, string> = {
  "/soul": "soul",
  "/mind": "mind",
  "/strength": "strength",
};

export default function App(): React.ReactElement {
  const [mood, setMood] = useState<Mood>(() =>
    moodForHour(new Date().getHours()),
  );

  useEffect(() => {
    document.documentElement.dataset.mood = mood;
  }, [mood]);

  useEffect(() => {
    document.title = "Seth Jeffery — Developer, musician, worshipper";

    const legacySection = legacySections[window.location.pathname];
    if (!legacySection) return;

    window.history.replaceState(
      null,
      "",
      `/${window.location.search}#${legacySection}`,
    );
    window.requestAnimationFrame(() => {
      document.getElementById(legacySection)?.scrollIntoView();
    });
  }, []);

  return (
    <div className={styles.site}>
      <Header mood={mood} setMood={setMood} />
      <main>
        <Heart />
        <Mind />
        <Soul />
        <Strength />
      </main>
      <Footer />
    </div>
  );
}
