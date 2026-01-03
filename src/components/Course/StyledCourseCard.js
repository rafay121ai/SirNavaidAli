import React from 'react';

const StyledCourseCard = (props) => {
    const { 
        courseID, 
        courseImg, 
        courseTitle, 
        courseName, 
        courseAuthor, 
        courseAuthorImg, 
        courseLesson, 
        courseEnrolled, 
        coursePrice, 
        courseReview,
        courseLevel = "FULL COURSE",
        courseDate = "MAY/JUNE 2026"
    } = props;

    return (
        <div className="styled-course-card">
            <div className="card-header">
                <div className="course-level">{courseLevel}</div>
                <div className="course-title">{courseName}</div>
                <div className="course-instructor">BY {courseAuthor}</div>
            </div>
            <div className="card-body">
                <div className="course-date">{courseDate}</div>
                <div className="course-description">
                    Full syllabus coverage, live support, and exam-targeted lectures for {courseName} students.
                </div>
                <div className="course-stats">
                    <div className="stat-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        {courseEnrolled} Students
                    </div>
                    <div className="stat-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        {courseReview} Rating
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="register-btn">
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default StyledCourseCard;
