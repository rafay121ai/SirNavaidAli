import React from 'react';


import infoImg1 from '../../assets/images/contact/2.png'
import infoImg2 from '../../assets/images/contact/3.png'
import infoImg3 from '../../assets/images/contact/4.png'

const ContactInfo = (props) => {
    const { contactBoxClass } = props;
    return (
        <ul className="address-sec">
            <li>
                <em className="icon"><img src={infoImg1} alt="image" /></em>
                <span className="text"><em>Address</em> Block-6 Block 6 PECHS, Karachi, Pakistan</span>
            </li>
            <li>
                <em className="icon"><img src={infoImg2} alt="image" /></em>
                <span className="text"><em>Contact</em> <a href="tel:+923311046022">Mobile: +92 3311046022</a> <a href="mailto:info@navaidali@gmail.com">Mail: info@navaidali@gmail.com</a></span>
            </li>
            <li>
                <em className="icon"><img src={infoImg3} alt="image" /></em>
                <span className="text"><em>Hour of operation</em> Monday - Friday: 09:00 - 20:00 <br/>Sunday & Junday: 10:30 - 22:00</span>
            </li>
        </ul>
    );

}

export default ContactInfo;