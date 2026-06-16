import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Metaverse911Demo = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Metaverse 911 Demo</h1>
      <p className="page-desc">Video will be connected later.</p>
      <VideoPlayer src={videos.metaverse911demo} />
    </div>
  );
};

export default Metaverse911Demo;
