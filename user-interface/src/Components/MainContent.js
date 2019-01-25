import React, { Component } from 'react';
import blueprint from "../img/home/home-img-1.png";
import homeimg2 from "../img/home/home-img-2.png";
import Div from "./Div";

class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="about">
                    <Div 
                        name="Smith & Jones Architects"
                        content="Et sed causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nex no errem."
                        label="Learn More"
                        />
                    <div className="about-text">
                            <img src={blueprint} alt="blueprint"/>
                        </div>
                </div>
                <div className="about">
                    <div className="about-text">
                        <img src={homeimg2} alt="blueprint"/>
                    </div>
                    <Div 
                        name="Futuristic Designs"
                        content="Et sed causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nex no errem."
                        label="Learn More"
                        />
                </div>
            </div>
        );
    }
}

export default MainContent;