import React, {Component} from 'react';
import profilePic from './smile.jpg';

const Header=()=>{

        return(
            <div className="header">
                <div className="pictureDiv">
                    <img className="profile" src={profilePic} alt="profile" style={{height: '150px', width: '101.68px'}}/>
                </div>


            </div>
        )
}

export default Header;