import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

// Placeholder import for the video
// Ensure this file exists: src/assets/videos/vr_intro.mp4
import videoSrc from '../assets/videos/vr_intro.mp4';

const VR = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Virtual Reality (VR)</h1>
      <p className="page-desc">Experience immersive virtual reality environments.</p>
      <VideoPlayer src={videoSrc} />
    </div>
  );
};

export default VR;
