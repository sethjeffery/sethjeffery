import type { ReactNode } from "react";
import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: ReactNode;
};

export function SectionTitle({
  children,
}: SectionTitleProps): React.ReactElement {
  return <div className={styles.title}>{children}</div>;
}
