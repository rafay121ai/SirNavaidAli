import React from "react";

import AboutPart from './AboutSection'
import Testimonial from './TestimonialSection'
import Feature from './FeatureSection'

const AboutMain = () => {


    return (
        <>
            <div className="page-fade-in" style={{animationDelay: '0.1s'}}>
                <AboutPart />
            </div>
            
            <div className="page-fade-in" style={{animationDelay: '0.2s'}}>
                <Feature />
            </div>

            <div className="page-fade-in" style={{animationDelay: '0.3s'}}>
                <Testimonial />
            </div>
        </>
    )
}

export default AboutMain;