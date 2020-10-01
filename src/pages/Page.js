import styled from 'styled-components/macro';
import '../fonts.css';
import { mobileBreakpoint } from '../breakpoints';
import { withRouter } from 'react-router-dom';

export default withRouter(styled.article`
  background-size: min(60vw, 75vh);
  padding: 10vh 2rem 2rem;
  font-family: Neuton, serif;
  font-size: 1.25rem;
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.5;
  transition: opacity 0.5s;
  height: 100%;
  overflow-y: auto;

  h1 {
    font-size: 4rem;
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 200;
    margin: 0 0 1.5rem;
    line-height: 1;
  }

  h2 {
    font-size: 2rem;
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 400;
    margin: 1.75rem 0 0;
    line-height: 1;
  }

  p {
    margin: 1em 0;
  }

  @media (max-width: ${mobileBreakpoint}) {
    padding-left: 1rem;
    padding-top: 2rem;
  }
`);
