import React from 'react';

const VideoCard = (props) => {
    const { 
        videoId,
        videoTitle,
        videoDescription,
        videoThumbnail,
        videoDuration,
        videoViews,
        videoDate,
        instructorName,
        instructorImage
    } = props;

    return (
        <div className="video-card">
            <div className="video-thumbnail">
                <img src={videoThumbnail} alt={videoTitle} />
                <div className="play-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>
                <div className="video-duration">{videoDuration}</div>
            </div>
            <div className="video-content">
                <h3 className="video-title">{videoTitle}</h3>
                <p className="video-description">{videoDescription}</p>
                <div className="video-meta">
                    <div className="instructor-info">
                        <img src={instructorImage} alt={instructorName} className="instructor-avatar" />
                        <span className="instructor-name">{instructorName}</span>
                    </div>
                    <div className="video-stats">
                        <span className="views">{videoViews} views</span>
                        <span className="date">{videoDate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
