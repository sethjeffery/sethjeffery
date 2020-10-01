import React from 'react';
import styled from 'styled-components/macro';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import IconLink from '../IconLink';
import Page from './Page';

function Work(props) {
  return (
    <Page {...props}>
      <h1>I made this.</h1>
      <p>
        You can see some of my work on <IconLink icon={faGithub} href="https://www.github.com/sethjeffery">Github</IconLink
        > or <IconLink icon={faLinkedin} href="https://www.linkedin.com/in/sethjeffery/">LinkedIn</IconLink>, including
        the source of <a href="https://github.com/sethjeffery/sethjeffery" target="_blank" rel="noopener noreferrer">this website</a>.
      </p>

      <h3>
        Techs I regularly code and enjoy
      </h3>
      <ul>
        <li>Ruby-on-Rails</li>
        <li>React</li>
        <li>SCSS</li>
        <li>NodeJS</li>
        <li>ES2018</li>
        <li>AWS</li>
        <li>DynamoDB</li>
        <li>Postgres</li>
        <li>Webpack</li>
        <li>Serverless</li>
        <li>Jest</li>
        <li>Rspec</li>
      </ul>

      <h3>
        Techs I <em>used to</em> code and enjoy
      </h3>
      <ul>
        <li>PHP</li>
        <li>Objective-C</li>
        <li>ASP.Net</li>
        <li>C#</li>
        <li>SQL Server</li>
        <li>MySQL</li>
        <li>Gulp</li>
      </ul>

      <h3>
        Areas I typically work in
      </h3>
      <ul>
        <li>eLearning</li>
        <li>Media</li>
        <li>SEO</li>
        <li>UI/UX</li>
        <li>Full stack</li>
      </ul>
    </Page>
  )
}

export default styled(Work)`
  h3 {
    margin-bottom: 0;
    margin-top: 2rem;
  }

  h2 {
    font-weight: 200;
    margin-top: 3rem;
    margin-bottom: .25em;
  }

  p {
    margin-top: 0;
    max-width: min(75vw, 38rem);
  }

  ul {
    list-style: none;
    display: block;
    margin: 0;
    padding: 0;
    max-width: min(75vw, 38rem);
  }

  li {
    display: inline-block;
    white-space: nowrap;
  }

  li:not(:last-child)::after {
    content: '·';
    margin-left: .75rem;
    margin-right: .75rem;
  }
`;
