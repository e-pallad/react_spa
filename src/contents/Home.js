import React, { Component } from 'react';
import Profilepic from '../img/20180912.jpg';
import Social from '../components/Social';
import '../home.css'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={Profilepic} className="profilepic" alt="Das bin ich"></img>
                <div className="codeBox">

                    <p>
                      <span className="typing1" style={{display:'inline-block'}}>Hallo, ich heiße Eric</span>
                      <br />
                      <span className="typing2" style={{display:'inline-block'}}>und ich bin ein Webdeveloper.</span>
                    </p>

                </div>

                <Social />

            </div>
        )
    }
}

export default Home
