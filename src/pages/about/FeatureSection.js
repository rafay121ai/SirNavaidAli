import React from 'react';

import { Link } from 'react-router-dom';


import icon1 from '../../assets/images/topics/icon.png'
import icon2 from '../../assets/images/topics/icon2.png'
import icon3 from '../../assets/images/topics/icon3.png'

const Feature = () => {

    return (
        <div className="react_populars_topics react_populars_topics2 react_populars_topics_about pb---80">
            <div className="react__title__section react__title__section-all">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">Navaid Physics Academy Courses</h6>
                        <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s"> Learn Physics Online with <br/>Sir Navaid Ali </h2>
                    </div>                                
                </div>                            
            </div>
            <div className="container">      
                <div className="row pt---30">
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.3s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon1} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><a href="/course">Fun & Engaging Teaching</a></h3>
                                <p>Sir Navaid makes physics fun and exciting! <br/>His energetic teaching style with relatable Pakistani <br/>examples makes learning enjoyable.</p>
                                <a href="/course"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.5s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon2} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><a href="/course">Proven A* Results</a></h3>
                                <p>Thousands of Pakistani students have achieved <br/>A* grades with Sir Navaid's courses. <br/>Join the success stories!</p>
                                <a href="/course"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                            </div>                                    
                        </div>
                    </div>
                    <div className="col-md-4 wow animate__fadeInUp" data-wow-duration="0.7s">
                        <div className="item__inner">                                    
                            <div className="icon">
                                <img src={icon3} alt="Icon image" />
                            </div>
                            <div className="react-content">
                                <h3 className="react-title"><a href="/course">Complete Course Coverage</a></h3>
                                <p>Comprehensive AS-Level, A2-Level, and O-Level <br/>physics courses covering the complete <br/>Cambridge curriculum for Pakistani students.</p>
                                <a href="/course"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                            </div>                                    
                        </div>
                    </div>                            
                </div>
            </div>
        </div>
    );
}

export default Feature;