import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({
  children,
  className = "",
}: EyebrowProps): React.ReactElement {
  return (
    <p className={`${styles.eyebrow} ${className}`}>
      <i />
      {children}
    </p>
  );
}
