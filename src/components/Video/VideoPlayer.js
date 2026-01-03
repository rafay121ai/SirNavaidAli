import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl, videoName, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            setIsInView(true);
          } else {
            setIsInView(false);
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: '100px', threshold: 0.1 }
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
    if (!video || !shouldLoad) return;

    const handleLoadedMetadata = () => setIsLoading(false);
    const handleCanPlay = () => setIsLoading(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      setIsLoading(false);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && isPlaying) {
      const pauseOtherVideos = () => {
        document.querySelectorAll('video').forEach((v) => {
          if (v !== video && !v.paused) {
            v.pause();
          }
        });
      };
      pauseOtherVideos();
    } else if (!isInView && !video.paused) {
      video.pause();
    }
  }, [isInView, isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    document.querySelectorAll('video').forEach((v) => {
      if (v !== video && !v.paused) {
        v.pause();
      }
    });

    if (video.paused) {
      video.play().catch(() => setIsLoading(false));
    } else {
      video.pause();
    }
  };

  return (
    <div className={`video-player-wrapper ${className}`} ref={containerRef}>
      <div className="video-container" onClick={togglePlay}>
        {shouldLoad ? (
          <video
            ref={videoRef}
            src={videoUrl}
            className="video-element"
            playsInline
            loop
            muted
            preload="metadata"
            onError={() => setIsLoading(false)}
          />
        ) : (
          <div className="video-placeholder" style={{ width: '100%', height: '100%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="spinner"></div>
          </div>
        )}
        {isLoading && shouldLoad && (
          <div className="video-loading">
            <div className="spinner"></div>
          </div>
        )}
        {!isPlaying && !isLoading && shouldLoad && (
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

