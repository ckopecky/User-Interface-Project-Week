import React from 'react';

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
                <div className="address">
                    <div className="address-detail">
                            <strong className="state">New York</strong><br/>
                            <div className="address-font">123 Lane<br/>
                            Suite 100<br/>
                            Albany, NY 12345<br/>
                            202 555 0144</div>
                    </div>
                    <div className="address-detail">
                            <strong className="state">Florida</strong><br/>
                            <div className="address-font">Ocean Drive<br/>
                            Suite 201<br/>
                            Orlando, FL 22345<br/>
                            502 555 0144</div>
                    </div>
                    <div className="address-detail">
                            <strong className="state">California</strong><br/>
                            <div className="address-font">Mountain Street<br/>
                            Suite 105<br/>
                            San Diego, CA 22345<br/>
                            702 555 0144</div>
                    </div>
                </div>
            </div>
            <p className="copyright">	Copyright © 2018 Smith and Jones</p>
        </div>
    );
};

export default Footer;