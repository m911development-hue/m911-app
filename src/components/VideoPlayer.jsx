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

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        muted={false} /* Unmuted by default as requested, user can press play if browser blocks autoplay */
        className="responsive-video"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
