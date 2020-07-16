
import React, { Component } from 'react'
import '../skill.css'

let skillList = [
  {"skillName":"HTML", "skillLevel":"expert"},
  {"skillName":"CSS", "skillLevel":"advanced"},
  {"skillName":"PHP", "skillLevel":"advanced"},
  {"skillName":"JS", "skillLevel":"intermediate"},
  {"skillName":"REACT.JS", "skillLevel":"basic"}
]

const Skill = ({skillName, skillLevel}) => {
  return (
    <div
    className={"bar front " + skillLevel}
    data-skill={skillName}>
    </div>
  )
}

class Skills extends Component {
  render() {
    return (
      <div className="condiv skills">
        <h2 className="subtopic">My Skills</h2>
        {skillList.map(
          (skill, i) =>
            <Skill
              key={i}
              skillName={skill.skillName}
              skillLevel ={skill.skillLevel}/>
        )}
      </div>
    )
  }
}

export default Skills
