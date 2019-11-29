import React, {Component} from 'react';
import profilePic from './smile.jpg';
import './header.css';

const Header=()=>{

        return(
            <div className="header">
                <div className="pictureDiv">
                    <img className="profile" src={profilePic} alt="profile" style={{height: '200px', width: '135.57px', align: 'left'}}/>
                </div>


            </div>
        )
}

export default Header;