import React from 'react';
import styled from 'styled-components/macro';
import { faMale, faFemale, faCalendarAlt, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faGithub } from '@fortawesome/fontawesome-free-brands'
import SideLink from './SideLink';
import { mobileBreakpoint } from './breakpoints';

function Side({ className }) {
  return (
    <div className={className}>
      <nav>
        <SideLink to="/" icon={faMale}>Seth</SideLink>
        <SideLink to="/ana" icon={faFemale}>Ana</SideLink>
        <SideLink to="/music" icon={faSpotify}>Music</SideLink>
        <SideLink to="/work" icon={faGithub}>Work</SideLink>
        <SideLink to="/events" icon={faCalendarAlt}>Events</SideLink>
      </nav>
    </div>
  )
}

export default styled(Side)`
  flex: 1 1 33%;
  background-color: var(--primary);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: calc(10vh + 1.25rem);
  transition: background-color 0.5s;

  nav {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${mobileBreakpoint}) {
    padding-top: 2rem;
  }
`;
