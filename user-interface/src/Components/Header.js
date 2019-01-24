import React from 'react';
import hamburgerMenu from "../img/nav-hamburger.png"

const Header = (props) => {
    return (
        <div className="home-header">
                <div className="home-header-nav" >
                    <div className="logo">{props.logo}</div>
                    <img src={hamburgerMenu} alt="hamburger menu" />
                </div>
                <div className="slug-line">
                    Integrity,<br/>
					Excellence,<br/>
					Progress.
                </div>
        </div>
    );
};

export default Header;