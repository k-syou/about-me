import React from 'react'
import './Experience.css'
type Props = {
  str_id: string
}

const Experience = ({str_id}: Props) => {
  return (
    <div id={str_id}>
      <div className="title">
        {str_id.toUpperCase()}
      </div>
    </div>
  )
}

export default Experience