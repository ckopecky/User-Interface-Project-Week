import React from 'react';
import pic1 from '../img/services/services-tab-pre-construction-img.png';
import pic2 from '../img/services/services-tab-construction-img.png';
import pic3 from '../img/services/services-tab-design-build-img.png';
import pic4 from '../img/services/services-tab-sustainability-img.png';

const PillContainer = () => {
    return (
        <div className="pill-container">
            <ul className="nav nav-pills">
                <li className="active"><a className="pills" data-toggle="pill" href="#home">Pre-Construction</a></li>
                <li><a className="pills" data-toggle="pill" href="#menu1">Construction</a></li>
                <li><a className="pills" data-toggle="pill" href="#menu2">Design Build</a></li>
                <li><a className="pills" data-toggle="pill" href="#menu3">Sustainability</a></li>
            </ul>
  
            <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                    <div className="tab-head-p"> 
                        <h3>Pre-Construction</h3>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <br/>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                    </div>
                    <img src={pic1} alt="preconstruction"/>
                </div>
                <div id="menu1" className="tab-pane fade">
                    <div className="tab-head-p">
                        <h3>Construction</h3>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <br/>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                        
                    </div>
                    <img src={pic2} alt="Construction"/>
                </div>
                <div id="menu2" className="tab-pane fade">
                <div className="tab-head-p"> 
                        <h3>Pre-Construction</h3>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <br/>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                    </div>
                    <img src={pic3} alt="design-build" />
                </div>
                <div id="menu3" className="tab-pane fade">
                <div className="tab-head-p"> 
                        <h3>Pre-Construction</h3>
                        <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                        <br/>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                    </div>
                    <img src={pic4} alt="sustainability"/>
                </div>
            </div>
        </div>
    );
};

export default PillContainer;