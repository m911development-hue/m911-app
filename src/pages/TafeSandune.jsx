import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const TafeSandune = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Tafe Sandune</h1>
      <p className="page-desc">Interactive technology demonstration.</p>
      <VideoPlayer src={videos.tafesandune} />
    </div>
  );
};

export default TafeSandune;
