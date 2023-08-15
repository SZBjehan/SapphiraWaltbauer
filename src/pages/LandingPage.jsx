import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Feature from '../components/Feature';
import About from '../components/About';

function LandingPage(){

    return (
        <div>
            <Nav />

            {/* <Feature /> */}
            
            <About />

            <Footer />
        </div>
    )

}

export default LandingPage;
