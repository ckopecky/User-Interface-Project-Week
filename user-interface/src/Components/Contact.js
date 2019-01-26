import React, { Component } from 'react';
import Address from './Address';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state ={ 

        }
    }
    render() {
        return (
            <>
                <Header 
                className="contact-header"
                logo="S & J" 
                toggle={this.props.toggle}
                isClosed={this.props.isClosed}
                handleClick={this.props.handleClick}
                slugline="Contact Us"
                />
                <div className="form-address">
                <Form />
                <div style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{fontSize:"16px", fontWeight: 'bold', width: '35%', textAlign: 'left', marginLeft: '5px'}}>Where We Work</h2>
                    <Address className="contact- address"/>
                </div>
                </div>
                
                <Footer className="address"/>
            </>
            
        );
    }
}

export default Contact;