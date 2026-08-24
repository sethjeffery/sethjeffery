import { useEffect, useState } from "react";
import type { Mood } from "../types";
import styles from "./Header.module.css";
import { SkyPicker } from "./SkyPicker";

type HeaderProps = {
  mood: Mood;
  setMood: (mood: Mood) => void;
};

const sections = ["heart", "mind", "soul", "strength"] as const;

type Section = (typeof sections)[number];

function initialSection(): Section {
  const hash = window.location.hash.slice(1);
  if (sections.includes(hash as Section)) return hash as Section;

  const path = window.location.pathname.slice(1);
  return sections.includes(path as Section) ? (path as Section) : "heart";
}

export function Header({ mood, setMood }: HeaderProps): React.ReactElement {
  const [activeSection, setActiveSection] = useState<Section>(initialSection);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 40);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = (): void => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 280);
      let current: Section = "heart";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= marker) current = section;
      }

      setActiveSection(current);
      setIsScrolled(window.scrollY > 40);
    };

    const queueUpdate = (): void => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={styles.navigation} aria-label="Main navigation">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? styles.active : undefined}
            aria-current={activeSection === section ? "location" : undefined}
          >
            {section[0].toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
      <SkyPicker mood={mood} setMood={setMood} />
    </header>
  );
}
