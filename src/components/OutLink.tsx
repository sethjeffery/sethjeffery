import type { ReactNode } from "react";

type OutLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export function OutLink({
  href,
  children,
  className,
}: OutLinkProps): React.ReactElement {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
