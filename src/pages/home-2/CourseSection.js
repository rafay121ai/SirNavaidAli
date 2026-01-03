import React from 'react';
import StyledCourseCard from '../../components/Course/StyledCourseCard';

const Course = () => {
    return (
        <div className="react-course-filter pb---100 pt---120">
            <div className="container">  
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12">
                        <div className="react__title__section text-center">
                            <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.3s"> Full Syllabus Courses </h2>
                            <h6 className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.5s">Comprehensive physics courses designed for academic excellence and exam success.</h6>
                        </div>
                    </div>
                </div>
                <div className="row pt---50">
                    <div className="col-lg-4 mb-4">
                        <StyledCourseCard
                            courseID="1"
                            courseImg="1.png"
                            courseTitle="AS-Level Physics Complete Course"
                            courseName="AS-LEVEL PHYSICS"
                            courseLesson="24"
                            courseEnrolled="156"
                            coursePrice="$299"
                            courseAuthor="NAVAID ALI"
                            courseAuthorImg="author.png"
                            courseReview="4.8"
                            courseLevel="FULL COURSE"
                            courseDate="MAY/JUNE 2026"
                        />
                    </div>
                    <div className="col-lg-4 mb-4">
                        <StyledCourseCard
                            courseID="2"
                            courseImg="2.png"
                            courseTitle="A2-Level Physics Complete Course"
                            courseName="A2-LEVEL PHYSICS"
                            courseLesson="28"
                            courseEnrolled="142"
                            coursePrice="$349"
                            courseAuthor="NAVAID ALI"
                            courseAuthorImg="author.png"
                            courseReview="4.9"
                            courseLevel="FULL COURSE"
                            courseDate="MAY/JUNE 2026"
                        />
                    </div>
                    <div className="col-lg-4 mb-4">
                        <StyledCourseCard
                            courseID="3"
                            courseImg="3.png"
                            courseTitle="O-Level Physics Complete Course"
                            courseName="O-LEVEL PHYSICS"
                            courseLesson="20"
                            courseEnrolled="203"
                            coursePrice="$249"
                            courseAuthor="NAVAID ALI"
                            courseAuthorImg="author.png"
                            courseReview="4.7"
                            courseLevel="FULL COURSE"
                            courseDate="MAY/JUNE 2026"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;