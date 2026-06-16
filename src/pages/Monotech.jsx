import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Monotech = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Monotech App</h1>
      <p className="page-desc">Discover the features of the Monotech Application.</p>
      <VideoPlayer src={videos.monotech} />
    </div>
  );
};

export default Monotech;
