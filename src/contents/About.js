import React, {
  Component
} from 'react';

class About extends Component {
  render() {
    return (
      <div className = "condiv">
        <h1 className = "subtopic">Über mich:</h1>
        <h4>Hallo,</h4>
        <h1>ich heiße Eric Pallad und bin ein angehender</h1>
        <h3>Full Stack Web <u>Developer</u></h3>
        <br /> <br />
        <p>Meine erste Erfahrung in der Webprogrammierung machte ich mit 16,
        mittlerweile bin ich fast 30 und versuche so richtig in dieser Branche Fuß zu fassen.
        Web development is my center of interest, i always love the idea of cross - platform development,
        1 - n one code base deploy into almost any platform, which web technology like Javascript enables
        me to do. I also like creating Interactive UI components for better UX and share
        those desgin and codes to the world through Github, Codepen and Instagram.</p>
      </div>
    )
  }
}

export default About
