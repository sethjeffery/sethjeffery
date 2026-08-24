import type React from "react";
import { ActionLink, Actions } from "../components/Actions";
import { Eyebrow } from "../components/Eyebrow";
import { Movement } from "../components/Movement";
import { Page } from "../components/Page";
import { Panel } from "../components/Panel";
import { RouteHero, RouteTitle } from "../components/RouteHero";
import { SectionTitle } from "../components/SectionTitle";
import styles from "./Heart.module.css";

export function Heart(): React.ReactElement {
  return (
    <Page id="heart">
      <RouteHero
        className={styles.hero}
        title="Heart"
        titleColor="var(--paper)"
      >
        <div className={styles.dawn} />
        <div className={styles.day} />
        <div className={styles.dusk} />
        <div className={styles.deep} />
        <RouteTitle>
          <Eyebrow className={styles.eyebrow}>Seth Jeffery</Eyebrow>
          <h1>
            I live to
            <br />
            <em>make things</em>
            <br />
            come alive.
          </h1>
          <p>
            I’m Seth — a software engineer, worshipper, husband to Ana, and dad
            of four. I care about the things we build and the spirit in which we
            build them.
          </p>
          <Actions>
            <ActionLink to="mailto:seth@sethjeffery.com" variant="text">
              Write to me. Email is still a thing.
            </ActionLink>
          </Actions>
        </RouteTitle>
        <div className={styles.portrait}>
          <div className={styles.portraitFrame}>
            <img
              src="/photos/family-2026.jpg"
              alt="Seth, Ana and their four children in the woods"
              fetchPriority="high"
              width="1467"
              height="2200"
            />
          </div>
          <i className={`${styles.orbit} ${styles.orbitOne}`} />
          <i className={`${styles.orbit} ${styles.orbitTwo}`} />
          <p className={styles.photoNote}>
            The Jefferys
            <br />
            Manchester, 2026
          </p>
        </div>
      </RouteHero>

      <Panel className={styles.movements}>
        <SectionTitle>
          <h2>
            Everything in life <em>flows out</em>
            <br />
            from the heart.
          </h2>
          <p>Here are a few things that flow from mine.</p>
        </SectionTitle>
        <div>
          <div className={styles.movementList}>
            <Movement to="#mind" no="01" title="building software." icon="" />
            <Movement to="#soul" no="02" title="producing music." icon="" />
            <Movement to="#strength" no="03" title="raising family." />
          </div>
        </div>
      </Panel>

      <section className={styles.homeQuote}>
        <img
          src="/photos/familiy-2026-2.jpg"
          alt="The Jeffery family sharing music together in a forest"
          loading="lazy"
        />
        <blockquote>
          <span>“</span>As for me and my house,
          <br />
          we will serve the Lord.
          <cite>Joshua 24:15</cite>
        </blockquote>
      </section>
    </Page>
  );
}
