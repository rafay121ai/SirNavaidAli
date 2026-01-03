import React, { useState, useEffect } from 'react';
import VideoPlayer from '../../components/Video/VideoPlayer';
import { fetchVideosFromBucket } from '../../lib/videoService';

const WhyStudentsLoveSection = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadVideos = async () => {
            try {
                setLoading(true);
                const fetchedVideos = await fetchVideosFromBucket();
                setVideos(fetchedVideos || []);
            } catch (error) {
                console.error('Error loading videos:', error);
                // Import and use fallback videos on error
                try {
                    const { getFallbackVideos } = await import('../../lib/videoService');
                    setVideos(getFallbackVideos());
                } catch (fallbackError) {
                    console.error('Error loading fallback videos:', fallbackError);
                    setVideos([]);
                }
            } finally {
                setLoading(false);
            }
        };

        loadVideos();
    }, []);

    return (
        <div className="why-students-love-section pt---120 pb---120">
            <div className="container">
                <div className="react__title__section text-center mb-5">
                    <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.3s">Why Students Love Sir Navaid</h2>
                    <h6 className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.5s">Check out Sir Navaid's viral Instagram reels that made physics fun and exciting!</h6>
                </div>
            </div>
            <div className="container">
                <div className="instagram-reels-section-full wow animate__fadeInUp" data-wow-duration="0.7s">
                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading videos...</span>
                            </div>
                        </div>
                    ) : videos.length > 0 ? (
                        <div className="reels-grid-full">
                            {videos.map((video) => (
                                <div key={video.id} className="reel-item">
                                    <VideoPlayer 
                                        videoUrl={video.url} 
                                        videoName={video.name}
                                        className="reel-video"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <p>No videos available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WhyStudentsLoveSection;

