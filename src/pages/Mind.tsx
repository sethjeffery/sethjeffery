import type React from "react";
import { ActionLink, Actions } from "../components/Actions";
import { Eyebrow } from "../components/Eyebrow";
import { Minesweeper } from "../components/Minesweeper";
import { Page } from "../components/Page";
import { Panel } from "../components/Panel";
import { RouteHero, RouteTitle } from "../components/RouteHero";
import { SectionTitle } from "../components/SectionTitle";
import { TimeMachine } from "../components/TimeMachine";
import styles from "./Mind.module.css";

export function Mind(): React.ReactElement {
  return (
    <Page id="mind">
      <RouteHero
        className={styles.workHero}
        title="Mind"
        titleColor="var(--moss)"
      >
        <RouteTitle className={styles.workTitle}>
          <Eyebrow>How I work</Eyebrow>
          <h1>
            Stuff
            <br />
            <em>Engineer.</em>
          </h1>
          <p>
            I have been iterating with software since I was a little kid, moving
            from one language and style to the next through each season of life.
          </p>
          <Actions>
            <ActionLink href="https://github.com/sethjeffery">
              Explore GitHub
            </ActionLink>
            <ActionLink
              variant="text"
              href="https://www.linkedin.com/in/sethjeffery/"
            >
              LinkedIn
            </ActionLink>
          </Actions>
        </RouteTitle>
        <TimeMachine />
      </RouteHero>
      {/* 
      <Panel className={styles.principles}>
        <SectionTitle>
          <Eyebrow>How I think</Eyebrow>
          <h2>
            <em>Life/Work</em>
            <br />
            is not a balancing act.
          </h2>
        </SectionTitle>
        <div className={styles.principleGrid}>
          <Principle no="01" title="Start with people">
            Understand the real need before choosing the clever solution.
          </Principle>
          <Principle no="02" title="Make it felt">
            Motion, rhythm and detail should create meaning—not noise.
          </Principle>
          <Principle no="03" title="Build it well">
            Fast, accessible and maintainable is part of the experience.
          </Principle>
          <Principle no="04" title="Stay curious">
            The web is a material to play with, not just a page to fill.
          </Principle>
        </div>
      </Panel> */}

      <Panel className={styles.play}>
        <SectionTitle>
          <Eyebrow>How I learn</Eyebrow>
          <h2>
            Problems
            <br />
            <em>into play.</em>
          </h2>
        </SectionTitle>
        <p>
          I believe the best way to learn and understand any system is through
          curiosity and play. Good user experiences become great when they bring
          joy to the user.
        </p>
      </Panel>

      <Minesweeper />
    </Page>
  );
}
