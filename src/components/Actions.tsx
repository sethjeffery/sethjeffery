import type { ReactNode } from "react";
import styles from "./Actions.module.css";

type ActionsProps = {
  children: ReactNode;
};

export function Actions({ children }: ActionsProps): React.ReactElement {
  return <div className={styles.actions}>{children}</div>;
}

type ActionLinkProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "text";
} & ({ href: string; to?: never } | { href?: never; to: string });

export function ActionLink({
  children,
  className,
  variant = "primary",
  ...destination
}: ActionLinkProps): React.ReactElement {
  const variantClass = variant === "primary" ? styles.primary : styles.text;
  const linkClass = className ? `${variantClass} ${className}` : variantClass;

  if (destination.href) {
    return (
      <a
        className={linkClass}
        href={destination.href}
        target="_blank"
        rel="noreferrer"
      >
        {children} <span aria-hidden="true">↗</span>
      </a>
    );
  }

  if (!destination.to) {
    throw new Error("ActionLink requires either a destination or an href");
  }

  return (
    <a className={linkClass} href={destination.to}>
      {children}
    </a>
  );
}
