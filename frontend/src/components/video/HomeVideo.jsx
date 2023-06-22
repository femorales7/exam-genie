import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


<link rel="stylesheet" href="/css/video-react.css" />

const HomeVideo = () => {
  return (
<iframe src="https://player.vimeo.com/video/837867362?badge=0"
width="100%"
height="500"
frameborder="0" 
title="home-video">
</iframe>
  );
};

export default HomeVideo;