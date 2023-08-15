import React from 'react'
import Self from '../static/selfPhoto.png'


function About(){

    return (
        <div>
            
            <div class="feature-body">
                <div class="self-photo-div">
                    <img src={Self} alt="Sapphira's Photo" class="self-photo"/>
                </div>

                <div class="feature-text">
                    <p>
                        Sapphira Graduated from the Canadian College of Massage in 2013 and has over a decade of experience in the health and wellness field. With a focus on Deep tissue and musculoskeletal injury her back ground includes working with individuals who suffer with chronic progressive conditions. Sapphira is also certified in breath work and cold immersion (ICE) facilitation and enjoys utilizing these alternative practices with her clients to address both physical and emotional wellbeing. Sapphira is motivated and passionate about helping others suffering from pain and physical dysfunction in their daily lives and assisting them to work towards the best version of themselves. Sapphira’s approach to treatment focuses directly on the individuals needs when devising a treatment plan that will be beneficial, sustainable and most importantly successful.     
                    </p>
                    <p>
                        Sapphira is trained in the use of general Swedish massage, trigger point therapy, joint mobilization and remedial exercise to promote healing and recovery. Sapphira is also a Certified RAPID neuro-fascial practitioner; a movement based manual therapy technique that addresses the central nervous systems role in alleviating pain. With her experience in various health care settings, Sapphira has a passion and drive to ensure optimal treatment outcomes for her clients.     
                    </p>
                </div>
            </div>

        </div>

    )

}

export default About;



