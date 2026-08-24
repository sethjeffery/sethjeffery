import type React from "react";
import { ActionLink } from "../components/Actions";
import { Eyebrow } from "../components/Eyebrow";
import { Page } from "../components/Page";
import styles from "./NotFound.module.css";

export function NotFound(): React.ReactElement {
  return (
    <Page className={styles.notFound}>
      <Eyebrow>404</Eyebrow>
      <h1>Off the path.</h1>
      <p>Even good journeys take a wrong turn.</p>
      <ActionLink className={styles.homeLink} to="/">
        Find home →
      </ActionLink>
    </Page>
  );
}
