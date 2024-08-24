import React, { useEffect, useRef } from 'react';

const VideoBackground = ({ bgVid }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const intervalId = setInterval(() => {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.play();
      }
    }, 7300); // 7.3 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <video
      ref={videoRef}
      className="video-background"
      autoPlay
      loop
      muted
      playsInline
      src={bgVid}
    />
  );
};

export default VideoBackground;