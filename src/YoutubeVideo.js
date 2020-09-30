import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Video from './Video';

function YoutubeVideo({ id, className }) {
  return (
    <Video className={className} src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      imgSrc={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
      href={`https://www.youtube.com/watch?v=${id}`}/>
  );
}

export default YoutubeVideo;
