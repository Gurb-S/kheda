import React from 'react'
import { Link } from 'react-router-dom';


/**
 * This function takes in 2 strings  and 2 object as parameters (icon(obj), name, link(obj), and type). 
 *  -The icon(obj) is the img you would like to display. When calling in this function the img must be passed in as an object. 
 *  -The name is the what you would like the name of the 3rd party option to be displayed as
 *  -The link(obj) is the function that will handle your 3rd party login
 *  -The type asks what type of btn you would like this to be. This is be displayed to the user
 * 
 * //* EXAMPLE in Code
 *  import exampleLogo from '../imgs/example-logo.png'
 * 
 *  <ThirdPartyAccountOptions icon={exampleLogo} name="Example" link={signInWithGoogle} type="Sign in"/>
 * 
 * //* EXAMPLE on Screen
 *  ----------------------------------
 *  | logo    Sign in with Example   |
 *  ----------------------------------
 * 
 * ! must have react-router-dom & bootstrap installed
 *  -- have had glitchs where react-bootstrap was also required. Seems to work fine now but putting here just in case this info     * needed in future
 */

export function ThirdPartyAccountOptions({icon,name,link,type,game = false, bgcolor='none'}){
    let page = '#'
    if(typeof link === 'string'){
        page = {link}
    }
    return(
        <Link to={link} onClick={link} className='text-decoration-none text-dark'>
            <div className="card m-4" style={{ height: '59.2px', width: '290px', backgroundColor: bgcolor}}>
                <div className="row g-0 d-flex align-items-center mt-1">
                    <div className="col-4 mb-1 d-flex justify-content-evenly">
                        <img src={icon} className="img-fluid rounded-start me-4" alt="..."  height='50px' width='50px' />
                    </div>
                    <div className="col-8">
                        <div className="card-body p-0">
                        {(game ? <h5 className="card-title fs-3">{type}</h5> 
                               : <h5 className="card-title fs-6">{type} with {name}</h5>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}