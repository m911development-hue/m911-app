import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Training = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">VR Training Demo</h1>
      <p className="page-desc">Virtual Reality training simulation.</p>
      <VideoPlayer src={videos.training} />
    </div>
  );
};

export default Training;
