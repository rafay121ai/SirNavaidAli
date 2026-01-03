import React from 'react';
import VideoCard from '../../components/Video/VideoCard';

const About = () => {
    return (
        <div className="video-about-section pb---120 pt---120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="react__title__section text-center mb-5">
                            <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.3s">Featured Physics Videos</h2>
                            <h6 className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.5s">Master physics concepts with our comprehensive video lessons</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <VideoCard
                            videoId="1"
                            videoTitle="AS-Level Physics: Mechanics Fundamentals"
                            videoDescription="Learn the core concepts of mechanics including forces, motion, and energy with practical examples and problem-solving techniques."
                            videoThumbnail="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop"
                            videoDuration="15:30"
                            videoViews="2.3K"
                            videoDate="2 days ago"
                            instructorName="Navaid Ali"
                            instructorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                        />
                    </div>
                    <div className="col-lg-4 mb-4">
                        <VideoCard
                            videoId="2"
                            videoTitle="A2-Level Physics: Quantum Mechanics"
                            videoDescription="Dive deep into quantum mechanics, wave-particle duality, and modern physics concepts essential for A2-level success."
                            videoThumbnail="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop"
                            videoDuration="22:45"
                            videoViews="1.8K"
                            videoDate="1 week ago"
                            instructorName="Navaid Ali"
                            instructorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                        />
                    </div>
                    <div className="col-lg-4 mb-4">
                        <VideoCard
                            videoId="3"
                            videoTitle="O-Level Physics: Electricity & Magnetism"
                            videoDescription="Master electricity and magnetism concepts with clear explanations, circuit analysis, and electromagnetic principles."
                            videoThumbnail="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop"
                            videoDuration="18:20"
                            videoViews="3.1K"
                            videoDate="3 days ago"
                            instructorName="Navaid Ali"
                            instructorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;