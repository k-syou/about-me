import React, { useState } from 'react'
import './Skill.css'
import SkillBox from './SkillBox/SkillBox'
type Props = {
  str_id: string
}

const Skill = ({str_id}: Props) => {
  const [arr_types, setArr_types] = useState<Array<string>>([
    'LANGUAGES', 'FRAMEWORKS & LIBRARYS', 'INFRASTRUCTURE & DATABASES', 'TOOLS & IDES'
  ])
  const [obj_items, setObj_items] = useState<any>(
    {
      'LANGUAGES' : [
        {item: 'Python', level: 3},
        {item: 'Java', level: 2},
        {item: 'JavaScript', level: 3},
        {item: 'TypeScript', level: 3},
        {item: 'HTML/CSS', level: 2},
        {item: '.NET', level: 3},
        {item: 'C#', level: 2},
        {item: 'C', level: 1},
      ],
      'FRAMEWORKS & LIBRARYS' : [
        {item: 'Node.js', level: 2},
        {item: 'React.js', level: 3},
        {item: 'Spring Boot', level: 2},
        {item: 'RE FrameWork', level: 3},
        {item: 'Nest.js', level: 1},
        {item: 'Next.js', level: 1},
      ],
      'INFRASTRUCTURE & DATABASES' : [
        {item: 'MySQL', level: null},
        {item: 'SQLite', level: null},
        {item: 'AWS', level: null},
        {item: 'Oracle', level: null},
      ],
      'TOOLS & IDES' : [
        {item: 'UiPath', level: 3},
        {item: 'Brity RPA', level: 2},
        {item: 'Confluence', level: null},
        {item: 'VS Code', level: null},
        {item: 'IntelliJ IDEA', level: null},
        {item: 'Eclipse', level: null},
        {item: 'Git', level: null},
        {item: 'GitHub', level: null},
      ],
    }
  )
  const renderSkillBoxs = () => {
    return (
      <div className="skill-boxs">
        {
          arr_types.map((type) => {
            return (
              <SkillBox arr_items={obj_items[type]} str_type={type}/>
            )
          })
        }
      </div>
    )
  }
  return (
    <div id={str_id}>
      <div className="title">
        {str_id.toUpperCase()}
      </div>
      {renderSkillBoxs()}
    </div>
  )
}

export default Skill