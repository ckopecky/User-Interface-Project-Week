import React from 'react';
import Address from './Address';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="contact">
                        <strong><p>Interested in starting a project? </p></strong>
                        <strong>Let’s talk:</strong><br/>
                    
                        <input className="input" type="email" placeholder="Enter email" required/>
                    
                        <p className="never">We'll never share your email with anyone else.</p>
                </div>
                <Address />
            </div>
            <p className="copyright">	Copyright © 2018 Smith and Jones</p>
        </div>
    );
};

export default Footer;