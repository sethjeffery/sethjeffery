import type { CssVariables } from "../types";
import styles from "./Equalizer.module.css";

const equalizerBars = Array.from({ length: 28 }, (_, index) => ({
  height: `${12 + (index % 7) * 10}%`,
  id: `equalizer-bar-${index + 1}`,
  speed: `${0.5 + (index % 6) * 0.11}s`,
}));

type EqualizerProps = {
  playing: boolean;
};

export function Equalizer({ playing }: EqualizerProps): React.ReactElement {
  return (
    <div
      className={
        playing ? `${styles.equalizer} ${styles.playing}` : styles.equalizer
      }
      aria-hidden="true"
    >
      {equalizerBars.map((bar) => {
        const style: CssVariables = {
          "--bar-height": bar.height,
          "--bar-speed": bar.speed,
        };
        return <i key={bar.id} style={style} />;
      })}
    </div>
  );
}
