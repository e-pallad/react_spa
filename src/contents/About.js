import React, {
  Component
} from 'react';

class About extends Component {
  render() {
    return (
      <div className = "condiv">
        <h2 className = "subtopic">Über mich:</h2>
        <h4>Hallo,</h4>
        <h3>ich heiße <bold><u>Eric Pallad</u></bold><br /> und bin ein angehender <br /><u>Full Stack Web Develo</u><u>per</u></h3>
        <br /> <br />
        <p>
          Meine erste Erfahrung in der Webprogrammierung machte ich mit 16,
          mittlerweile bin ich fast 30 und versuche so richtig in dieser Branche Fuß zu fassen.
          Webentwicklung ist mein Hauptinteresse, ich liebe die Idee der plattformübergreifenden
          Entwicklung, eine Codebasis, die in fast jeder Plattform eingesetzt werden kann, was
          mir Webtechnologie wie Javascript ermöglicht. Mir gefällt es auch, interaktive
          UI-Komponenten für eine bessere UX zu erstellen und diese Entwürfe und Codes der Welt
          über Github, Codepen und Instagram zur Verfügung zu stellen.
        </p>
      </div>
    )
  }
}

export default About
