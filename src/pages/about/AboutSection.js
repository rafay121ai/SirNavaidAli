import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../components/Video/VideoPlayer';
import { fetchVideosFromBucket } from '../../lib/videoService';

const AboutVideosSection = () => {
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
        <div className="instagram-reels-section">
            <p className="reels-intro">Check out Sir Navaid's viral Instagram reels that made physics fun and exciting!</p>
            {loading ? (
                <div className="text-center py-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading videos...</span>
                    </div>
                </div>
            ) : videos.length > 0 ? (
                <div className="reels-grid">
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
                <div className="text-center py-4">
                    <p>No videos available at the moment.</p>
                </div>
            )}
        </div>
    );
};

const AboutPart = () => {

    return (
        <div className="about__area about__area_one p-relative pt---100 pb---120">
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about__content">
                            {/* Quote Section */}
                            <div className="quote-section wow animate__fadeInUp" data-wow-duration="0.3s">
                                <div className="quote-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="quote-icon">
                                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2-1 0-1.5.5-1.5 1.5S2 21 3 21z"></path>
                                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2-1 0-1.5.5-1.5 1.5S14 21 15 21z"></path>
                                    </svg>
                                    <blockquote className="inspirational-quote">
                                        "Physics is not just about formulas and equations, it's about understanding the beautiful dance of the universe. When you truly grasp the principles, physics becomes poetry in motion."
                                    </blockquote>
                                    <cite className="quote-author">— Sir Navaid Ali, Physics Educator</cite>
                                </div>
                            </div>

                            <p className="about__paragraph wow animate__fadeInUp" data-wow-duration="0.5s">Meet Sir Navaid Ali: your fun, energetic physics teacher who makes learning physics an absolute blast! With his unique teaching style that combines humor, real-world examples, and a deep passion for physics, Sir Navaid transforms complex concepts into easy-to-understand lessons that students love.</p>
                            
                            <div className="about-highlights wow animate__fadeInUp" data-wow-duration="0.7s">
                                <h4>Why Students Love Sir Navaid</h4>
                                <AboutVideosSection />
                            </div>

                            <div className="about-highlights wow animate__fadeInUp" data-wow-duration="0.9s">
                                <h4>What Makes Sir Navaid Special</h4>
                                <div className="about-features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon">🎯</div>
                                        <h5 className="feature-title">Focused Teaching:</h5>
                                        <p className="feature-description">Examples and analogies that students can relate to</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">😄</div>
                                        <h5 className="feature-title">Fun & Energetic Style:</h5>
                                        <p className="feature-description">Learning physics doesn't have to be boring because Sir Navaid makes it fun!</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">📚</div>
                                        <h5 className="feature-title">Complete Course Coverage:</h5>
                                        <p className="feature-description">AS-Level, A2-Level, and O-Level physics covered thoroughly</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">👨‍🏫</div>
                                        <h5 className="feature-title">Experienced Teacher:</h5>
                                        <p className="feature-description">Years of teaching experience with students</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">🌟</div>
                                        <h5 className="feature-title">Proven Results:</h5>
                                        <p className="feature-description">Thousands of students have achieved A* grades with Sir Navaid's help</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-cta wow animate__fadeInUp" data-wow-duration="1.3s">
                                <p className="about__paragraph2">Ready to excel in physics? <Link to="/course">Start Your Journey Today</Link></p>
                                <ul>
                                    <li><Link to="/course" className="more-about">Explore Courses <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link></li>
                                    <li className="last-li">
                                        <em>Get Support</em>
                                        <a href="mailto:info@navaidali@gmail.com">info@navaidali@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPart;