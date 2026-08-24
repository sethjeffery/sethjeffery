import type { ReactNode } from "react";
import styles from "./Page.module.css";

type PageProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Page({
  children,
  className,
  id,
}: PageProps): React.ReactElement {
  return (
    <section
      id={id}
      className={className ? `${styles.page} ${className}` : styles.page}
    >
      {children}
    </section>
  );
}
