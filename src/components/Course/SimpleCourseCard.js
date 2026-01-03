import React from 'react';

const SimpleCourseCard = (props) => {
    const {
        title,
        instructor = "Sir Navaid Ali",
        duration = "5 months"
    } = props;

    const handleRegisterClick = () => {
        window.location.href = 'https://lms.orb-ed.pk/account/login?nextUrl=%2Fproduct%2Fcontent%2F20856';
    };

    return (
        <div className="simple-course-card">
            <h3 className="course-title">{title}</h3>
            <div className="title-underline"></div>
            <div className="course-info">
                <div className="info-item">
                    <span className="info-label">Instructor:</span>
                    <span className="info-value">{instructor}</span>
                </div>
                <div className="info-item">
                    <span className="info-label">Duration:</span>
                    <span className="info-value">{duration}</span>
                </div>
            </div>
            <button className="register-btn" onClick={handleRegisterClick}>
                Register Now
            </button>
        </div>
    );
};

export default SimpleCourseCard;

