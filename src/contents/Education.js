import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
              <h2 className="subtopic">Meine Ausbildung</h2>
              <Widecard title="Tech. Assi. Informatik" where="TÜV Rheinland Akademie" from="2009" to="2011"/>
              <h2 className="subtopic">Meine Zertifikate</h2>
              <Widecard title="React.js Essential Training" where="LinkedIn" from="Juli 2020" to="Kein Ablaufdatum"/>
              <Widecard title="Grundlagen des Onlinemarketings" where="Google Inc." from="April 2020" to="Kein Ablaufdatum"/>
              <Widecard title="Responsice Web Design" where="freeCodeCamp" from="März 2020" to="Kein Ablaufdatum"/>
            </div>
            )
        }
    }

export default Education
