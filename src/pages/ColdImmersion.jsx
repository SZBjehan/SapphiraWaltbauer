import React from 'react'
import Footer from '../components/Footer';
import ColdExposure from '../components/ColdExposure';
import Nav from '../components/Nav';
import Booking from '../components/Booking';

function ColdImmersion(){

    return (
        <div>
            <Nav />
            
            <ColdExposure />

            <Booking/>
            
            <Footer />
        </div>
    )

}

export default ColdImmersion;
