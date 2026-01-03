import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl, videoName, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Lazy load video when it comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' } // Start loading 50px before video is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video && shouldLoad) {
      const handleLoadedData = () => setIsLoading(false);
      const handleCanPlay = () => setIsLoading(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleError = () => {
        console.error('Video error:', video.error);
        setIsLoading(false);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('error', handleError);
      };
    }
  }, [shouldLoad]);

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
    <div className={`video-player-wrapper ${className}`} ref={containerRef}>
      <div className="video-container" onClick={handleVideoClick}>
        {shouldLoad ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="video-element"
            playsInline
            loop
            muted
            preload="metadata"
            onError={(e) => {
              console.error('Video loading error:', e);
              setIsLoading(false);
            }}
          />
        ) : (
          <div className="video-placeholder" style={{ width: '100%', height: '100%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="spinner"></div>
          </div>
        )}
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

