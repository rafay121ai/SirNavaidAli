import React from 'react';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: "Zainab Ali",
            course: "AS-Level Physics",
            rating: 5,
            review: "Sir Navaid's classes are absolutely amazing! His energy and excitement make every lesson so engaging. I used to hate physics, but now I look forward to his classes. The way he explains concepts with real examples is incredible. My grades went from C to A*!"
        },
        {
            id: 2,
            name: "Hamza Raza",
            course: "A2-Level Physics",
            rating: 5,
            review: "Bhai, Sir Navaid's teaching is next level! His classes are so exciting and interactive. He makes quantum mechanics fun with his engaging style. I never thought I'd enjoy physics this much. Thanks to him, I got A* in my A2 exams!"
        },
        {
            id: 3,
            name: "Ayesha Khan",
            course: "O-Level Physics",
            rating: 5,
            review: "Sir Navaid is the most engaging teacher I've ever had! His classes are so exciting and he makes everything so clear. I was struggling with electricity and magnetism, but his fun teaching style helped me understand everything. My confidence in physics has completely changed!"
        },
        {
            id: 4,
            name: "Bilal Ahmed",
            course: "AS-Level Physics",
            rating: 5,
            review: "Sir Navaid's classes are incredibly exciting! His energy and passion for physics is contagious. The way he breaks down complex topics with engaging examples is amazing. I went from barely passing to getting A* grades. His teaching has completely transformed my understanding!"
        },
        {
            id: 5,
            name: "Fatima Sheikh",
            course: "A2-Level Physics",
            rating: 5,
            review: "Sir Navaid makes physics so engaging and exciting! His classes are never boring. The way he explains wave-particle duality with such enthusiasm helped me finally understand it. His engaging teaching style has helped me achieve A* grades. Best teacher ever!"
        },
        {
            id: 6,
            name: "Usman Malik",
            course: "O-Level Physics",
            rating: 5,
            review: "Sir Navaid's classes are absolutely thrilling! His exciting and engaging teaching style made me fall in love with physics. I was failing before, but his fun approach and clear explanations helped me improve dramatically. Now I'm getting A* grades. Thank you Sir!"
        }
    ];

    return (
        <>
            <div className="student-reviews-section pt---120 pb---120">
                <div className="container">
                    <div className="react__title__section text-center mb-5">
                        <h6 className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.3s">Student Success Stories</h6>
                        <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s">What Our Students Say</h2>
                        <p className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.7s">Real feedback from students who achieved their physics goals</p>
                    </div>
                    <div className="reviews-loop-scroll-container">
                        <div className="reviews-loop-scroll">
                            {reviews.map((review) => (
                                <div key={review.id} className="review-card">
                                    <div className="review-header">
                                        <div className="student-info">
                                            <div className="student-details">
                                                <h4 className="student-name">{review.name}</h4>
                                                <p className="student-course">{review.course}</p>
                                            </div>
                                        </div>
                                        <div className="review-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <p className="review-text">"{review.review}"</p>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {reviews.map((review) => (
                                <div key={`duplicate-${review.id}`} className="review-card">
                                    <div className="review-header">
                                        <div className="student-info">
                                            <div className="student-details">
                                                <h4 className="student-name">{review.name}</h4>
                                                <p className="student-course">{review.course}</p>
                                            </div>
                                        </div>
                                        <div className="review-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <p className="review-text">"{review.review}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial