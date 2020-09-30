import React from 'react';
import styled from 'styled-components/macro';
import { faCity, faFemale, faCalendarAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/fontawesome-free-brands'
import IconLink from '../IconLink';
import rot13 from '../rot13';
import Page from './Page';

function handleEmailLink() {
  window.location.href = `mailto:${rot13('anajeffery@hotmail.co.uk')}`;
}

function Ana(props) {
  return (
    <Page {...props}>
      <h1>¡Hola! Soy Ana.</h1>
      <p>
        Information here.
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
`;
