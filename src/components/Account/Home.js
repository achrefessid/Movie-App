import React, {Component} from 'react';
import fire from './Fire.js';

class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div className="register-home">
            <h1>Welcome to the website where you can look up movies depending on your mood!</h1>
            <h1><img src="https://moviesmood.weebly.com/uploads/3/9/8/2/39822129/header_images/1411493460.jpg" alt=""></img></h1>
            <button class="btn btn-secondary btn-lg" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;

/*
*/