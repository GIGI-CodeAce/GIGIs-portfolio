import { useRef,useEffect } from "react";

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load()
    video.play().catch(() => {})

    const interval = setInterval(() => {
      if (video.paused) {
        video.play().catch(() => {})
      }
    }, 5000);

    return () => clearInterval(interval)
  }, []);

  return (
    <video
      ref={videoRef}
      className="video-background"
      preload="auto"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/webBg.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoBackground