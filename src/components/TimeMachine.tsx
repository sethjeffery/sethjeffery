import type React from "react";
import { useEffect, useState } from "react";
import type { CssVariables } from "../types";
import styles from "./TimeMachine.module.css";

const ERAS = [
  { year: 1983, key: "terminal" },
  { year: 1985, key: "mac" },
  { year: 1992, key: "win31" },
  { year: 1995, key: "win95" },
  { year: 1999, key: "web" },
  { year: 2003, key: "xp" },
  { year: 2008, key: "glossy" },
  { year: 2013, key: "flat" },
  { year: 2020, key: "minimal" },
  { year: 2026, key: "spatial" },
] as const;

type Era = (typeof ERAS)[number];

const FIRST_YEAR = ERAS[0].year;
const LAST_YEAR = ERAS[ERAS.length - 1].year;
const YEAR_SPAN = LAST_YEAR - FIRST_YEAR;

function positionForYear(year: number): string {
  return `${((year - FIRST_YEAR) / YEAR_SPAN) * 100}%`;
}

function eraAt(year: number): Era {
  return [...ERAS].reverse().find((era) => year >= era.year) ?? ERAS[0];
}

type ClockOrigin = {
  startedAt: number;
  hourAngle: number;
  minuteAngle: number;
  secondAngle: number;
};

function createClockOrigin(): ClockOrigin {
  const startedAt = Date.now();
  const date = new Date(startedAt);
  const milliseconds = date.getMilliseconds();
  const seconds = date.getSeconds() + milliseconds / 1000;
  const minutes = date.getMinutes() + seconds / 60;
  const hours = (date.getHours() % 12) + minutes / 60;

  return {
    startedAt,
    hourAngle: hours * 30,
    minuteAngle: minutes * 6,
    secondAngle: seconds * 6,
  };
}

export function TimeMachine(): React.ReactElement {
  const [year, setYear] = useState<number>(FIRST_YEAR);
  const [clockOrigin] = useState(createClockOrigin);
  const [now, setNow] = useState(clockOrigin.startedAt);
  const era = eraAt(year);
  const elapsedSeconds = (now - clockOrigin.startedAt) / 1000;
  const machineStyle: CssVariables = {
    "--year-progress": positionForYear(year),
    "--clock-hour-angle": `${clockOrigin.hourAngle + elapsedSeconds / 120}deg`,
    "--clock-minute-angle": `${clockOrigin.minuteAngle + elapsedSeconds / 10}deg`,
    "--clock-second-angle": `${clockOrigin.secondAngle + elapsedSeconds * 6}deg`,
  };

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.timeMachine} data-era={era.key} style={machineStyle}>
      <div className={styles.machineHeading}>
        <output htmlFor="design-year">{year}</output>
      </div>

      <div className={styles.eraStage} aria-live="polite">
        <div className={styles.scanlines} />
        <div className={styles.browserBar}>
          <span className={styles.menuWords}>
            File&nbsp;&nbsp; Edit&nbsp;&nbsp; View
          </span>
          <span className={styles.address}>https://a-simple-thing.local</span>
          <span className={styles.windowTitle}>A Simple Thing</span>
        </div>

        <div className={styles.stageContent}>
          <div className={styles.terminalCopy}>
            <p>**** A SIMPLE THING V1 ****</p>
            <p>64K RAM&nbsp;&nbsp; 38911 BYTES FREE</p>
            <p className={styles.ready}>
              READY. <i />
            </p>
          </div>

          <div className={styles.appSurface}>
            <div className={styles.appNav}>
              <span className={styles.brandMark}>T</span>
              <b>A Simple Thing</b>
              <span className={styles.livePill}>
                <i /> Live
              </span>
            </div>

            <div className={styles.appBody}>
              <div className={styles.clock} aria-hidden="true">
                <i className={styles.clockFace} />
                <i className={styles.hourHand} />
                <i className={styles.minuteHand} />
                <i className={styles.secondHand}>
                  <span />
                </i>
                <span />
              </div>
              <div className={styles.eraCopy}>
                <h3>Elegance is constant.</h3>
                <p>It is the way we express it that shifts with the seasons.</p>
                <button type="button">
                  Go <span>→</span>
                </button>
              </div>
            </div>

            <div className={styles.futureCards} aria-hidden="true">
              <div>
                <span>01</span>
                <b>Perfection</b>
              </div>
              <div>
                <span>02</span>
                <b>Takes</b>
              </div>
              <div>
                <span>03</span>
                <b>Time</b>
              </div>
            </div>
            <div className={styles.statusBar}>
              <span>● Ready</span>
              <span>{year}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.timelineControl}>
        <div className={styles.rangeLabels} aria-hidden="true">
          <b>{FIRST_YEAR}</b>
          <span>Experience through time</span>
          <b>{LAST_YEAR}</b>
        </div>
        <input
          id="design-year"
          aria-label="UI design year"
          type="range"
          min={FIRST_YEAR}
          max={LAST_YEAR}
          value={year}
          onChange={(event) => setYear(Number(event.target.value))}
        />
        <div className={styles.eraTicks} aria-hidden="true">
          {ERAS.map((item) => (
            <i
              className={year >= item.year ? styles.tickPassed : undefined}
              key={item.year}
              style={{ left: positionForYear(item.year) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
