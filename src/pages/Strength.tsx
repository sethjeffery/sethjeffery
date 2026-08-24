import type React from "react";
import { Eyebrow } from "../components/Eyebrow";
import { Page } from "../components/Page";
import { Panel } from "../components/Panel";
import { RouteHero, RouteTitle } from "../components/RouteHero";
import styles from "./Strength.module.css";

export function Strength(): React.ReactElement {
  return (
    <Page id="strength">
      <RouteHero
        className={styles.storyHero}
        title="Strength"
        titleColor="var(--cream)"
      >
        <img
          src="/photos/seth-and-ana-2026.jpg"
          alt="Seth and Ana together in the woods"
          loading="lazy"
        />
        <div className={styles.wash} />
        <RouteTitle className={styles.storyTitle}>
          <Eyebrow>The story so far</Eyebrow>
          <h1>
            <em>The Lord</em>
            <br />
            is my strength.
          </h1>
          <p>
            Following God has taken us great distances, and closes the distances
            between us.
          </p>
        </RouteTitle>
      </RouteHero>

      <Panel className={styles.storyIntro}>
        <p className={styles.storyLead}>
          I live in Manchester with Ana and our four children. Family is the
          first ministry—the place from which everything else grows.
        </p>
        <div>
          <p>
            Our life has been shaped by worship and intercession. Over the years
            we have travelled through Portugal, Spain, France and the UK,
            investing in houses of prayer and 24-hour worship gatherings.
          </p>
          <p>
            We love seeing traditions and denominations meet around the presence
            of God, finding unity in prayer, friendship and worship.
          </p>
        </div>
      </Panel>

      <Panel className={styles.journal}>
        <div>
          <img
            src="/photos/family-2026-3.jpg"
            alt="The Jeffery family walking together in the woods"
            loading="lazy"
          />
          <small>Marple · Stockport</small>
        </div>
        <aside>
          <img
            src="/photos/portugal-friends-2019.jpg"
            alt="Friends gathered at a worship event in Portugal"
            loading="lazy"
          />
          <p>
            <b>Across Europe</b>
            <br />
            Communion, prayer rooms, journeys, spontaneous songs.
          </p>
        </aside>
      </Panel>

      <Panel className={styles.faith}>
        <Eyebrow>To be continued</Eyebrow>
        <h2>A new adventure waits behind the turn of every next year.</h2>
        <p>
          We have moved countries, grown a family, led 24-hour non-stop worship
          events, seen dreams come to life. God will reveal the mystery of what
          happens next.
        </p>
      </Panel>
    </Page>
  );
}
