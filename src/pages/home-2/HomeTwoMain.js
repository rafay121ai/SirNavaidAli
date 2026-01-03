import React from 'react';
import About from './AboutSection';
import WhyStudentsLoveSection from './WhyStudentsLoveSection';
import HomeBanner from './BannerSection';
import FaqPart from './FaqSection';
import Course from './CourseSection';
import Testimonial from './TestimonialSection';
import AffiliateSection from './AffiliateSection';
import ScrollToTop from '../../components/ScrollTop';

const HomeTwoMain =() => {
		return (
			<>
				<div className="react-wrapper fade-in-content">
            		<div className="react-wrapper-inner">
						{/* BannerSection-start */}
						<div className="section-fade-in" style={{animationDelay: '0.15s'}}>
							<HomeBanner />
						</div>
						{/* BannerSection-start */}

						{/* Why Students Love Section-start */}
						<div className="section-fade-in" style={{animationDelay: '0.3s'}}>
							<WhyStudentsLoveSection />
						</div>
						{/* Why Students Love Section-end */}

						{/* About-area-start */}
						<div className="section-fade-in" style={{animationDelay: '0.45s'}}>
							<About />
						</div>
						{/* About-area-end */}

						{/* Course-area-start */}
						<div className="section-fade-in" style={{animationDelay: '0.6s'}}>
							<Course />
						</div>
						{/* Course-area-end */}

					{/* Faq-area-start */}
					<div className="section-fade-in" style={{animationDelay: '0.75s'}}>
						<FaqPart />
					</div>
					{/* Faq-area-end */}

					{/* testmonial-area-start */}
					<div className="section-fade-in" style={{animationDelay: '0.9s'}}>
						<Testimonial />
					</div>
					{/* testmonial-area-end */}

					{/* affiliate-area-start */}
					<div className="section-fade-in" style={{animationDelay: '1.05s'}}>
						<AffiliateSection />
					</div>
					{/* affiliate-area-end */}

						{/* scrolltop-start */}
						<ScrollToTop />
						{/* scrolltop-end */}
					</div>
				</div>

			</>
		);
	}

export default HomeTwoMain;