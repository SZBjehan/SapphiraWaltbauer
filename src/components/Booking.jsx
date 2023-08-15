import React from 'react'
import Footer from './Footer';


function Booking(){

    return (
        <div>
            <div class="pos">   
                <div className='book-session'>
                    <h2 className='book-session-title'>Book a Session</h2>
                </div>   
                <div className='booking-section'>
                    <a href="">
                        <div class="rec-box">
                            <div class="box_title"> 75min Session  </div>
                            <div class="box_des" > Intake, HNS treatment, breathwork session followed by cold plunge </div>
                            <div class="box_price">$100</div>
                        </div>
                    </a>
                    <a href="">
                        <div class="rec-box">
                            <div class="box_title" > 60min Session </div>
                            <div class="box_des"> Intake, Breath work followed by cold plunge  </div>
                            <div class="box_price">$85</div>
                        </div>
                    </a>
                    <a href="">
                        <div class="rec-box">
                            <div class="box_title" > 30min Session </div>
                            <div class="box_des"> Breath work only, OR plunge only followed by thermogenic exercises to create contrast to cold  </div>
                            <div class="box_price">$65</div>
                        </div>
                    </a>
                </div>          
                <a href={Footer} className='extra-book'>
                    <div className='extra-booking'>
                        If you are interested in group classes with a <b>maximum of 5 people</b> please reach out to discuss the length and cost of these sessions. 
                    </div>
                </a>
        
            </div>

            <div className='disclaimer'>
            <marquee behavior="scroll" direction="left" scrollamount="8">
                *please note cold immersion and breath work sessions cannot be billed under RMT insurance as these modalities are not covered by insurance*
            </marquee>
            </div>

        </div>

    )

}

export default Booking;



