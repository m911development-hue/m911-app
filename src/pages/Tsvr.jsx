import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Tsvr = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">TCSVR Recording</h1>
      <p className="page-desc">Virtual reality experience showcase.</p>
      <VideoPlayer src={videos.tsvr} />
    </div>
  );
};

export default Tsvr;
