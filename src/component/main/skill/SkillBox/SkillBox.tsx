import React from 'react'
import './SkillBox.css'
type Props = {
  str_type: string
  arr_items: Array<any>
}

const SkillBox = ({str_type, arr_items}: Props) => {
  const renderSkillContents = () => {
    let contents = arr_items.map((skill_info) => {
      let badge;
      if (skill_info.level === null) {
        badge = ''
      } else {
        badge = skill_info.level
      }
      return (
        <li className='skill-item'><span className={"badge s" + badge}>{badge}</span>{skill_info.item}</li>
      )
    })
    return (
      <ol className='skill-items'>
        {contents}
      </ol>
    )
  }
  return (
    <div className='skill-box'>
      <div className='skill-type'>
        {str_type}
      </div>
      {renderSkillContents()}
    </div>
  )
}

export default SkillBox