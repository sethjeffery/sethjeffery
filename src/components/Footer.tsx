import type React from "react";
import { spotifyUrl } from "../constants";
import styles from "./Footer.module.css";
import { OutLink } from "./OutLink";

export function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>From Manchester, with love.</strong>
        <p>I'm made to reflect a life of faith, family and creativity.</p>
      </div>
      <div className={styles.links}>
        <OutLink href="https://github.com/sethjeffery">GitHub</OutLink>
        <OutLink href="https://www.linkedin.com/in/sethjeffery/">
          LinkedIn
        </OutLink>
        <OutLink href={spotifyUrl}>Spotify</OutLink>
      </div>
      <small>© {new Date().getFullYear()} Seth Jeffery</small>
    </footer>
  );
}
