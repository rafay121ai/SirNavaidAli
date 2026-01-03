import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const HomeBanner = () => {

    const [state, setState] = useState(true);
    const counters = [
        {
            countNum: 4,
            countText: 'Total active students taking gifted courses.',
            countSubText: 'k+',
        },
        {
            countNum: 70,
            countText: 'Available field programs gifted courses.',
            countSubText: '+',
        }

    ];

    return (
        <>
            <div className="hero3__area p-relative">
                <div className="container p-relative">                        
                    <div className="hero3__content">
                        <h1 className="hero3__title wow animate__fadeInUp" data-wow-duration="0.3s">Learn Physics that finally makes sense <br/> <em>(and maybe goes viral)</em></h1>
                        <form className="search-form wow animate__fadeInUp" data-wow-duration="0.5s">
                            <input type="text" className="form-input" placeholder="Search Course" />
                            <button type="submit" className="form-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </button>
                        </form>
                        <p className="hero3__paragraph wow animate__fadeInUp" data-wow-duration="0.7s">Have questions? <a href="#">Get Free Sample <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></p>
                    </div>
                    {counters &&
                        <div className="about__content">
                            <ul>
                                {counters.map( (counter, num) => (
                                    <li key={num}>
                                        <div className="text">
                                            <h4>
                                            <CountUp start={state ? 0 : counter.countNum} end={counter.countNum} duration={10} onEnd= {()=> setState(false)} />
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                            {counter.countSubText}</h4>
                                            <p>{counter.countText}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>  
                        </div> 
                    }
                </div>
            </div>
        </>
    );
}

export default HomeBanner;