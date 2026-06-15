import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

// Placeholder import for the video
// Ensure this file exists: src/assets/videos/ar_intro.mp4
import videoSrc from '../assets/videos/ar_intro.mp4';

const AR = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Augmented Reality (AR)</h1>
      <p className="page-desc">Discover how digital content blends with reality.</p>
      <VideoPlayer src={videoSrc} />
    </div>
  );
};

export default AR;
