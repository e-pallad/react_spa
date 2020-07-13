import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
              <h1 className="subtopic">Schreib mir:</h1>
              <h3>Email: service@pp&#8208;itservices.de</h3>
              <h3>Instagram: <a href="https://Instagram.com/trvl_sct" target="_blank" rel="noopener noreferrer" style={{color: '#000'}}>@trvl_sct</a></h3>
              <Social />
            </div>
            )
        }
    }

    export default Contact
