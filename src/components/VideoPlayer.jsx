import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && src) {
      videoRef.current.pause();
      videoRef.current.load();
      videoRef.current.play().catch(err => {
        console.log("Autoplay blocked or video missing", err);
      });
    }
  }, [src]);

  if (!src) {
    return (
      <div className="video-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
        <p>Video will be connected later.</p>
      </div>
    );
  }

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        playsInline
        className="responsive-video"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
