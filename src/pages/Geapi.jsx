import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Geapi = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">GEAPI Malaysia Recording</h1>
      <p className="page-desc">GEAPI technology demonstration.</p>
      <VideoPlayer src={videos.geapi} />
    </div>
  );
};

export default Geapi;
