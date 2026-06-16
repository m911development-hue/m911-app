import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Tafear = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Tafe AR</h1>
      <p className="page-desc">Augmented reality demonstration.</p>
      <VideoPlayer src={videos.tafear} />
    </div>
  );
};

export default Tafear;
