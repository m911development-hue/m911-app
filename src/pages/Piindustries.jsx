import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Piindustries = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Piindustries Anamorphic Wall</h1>
      <p className="page-desc">Industrial anamorphic wall showcase.</p>
      <VideoPlayer src={videos.piindustries} />
    </div>
  );
};

export default Piindustries;
