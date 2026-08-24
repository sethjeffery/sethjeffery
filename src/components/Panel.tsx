import type { ReactNode } from "react";
import type { CssVariables } from "../types";
import styles from "./Panel.module.css";

export function Panel({
  className,
  children,
  title,
  titleColor,
}: {
  children?: ReactNode;
  className?: string;
  title?: string;
  titleColor?: string;
}) {
  const style: CssVariables = titleColor
    ? {
        "--over-page": titleColor,
      }
    : {};

  return (
    <section className={`${className ?? ""} ${styles.panel}`} style={style}>
      {title && <div className={styles.overPage}>{title}</div>}
      {children}
    </section>
  );
}
