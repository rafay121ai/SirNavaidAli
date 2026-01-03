import React from 'react';
import { Link } from 'react-router-dom';

const StyledTopicCard = (props) => {
    const { 
        topicIcon, 
        topicTitle, 
        courseCount,
        topicDescription = "Comprehensive courses designed for success"
    } = props;

    return (
        <div className="styled-topic-card">
            <div className="topic-icon">
                <img src={topicIcon} alt={topicTitle} />
            </div>
            <div className="topic-content">
                <h3 className="topic-title">
                    <Link to="/course">{topicTitle}</Link>
                </h3>
                <p className="topic-count">{courseCount}</p>
                <p className="topic-description">{topicDescription}</p>
            </div>
            <div className="topic-footer">
                <Link to="/course" className="explore-btn">
                    Explore Courses
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default StyledTopicCard;
