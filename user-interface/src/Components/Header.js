import React from 'react';
import hamburgerMenu from "../img/nav-hamburger.png";
import closed from "../img/nav-hamburger-close.png";
import { Link } from 'react-router-dom';

const Header = (props) => {
    console.log(props);
    return (
        <div className={props.className}>
            <div className="home-header-nav navbar" >
                <Link to="/"><div className="logo">{props.logo}</div></Link>
                <div className="dropdown">
                    <img src={hamburgerMenu} 
                        onClick={props.handleClick} 
                        className="dropbtn"
                        alt="menu"
                        style={{display: props.isClosed === false ? 'none':'block', cursor:'pointer'}}
                        />
                    <img src={closed}
                        onClick={props.handleClick}
                        className="dropbtn"
                        alt="close"
                        style={{display: props.isClosed === false ? 'block' : 'none', cursor: 'pointer' }}
                        />
                </div>
                <div onClick={props.handleClick} className="dropdown-content"
                    style={props.isClosed === true ? {display: 'none'}: {display: 'flex'}}
                    >
                    <Link style={{display: props.isClosed === false ? 'block' : 'none' }}to="/">Home</Link>
                    <Link style={{display: props.isClosed === false ? 'block' : 'none' }}to="/services">Services</Link>
                    <Link style={{display: props.isClosed === false ? 'block' : 'none' }}to="/contact">Contact</Link>
                </div>
            </div>
            <div className="slug-line">
                {props.slugline}
            </div>
        </div>
    );
};

export default Header;