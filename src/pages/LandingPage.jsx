import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Feature from '../components/Feature';
import About from '../components/About';
import Booking from '../components/Booking';
import Learn from '../components/Learn';

function LandingPage(){

    return (
        <div>
            <Nav />

            {/* <Feature /> */}
            
            <About />
            
            <Learn />

            <Booking />

            <Footer />
        </div>
    )

}

export default LandingPage;
