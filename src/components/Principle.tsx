import type { ReactNode } from "react";
import styles from "./Principle.module.css";

type PrincipleProps = {
  children: ReactNode;
  no: string;
  title: string;
};

export function Principle({
  no,
  title,
  children,
}: PrincipleProps): React.ReactElement {
  return (
    <article className={styles.principle}>
      <span>{no}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
