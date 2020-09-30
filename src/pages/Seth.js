import React from 'react';
import styled from 'styled-components/macro';
import sethGuitar from '../images/seth-guitar-bw.jpg';
import { faCity, faFemale, faCalendarAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faGithub, faFacebook } from '@fortawesome/fontawesome-free-brands'
import IconLink from '../IconLink';
import rot13 from '../rot13';
import Page from './Page';

function handleEmailLink() {
  window.location.href = `mailto:${rot13('frgu@frguwrssrel.pbz')}`;
}

function Seth(props) {
  return (
    <Page {...props}>
      <h1>Hello, I'm Seth.</h1>
      <p>
        I'm currently living in <IconLink icon={faCity} href="https://www.google.com/maps/place/Caen">Caen, France</IconLink>.
      </p>
      <p>
        I write a lot of <IconLink icon={faSpotify} to="/music">music</IconLink>,
        and I develop <IconLink icon={faGithub} to="/work">web software</IconLink> for companies.
      </p>
      <p>
        My wife <IconLink icon={faFemale} to="/ana">Ana</IconLink> and I are Christian missionaries to Europe,
        serving at <IconLink icon={faCalendarAlt} to="/events">events</IconLink> with worship, teaching and prophetic training.
      </p>
      <p>
        Contact me at <IconLink icon={faEnvelope} onClick={handleEmailLink}>
          <span style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}>
            moc&#46;yreffejhtes<span style={{ display: 'none' }}>hidden</span>&#64;htes
          </span>
        </IconLink> <br/>or on <IconLink icon={faFacebook} href="https://www.facebook.com/sethjeffery">Facebook</IconLink>.
      </p>
    </Page>
  )
}

export default styled(Seth)`
  background-image: url(${sethGuitar});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: min(60vw, 75vh);
  padding-bottom: 200px;
  background-attachment: fixed;

  @media (min-width: 960px) {
    padding-bottom: 100px;
   }

  p {
    @media (min-width: 960px) {
      max-width: 36vw;
    }
  }
`;
