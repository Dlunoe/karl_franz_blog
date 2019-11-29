import React, {Component} from 'react';
import profilePic from './smile.jpg';

const Header=()=>{

        return(
            <div class="header">
                <div class="picture">
                    <img src={profilePic} />
                </div>

            </div>
        )
}

export default Header;