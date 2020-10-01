import React from 'react';
import Video from './Video';

function YoutubeVideo({ id, title, className }) {
  return (
    <Video className={className} src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      title={title}
      imgSrc={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
      href={`https://www.youtube.com/watch?v=${id}`}/>
  );
}

export default YoutubeVideo;
