import React, { useState } from 'react';
import styled from 'styled-components/macro';

function isMobileUserAgent() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function Video({ className, src, imgSrc, href, started, handleClick, children, title }) {
  if(started || !imgSrc) {
    return (
      <div className={className}>
        {children || <iframe src={`${src}`}
                             title={title || 'Video'}
                             scrolling="no"
                             frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                             allowFullScreen/>}
      </div>
    );
  } else {
    return (
      <a href={href} onClick={handleClick} className={className}>
        <img src={imgSrc} alt={title}/>
      </a>
    );
  }
}

const StyledVideo = styled(Video)`
  display: block;
  position: relative;
  width: 600px;
  height: 340px;
  margin-bottom: 2rem;

  a& {
    border-radius: .5rem;
    overflow: hidden;
    position: relative;

    &::after {
      box-shadow: inset 0 0 0 1px white;
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: .5rem;
    }
  }

  img, iframe {
    width: 100%;
    height: 100%;
    transition: filter 0.3s;
  }

  img {
    /* green? --> filter: sepia(1) saturate(2.5) brightness(1.2) hue-rotate(47deg); */
    filter: saturate(0) brightness(1.15) contrast(1.25);
    object-fit: cover;
  }

  iframe {
    filter: ${props => props.autostart || props.started ? 'none': 'saturate(0) brightness(1.15) contrast(1.25)' };
    transition: filter 0.3s;
  }

  :hover {
    img, iframe {
      filter: none;
    }
  }
`;

function VideoContainer(props) {
  const handleClick = (e) => {
    // mobile devices cannot autoplay videos, so it's best to let them view the video
    // full screen in the appropriate app or site (Youtube, Facebook, etc)
    if(!isMobileUserAgent() || !props.href) {
      e.preventDefault();
      setStarted(true);
    }
  };

  const [started, setStarted] = useState(props.autostart);

  return <StyledVideo {...props} handleClick={handleClick} started={started}/>;
}

export default styled(VideoContainer)``;
