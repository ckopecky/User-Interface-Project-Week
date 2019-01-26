import React from 'react';

const Address = () => {
    return (
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
    );
};

export default Address;