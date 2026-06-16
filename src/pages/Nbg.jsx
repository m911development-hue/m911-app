import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { videos } from '../config/videos';

const Nbg = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">NBG Recording</h1>
      <p className="page-desc">NBG technology demonstration.</p>
      <VideoPlayer src={videos.nbg} />
    </div>
  );
};

export default Nbg;
