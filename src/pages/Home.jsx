import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

// Placeholder import for the video
// Ensure this file exists: src/assets/videos/metaverse_intro.mp4
import videoSrc from '../assets/videos/metaverse_intro.mp4';

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Metaverse Technologies</h1>
      <p className="page-desc">Explore the world of Metaverse technologies.</p>
      <VideoPlayer src={videoSrc} />
    </div>
  );
};

export default Home;
