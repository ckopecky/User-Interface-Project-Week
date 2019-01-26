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
                <Form />
                <Address />
                <Footer />
            </>
            
        );
    }
}

export default Contact;