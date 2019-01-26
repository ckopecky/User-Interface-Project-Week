import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import RecentProjects from './RecentProjects';
import Footer from './Footer';

const Home = props =>{
    console.log(props);
    return (
        <>
            <Header 
                className="home-header"
                logo="S & J" 
                toggle={props.toggle}
                isClosed={props.isClosed}
                handleClick={props.handleClick}
                slugline="Integrity, Excellence, Progress."
                
                />
            <MainContent />
            <RecentProjects />
            <Footer />
        </>
        );
    }


export default Home;