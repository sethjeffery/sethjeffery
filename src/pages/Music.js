import React from 'react';
import styled from 'styled-components/macro';
import { faSpotify, faSoundcloud, faYoutube, faFacebook } from '@fortawesome/fontawesome-free-brands'
import IconLink from '../IconLink';
import rot13 from '../rot13';
import Page from './Page';

function Music(props) {
  return (
    <Page {...props}>
      <h1>Listen up.</h1>
      <p>
        I write music to connect with Jesus and with others.<br/>
        Listen on
        <IconLink icon={faSpotify} href="https://open.spotify.com/artist/2EW1MEqM5vrQCcbQPyfeNT?si=DobLK6oSSpm6OBv97mcYtA">Spotify</IconLink>,
        <IconLink icon={faSoundcloud} href="https://soundcloud.com/seth-jeffery">Soundcloud</IconLink>, or
        <IconLink icon={faYoutube} href="https://www.youtube.com/user/cybersethxp/videos">Youtube</IconLink>.
      </p>
      <iframe src="https://www.youtube.com/embed/eEFcxQtSUyw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen/>
      <h2>Live Evenings</h2>
      <p>
        As a couple, we often do live worship sessions from our living room.<br/>
        Join us in person, or on <IconLink icon={faFacebook} href="https://www.facebook.com/sethjefferymusic">Facebook Live</IconLink>.
      </p>
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsethjeffery%2Fvideos%2F10164204504285578%2F&show_text=0&width=560" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"/>
    </Page>
  )
}

export default styled(Music)`
  p {
    margin-top: .5em;
  }

  iframe {
    width: 100%;
    max-width: min(600px, 80vw);
    height: 200px;
  }

  @media (min-width: 600px) {
    iframe {
      height: 300px;
    }
  }
`;
