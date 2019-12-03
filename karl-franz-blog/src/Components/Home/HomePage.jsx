import React, {Component} from 'react';
import '../../App.css'

class HomePage extends Component{
    constructor(){
        super();
        this.state={

        }
    }


    render(){
        return(
            <div className = "homeDiv">
                <h1>This blog has my consent.</h1>
                <div className="postContainer">
                    <h3 className="postTitle">Sample Post Title</h3>
                    <p className="postBody">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        )
    }
}

export default HomePage;