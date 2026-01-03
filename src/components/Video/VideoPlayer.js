import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl, videoName, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsLoading(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <div className={`video-player-wrapper ${className}`}>
      <div className="video-container" onClick={handleVideoClick}>
        <video
          ref={videoRef}
          src={videoUrl}
          className="video-element"
          playsInline
          loop
          muted
        />
        {isLoading && (
          <div className="video-loading">
            <div className="spinner"></div>
          </div>
        )}
        {!isPlaying && !isLoading && (
          <div className="video-play-overlay">
            <div className="play-button-large">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;

