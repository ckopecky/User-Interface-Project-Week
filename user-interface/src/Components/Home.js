import React, { Component } from 'react';
import hamburgerMenu from "../img/nav-hamburger.png"
class Home extends Component {
    render() {
        return (
            <div className="home-header">
                <div className="home-header-nav" >
                    <div className="logo">S & J</div>
                    <img src={hamburgerMenu} alt="hamburger menu" />
                </div>
                <div className="slug-line">
                    Integrity,<br/>
					Excellence,<br/>
					Progress.
                </div>
            </div>
        );
    }
}

export default Home;