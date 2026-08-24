import { Icon, type IconifyIcon } from "@iconify/react";
import styles from "./Movement.module.css";

type MovementProps = {
  no: string;
  icon?: IconifyIcon | string;
  title: string;
  to: string;
};

export function Movement({
  to,
  icon,
  no,
  title,
}: MovementProps): React.ReactElement {
  return (
    <a className={styles.movement} href={to}>
      <small>{no}</small>
      {icon ? <Icon icon={icon} className={styles.icon} /> : <span />}
      <h3>{title}</h3>
    </a>
  );
}
