import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

// Placeholder import for the video
// Ensure this file exists: src/assets/videos/future_intro.mp4
import videoSrc from '../assets/videos/future_intro.mp4';

const Future = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Future of Metaverse</h1>
      <p className="page-desc">Explore the future possibilities of the Metaverse.</p>
      <VideoPlayer src={videoSrc} />
    </div>
  );
};

export default Future;
