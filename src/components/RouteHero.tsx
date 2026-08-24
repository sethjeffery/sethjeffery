import type { ReactNode } from "react";
import type { CssVariables } from "../types";
import styles from "./RouteHero.module.css";

type RouteHeroProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  titleColor?: string;
};

export function RouteHero({
  children,
  className,
  title,
  titleColor,
}: RouteHeroProps): React.ReactElement {
  const style: CssVariables = titleColor
    ? {
        "--over-page": titleColor,
      }
    : {};

  return (
    <section
      className={className ? `${styles.hero} ${className}` : styles.hero}
      style={style}
    >
      {title && <div className={styles.overPage}>{title}</div>}
      {children}
    </section>
  );
}

type RouteTitleProps = RouteHeroProps;

export function RouteTitle({
  children,
  className,
}: RouteTitleProps): React.ReactElement {
  return (
    <div className={className ? `${styles.title} ${className}` : styles.title}>
      {children}
    </div>
  );
}
