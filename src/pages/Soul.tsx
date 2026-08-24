import type React from "react";
import { Eyebrow } from "../components/Eyebrow";
import { OutLink } from "../components/OutLink";
import { Page } from "../components/Page";
import { Panel } from "../components/Panel";
import { RouteHero, RouteTitle } from "../components/RouteHero";
import { SectionTitle } from "../components/SectionTitle";
import { Video } from "../components/Video";
import { spotifyUrl, youtubeUrl } from "../constants";
import styles from "./Soul.module.css";

export function Soul(): React.ReactElement {
  return (
    <Page id="soul" className={styles.music}>
      <RouteHero
        className={styles.musicHero}
        title="Soul"
        titleColor="var(--cream)"
      >
        <div className={styles.retroGrid} />
        <div className={styles.sun} />
        <RouteTitle className={styles.musicTitle}>
          <Eyebrow>Your words the brush</Eyebrow>
          <h1>
            My soul
            <br />
            <em>magnifies</em>
            <br />
            the Lord.
          </h1>
          <p>
            I write music to connect with Jesus and with others—songs shaped in
            prayer spaces, quiet spaces and living spaces.
          </p>
        </RouteTitle>
      </RouteHero>

      <Panel className={styles.listen}>
        <SectionTitle>
          <Eyebrow>My soul the canvas</Eyebrow>
          <h2>Every song is a journal entry.</h2>
          <p>
            Stay awhile and listen, or open the full story on your favourite
            platform.
          </p>
          <div className={styles.platforms}>
            <OutLink href={spotifyUrl}>Spotify</OutLink>
            <OutLink href={youtubeUrl}>YouTube</OutLink>
          </div>
        </SectionTitle>
        <div className={styles.spotify}>
          <iframe
            title="Seth Jeffery on Spotify"
            src="https://open.spotify.com/embed/artist/2EW1MEqM5vrQCcbQPyfeNT?utm_source=generator&theme=0"
            width="100%"
            height="472"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </Panel>

      <Panel className={styles.videos}>
        <Eyebrow>This life the gallery</Eyebrow>
        <div className={styles.videoGrid}>
          <Video id="eEFcxQtSUyw" title="Song of Repentance" no="01" />
          <Video id="yv9Y9itSA_A" title="When I Survey" no="02" />
        </div>
      </Panel>

      <Panel className={styles.studio}>
        <img
          src="/photos/seth-and-ana-2020.jpg"
          alt="Instruments, microphones and lights ready for a live session"
        />
        <div>
          <Eyebrow>The Heavens the audience</Eyebrow>
          <h2>Living rooms for living stones.</h2>
          <p>
            The best moments have never been the ones polished into perfection.
            They happen when we simply make room, listen, and respond.
          </p>
        </div>
      </Panel>
    </Page>
  );
}
