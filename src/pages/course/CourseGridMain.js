import React from 'react';

import SimpleCourseCard from '../../components/Course/SimpleCourseCard';

const CourseGridMain = () => {
    return (
        <div className="react-course-filter back__course__page_grid pb---40 pt---110 page-fade-in">
            <div className="container pb---70">
                {/* AS-Level Container */}
                <div className="course-level-container mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <SimpleCourseCard
                                title="AS-Level May/June 2026"
                                instructor="Sir Navaid Ali"
                                duration="5 months"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <SimpleCourseCard
                                title="AS-Level Oct/Nov 2025"
                                instructor="Sir Navaid Ali"
                                duration="5 months"
                            />
                        </div>
                    </div>
                </div>

                {/* A2-Level Container */}
                <div className="course-level-container mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <SimpleCourseCard
                                title="A2-Level May/June 2026"
                                instructor="Sir Navaid Ali"
                                duration="5 months"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <SimpleCourseCard
                                title="A2-Level Oct/Nov 2025"
                                instructor="Sir Navaid Ali"
                                duration="5 months"
                            />
                        </div>
                    </div>
                </div>

                {/* O-Level Container */}
                <div className="course-level-container mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <SimpleCourseCard
                                title="O-Level May/June 2026"
                                instructor="Sir Navaid Ali"
                                duration="5 months"
                            />
                        </div>
                        <div className="col-md-6 mb-4">
                            <SimpleCourseCard
                                title="O-Level Oct/Nov 2025"
                                instructor="Sir Navaid Ali"
                                duration="5 months"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseGridMain;