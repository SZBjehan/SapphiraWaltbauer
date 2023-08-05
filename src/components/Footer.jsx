import React from 'react'
import LOGO from '../static/Cold.JPG'

function Footer(){

    return (
        <div className='footer' id='Footer'>
        
            <div>
            <div class="foot">
                <div class="foot-box">
                    <div class="foot-left">
                        <h1>Connect with me</h1>
                        <div class="foot-title">Email</div>
                        <div class="foot-info">
                            sapphirawaltbauer@gmail.com
                
                        </div>
                    </div>
                    <div class="foot-left">
                        <div class="foot-title">Contact</div>
                        <div class="foot-info">
                            +880 Phone Number 

                        </div>
                    </div>
                    <div class="foot-left">
                        <div class="foot-title">Address</div>
                        <div class="foot-info">
                            123, Road, location, City
                        </div>
                    </div>
                </div>
                <div class="foot-box">
                    <div class="foot-right">
                        <h1> ... </h1>

                        {/* <div class="foot-title"><b> Customer Service </b></div> */}
                        <div class="foot-info">
                            <p><a href="/home">Terms & Conditions</a></p>
                            <p><a href="/home">About us</a></p>
                            <p><a href="/home">Cold Immersion</a></p>
                            <p><a href="/home">Privacy Policy</a></p>
                        </div>
                    </div>
                    <div class="foot-social">
                        <a href="https://www.facebook.com/szb.jehan"
                            ><i class="fab fa-facebook-square"></i>
                        </a><br />
                        <a href="https://github.com/SZBjehan"
                            ><i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://szbjehan.github.io/portfolio/"
                            ><i class="fas fa-code"></i>
                        </a>
                        <div class="foot-logo">
                            <a href="https://squarehealth.com.bd/"><img src={LOGO} alt="Logo" class="foot-photo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>


    )

}

export default Footer;



