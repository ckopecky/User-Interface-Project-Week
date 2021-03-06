import React from 'react';

const Address = (props) => {
    return (
        <div style={props.className === "address" ? {display: 'flex', justifyContent: 'space-around', textAlign: 'left'}: {width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: ' 0px 30px', textAlign: 'left'}}>
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