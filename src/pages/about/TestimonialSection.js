import React, { useState } from "react";
import Slider from "react-slick";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; 


import countIcon1 from '../../assets/images/counter/1.png'
import countIcon2 from '../../assets/images/counter/2.png'
import countIcon3 from '../../assets/images/counter/3.png'
import countIcon4 from '../../assets/images/counter/4.png'

const Testimonial = () => {


    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        margin: 0,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    };

    const [state, setState] = useState(true);

    const counters = [
        {
            countNum: 28,
            countTitle: 'Foreign followers',
            countSubtext: 'k',
            countIcon: countIcon1,
        },
        {
            countNum: 10,
            countTitle: 'Classes complete',
            countSubtext: 'k',
            countIcon: countIcon2,
        },
        {
            countNum : 208,
            countTitle: 'Students enrolled',
            countSubtext: 'k',
            countIcon: countIcon3,
        },
        {
            countNum : 54,
            countTitle: 'Certified Teachers',
            countSubtext: 'k',
            countIcon: countIcon4,
        }

    ];


    return (
        <div className="student_satisfaction-section pt---110 pb---120">
            <div className="container"> 
                <div className="react__title__section-all pb---30">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h6 className="wow animate__fadeInUp" data-wow-duration="0.3s">Student Satisfaction</h6>
                            <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s">Student Community <br/>Feedback</h2>
                        </div>                                
                    </div>                            
                </div>                       
                <div className="feedreact-slider owl-carousel">
                    <Slider {...sliderSettings}>
                        <div className="event__card">
                            <div className="event__card--content">
                                <div className="event__card--content-area">
                                    <div className="testimonial__ratings">
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <span> (24 Reviews) </span>
                                    </div>
                                    <div className="parag">Sir Navaid's classes are absolutely exciting! His engaging teaching style makes physics so much fun. I used to struggle with mechanics, but his energetic approach and clear explanations helped me understand everything. My grades improved from D to A*!</div>
                                </div>
                            </div>
                            <div className="author-sec">
                                <div className="text">
                                    <h4>Zainab Ali</h4>
                                    <p>AS-Level Student</p>
                                </div>
                            </div>
                        </div>
                        <div className="event__card">
                            <div className="event__card--content">
                                <div className="event__card--content-area">
                                    <div className="testimonial__ratings">
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <span> (31 Reviews) </span>
                                    </div>
                                    <div className="parag">Sir Navaid is the most engaging teacher! His classes are so exciting and interactive. The way he explains quantum mechanics with such enthusiasm is amazing. His fun teaching style helped me achieve A* in A2-Level. I never thought physics could be this enjoyable!</div>
                                </div>
                            </div>
                            <div className="author-sec">
                                <div className="text">
                                    <h4>Hamza Raza</h4>
                                    <p>A2-Level Student</p>
                                </div>
                            </div>
                        </div>
                        <div className="event__card">
                            <div className="event__card--content">
                                <div className="event__card--content-area">
                                    <div className="testimonial__ratings">
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <span> (19 Reviews) </span>
                                    </div>
                                    <div className="parag">Sir Navaid's teaching is incredibly exciting and engaging! His classes are never boring. I was scared of physics before, but his fun approach and clear explanations made everything click. My confidence has grown so much and I'm now getting A* grades!</div>
                                </div>
                            </div>
                            <div className="author-sec">
                                <div className="text">
                                    <h4>Ayesha Khan</h4>
                                    <p>O-Level Student</p>
                                </div>
                            </div>
                        </div>
                        <div className="event__card">
                            <div className="event__card--content">
                                <div className="event__card--content-area">
                                    <div className="testimonial__ratings">
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <em className="icon_star"></em>
                                        <span> (27 Reviews) </span>
                                    </div>
                                    <div className="parag">Sir Navaid makes physics so exciting! His engaging classes and energetic teaching style helped me understand complex topics easily. The way he breaks down concepts with fun examples is incredible. Thanks to him, I went from struggling to getting A* grades!</div>
                                </div>
                            </div>
                            <div className="author-sec">
                                <div className="text">
                                    <h4>Bilal Ahmed</h4>
                                    <p>AS-Level Student</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            {counters &&
                <div className="count__area2 pb---100">
                    <div className="container">  
                        <ul className="row">
                            {counters.map( (counter, num) => (  
                                <li key={num} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                    <div className="count__content">
                                        <div className="icon">
                                            <img src={counter.countIcon} alt="image" />
                                        </div>
                                        <div className="text">
                                            <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                    <span className="count__content-title counter">{counter.countNum}</span>
                                                </VisibilitySensor>
                                            )}<em>{counter.countSubtext}</em>
                                            <p className="count__content">{counter.countTitle}</p> 
                                        </div>                                           
                                    </div>
                                </li>
                            ))} 
                        </ul>                             
                    </div>
                </div>
            }
        </div>
    );
}

export default Testimonial;