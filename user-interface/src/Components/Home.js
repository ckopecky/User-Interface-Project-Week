import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import RecentProjects from './RecentProjects';
import Footer from './Footer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: null,
            isClosed: null,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.setState({toggle: true, isClosed: true})

    }
    handleClick() {
        if(this.state.toggle === false && this.state.isClosed === false) {
            this.setState({toggle: true, isClosed: true });
        } else if(this.state.toggle === true && this.state.isClosed === true) {
            this.setState({toggle: false, isClosed: false})
        } else {
            this.componentWillMount();
        }
        console.log(this.state);
    }
    render() {
        return (
            <>
                <Header 
                    logo="S & J" 
                    toggle={this.state.toggle}
                    isClosed={this.state.isClosed}
                    handleClick={this.handleClick}
                    
                    />
                <MainContent />
                <RecentProjects />
                <Footer />
            </>
        );
    }
}

export default Home;