import React from 'react';
import { Link, useLocation } from 'react-router-dom';
 
const MenuItems = (props) => {
    
    const { parentMenu } = props;

    const location = useLocation();

    const handleLoginClick = (e) => {
        e.preventDefault();
        window.location.href = 'https://lms.orb-ed.pk/account/login';
    };

    const handleSignupClick = (e) => {
        e.preventDefault();
        window.location.href = 'https://lms.orb-ed.pk/account/register';
    };

    return (
        <>
            <li className={parentMenu === 'home' ? 'menu-active' : ''}>
                <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/about' ? 'menu-active' : ''}>
                <Link to="/about">AboutUs</Link>
            </li>
            <li className={parentMenu === 'course' ? 'menu-active' : ''}>
                <Link to="/course">Courses</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'menu-active' : ''}>
                <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-btn">
                <a href="https://lms.orb-ed.pk/account/login" onClick={handleLoginClick} className="login-btn">Login</a>
            </li>
            <li className="nav-btn">
                <a href="https://lms.orb-ed.pk/account/register" onClick={handleSignupClick} className="signup-btn">SignUp</a>
            </li>
        </>
    );
}

export default MenuItems;