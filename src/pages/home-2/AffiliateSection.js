import React, { useState } from 'react';
import alphaLogo from '../../assets/images/logos/alpha.png';
import orbedLogo from '../../assets/images/logos/orbed1.jpg';
import kashansLogo from '../../assets/images/logos/kashans.jpg';

const AffiliateSection = () => {
    const [logoErrors, setLogoErrors] = useState({});

    const logoMap = {
        'alpha.png': alphaLogo,
        'orbed1.jpg': orbedLogo,
        'kashans.jpg': kashansLogo
    };

    const affiliates = [
        {
            id: 1,
            name: "Alpha College",
            description: "Recognized educational institution providing quality academic programs",
            logo: "alpha.png"
        },
        {
            id: 2,
            name: "Orb-Ed",
            description: "Comprehensive E-learning platform crafted with decades of academic excellence.",
            logo: "orbed1.jpg"
        },
        {
            id: 3,
            name: "Kashan's Academy",
            description: "Leading academy for professional development and educational excellence",
            logo: "kashans.jpg"
        }
    ];

    const handleLogoError = (id) => {
        setLogoErrors(prev => ({ ...prev, [id]: true }));
    };

    return (
        <div className="affiliate-section pt---120 pb---120">
            <div className="container">
                <div className="react__title__section text-center mb-5">
                    <h6 className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.3s">Our Partnerships</h6>
                    <h2 className="react__tittle wow animate__fadeInUp" data-wow-duration="0.5s">Where Sir Navaid is Affiliated</h2>
                    <p className="react__subtitle wow animate__fadeInUp" data-wow-duration="0.7s">Trusted partnerships with leading educational institutions and organizations</p>
                </div>
                <div className="row pt---50">
                    {affiliates.map((affiliate, index) => (
                        <div key={affiliate.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="affiliate-card wow animate__fadeInUp" data-wow-duration={`${0.5 + (index * 0.1)}s`}>
                                <div className="affiliate-card-inner">
                                    <div className="affiliate-logo">
                                        {affiliate.logo && !logoErrors[affiliate.id] ? (
                                            <img 
                                                src={logoMap[affiliate.logo]} 
                                                alt={affiliate.name}
                                                onError={() => handleLogoError(affiliate.id)}
                                            />
                                        ) : (
                                            <div className="logo-placeholder">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="9" y1="3" x2="9" y2="21"></line>
                                                    <line x1="15" y1="3" x2="15" y2="21"></line>
                                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                                    <line x1="3" y1="15" x2="21" y2="15"></line>
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="affiliate-content">
                                        <h4 className="affiliate-name">{affiliate.name}</h4>
                                        <p className="affiliate-description">{affiliate.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AffiliateSection;

