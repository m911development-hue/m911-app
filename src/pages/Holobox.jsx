import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Holobox = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">HoloBox AI</h1>
      <p className="page-desc">Interactive AI holographic experience.</p>
      <VideoPlayer src={videos.holobox} />
    </div>
  );
};

export default Holobox;
