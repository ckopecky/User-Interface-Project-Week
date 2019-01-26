import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PillContainer from './PillContainer';

const Services = props => {
    return (
        <div className="services-container">
            <Header className="services-header"
                    logo="S & J" 
                    toggle={props.toggle}
                    isClosed={props.isClosed}
                    handleClick={props.handleClick}
                    slugline="Services"
            />
            <div className="services-p-tab">
                <p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                <PillContainer /> 
            </div>
            <Footer />

        </div>
    );
};


export default Services;

