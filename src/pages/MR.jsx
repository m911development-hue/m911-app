import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

// Placeholder import for the video
// Ensure this file exists: src/assets/videos/mr_intro.mp4
import videoSrc from '../assets/videos/mr_intro.mp4';

const MR = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Mixed Reality (MR)</h1>
      <p className="page-desc">Interact with both real and virtual worlds together.</p>
      <VideoPlayer src={videoSrc} />
    </div>
  );
};

export default MR;
