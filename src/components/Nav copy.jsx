import React from 'react'
import {Link} from 'react-router-dom'; 

function Nav_backup(){

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
            
                Cold Immersion
                
                
                </Link>
            </div>
            {/* <div class="nav-title">
                 Appointment
            </div> */}
        </div>

    )

}

export default Nav_backup;



