import React from 'react';
import styled from 'styled-components/macro';
import { faSpotify, faSoundcloud, faYoutube, faFacebook } from '@fortawesome/fontawesome-free-brands'
import YoutubeVideo from '../YoutubeVideo';
import FacebookVideo from '../FacebookVideo';
import Video from '../Video';
import IconLink from '../IconLink';
import microphone from '../images/microphone.jpg';
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
      <YoutubeVideo id="eEFcxQtSUyw"/>
      <YoutubeVideo id="yv9Y9itSA_A"/>

      <h2>Live Evenings</h2>
      <p>
        As a couple, we often do live worship sessions from our living room.<br/>
        Join us in person, or on <IconLink icon={faFacebook} href="https://www.facebook.com/sethjefferymusic">Facebook Live</IconLink>.
      </p>
      <FacebookVideo id='10164204504285578'/>
    </Page>
  )
}

export default styled(Music)`
  p {
    margin-top: .5em;
  }

  h2 {
    margin-top: 3rem;
  }

  ${Video} {
    width: 100%;
    max-width: min(600px, 80vw);
    height: 200px;
  }

  @media (min-width: 600px) {
    ${Video} {
      height: 300px;
    }
  }

  @media (min-width: 900px) {
    background-image: url(${microphone});
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: min(25vw, 40vh);

    ${Video} {
      max-width: min(600px, 50vw);
    }
  }
`;
