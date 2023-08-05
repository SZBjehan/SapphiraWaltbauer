import React from 'react'
import {Link} from 'react-router-dom'; 

function Nav(){

    return (
        <div className='nav' id='Nav'>
            <div className='nav-name'>
                <Link 
                    to={{
                        pathname: "/"
                    }}
                    class="header-name"
                >
            
                Sapphira Waltbauer
                
                
                </Link>
                    <br />
                <Link 
                    to={{
                        pathname: "/cold-immersion"
                    }}
                    class="header-name"
                >
            
                Code
                
                
                </Link>
            </div>
            {/* <div class="nav-title">
                 Appointment
            </div> */}
        </div>

    )

}

export default Nav;



