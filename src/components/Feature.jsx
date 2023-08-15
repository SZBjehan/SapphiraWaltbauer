import React from 'react'
import FeaturePhoto from '../static/uploadPhoto.JPG'



function Feature(){

    return (
        <div className='feature'>
            
            <div>
                <img src={FeaturePhoto} alt="CodeExposure_Photo" className='exposure-photo' />
            </div>

            {/* <div class="foot-logo">
                <a href="https://squarehealth.com.bd/"><img src={LOGO} alt="Logo" class="foot-photo" /></a>
            </div> */}


        </div>

    )

}

export default Feature;



