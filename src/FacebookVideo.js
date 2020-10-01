import React, { useState } from 'react';
import Video from './Video';
import FacebookPlayer from 'react-facebook-player';

function FacebookVideo({ id, title, className }) {
  const [started, setStarted] = useState(false);

  return (
    <Video title={title} className={className} autostart={started}>
      <FacebookPlayer
        appId='131059153661565'
        videoId={String(id)}
        onStartedPlaying={() => setStarted(true)}
        width={600}/>
    </Video>
  );
}
/*src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F${page}%2Fvideos%2F${id}%2F&show_text=0&width=560`}/>*/

export default FacebookVideo;
