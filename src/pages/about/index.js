import React from 'react';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/FooterTwo';
import ScrollToTop from '../../components/ScrollTop';
import AboutMain from './AboutMain';

import Logo from '../../assets/images/logos/navaid-logo.png';

const About = () => {

    return (
        <>
            <Header
                parentMenu='page'
                headerNormalLogo={Logo}
                headerStickyLogo={Logo}
            />

            <div class="react-wrapper">
                <div class="react-wrapper-inner">
                    
                    {/* About Us Page Header */}
                    <div className="about-page-header pt---120 pb---60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="about-page-title wow animate__fadeInUp" data-wow-duration="0.3s">About Us</h1>
                                    <p className="about-page-subtitle wow animate__fadeInUp" data-wow-duration="0.5s">Discover the story behind Navaid Physics Academy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <AboutMain />

                    {/* scrolltop-start */}
                    <ScrollToTop />
                    {/* scrolltop-end */}
                </div>
            </div>

            <FooterTwo />

        </>
    );
}

export default About;