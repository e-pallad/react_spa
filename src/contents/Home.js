import React, { Component } from 'react';
import profilepic from '../img/20180912.jpg';
import Social from '../components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="Hello it's me"></img>
                <div className="codeBox">
                  <div>
                    <h2 className="typing1">Hallo, ich heiße Eric</h2>
                  </div>
                  <br />
                  <div>
                    <h2 className="typing2">und bin ein Webdeveloper.</h2>
                  </div>
                </div>

                <Social />

            </div>
        )
    }
}

export default Home
