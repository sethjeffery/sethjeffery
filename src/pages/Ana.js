import React from 'react';
import styled from 'styled-components/macro';
import { faMale, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube } from '@fortawesome/fontawesome-free-brands'
import IconLink from '../IconLink';
import rot13 from '../rot13';
import Page from './Page';
import anaWorship from '../images/ana-worship.jpg';

function handleEmailLink() {
  window.location.href = `mailto:${rot13('anajeffery@hotmail.co.uk')}`;
}

function Ana(props) {
  return (
    <Page {...props}>
      <h1>¡Hola! Soy Ana.</h1>
      <p>
        I came from Colombia to England in 2011 to marry <IconLink icon={faMale} to="/seth">Seth</IconLink>.
        We now have 2 daughters—Faith and Harmony—and a son, Isaac!
      </p>
      <p>
        I move in <IconLink icon={faYoutube} href="https://www.youtube.com/channel/UCbGFJzSVUpAtPP1zt1NH-GQ">prophecy</IconLink> and
        intercession. It is from many dreams and words from the Holy Spirit
        that we moved first to Portugal and then to France as missionaries.
      </p>
      <p>
        I love the Lord more than anything else, and second to Him, my family in Christ.
      </p>
      <p>
        Contact me at <IconLink icon={faEnvelope} onClick={handleEmailLink}>
          <span style={{ unicodeBidi: 'bidi-override', direction: 'rtl' }}>
            ku&#46;oc&#46;liamtoh<span style={{ display: 'none' }}>hidden</span>&#64;yreffejana
          </span>
        </IconLink> <br/>or on <IconLink icon={faFacebook} href="https://www.facebook.com/ana.jeffery">Facebook</IconLink>.
      </p>
    </Page>
  )
}

export default styled(Ana)`
  background-image: url(${anaWorship});
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
