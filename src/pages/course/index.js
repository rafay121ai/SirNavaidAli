import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CourseGridMain from './CourseGridMain';
import ScrollToTop from '../../components/ScrollTop';

import Logo from '../../assets/images/logos/navaid-logo.png';

const Course = () => {
    return (
        <body class="courses-grid-page">
            <Header
                parentMenu='course'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div class="react-wrapper">
                <div class="react-wrapper-inner">
                    <Breadcrumb
                        pageTitle="Course"
                    />

                    <CourseGridMain />

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
            </div>

            <Footer />

        </body>
    );
}


export default Course;

