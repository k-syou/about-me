import React from 'react'
import './Project.css'
type Props = {
  str_id: string
}

const Project = ({str_id}: Props) => {
  return (
    <div id={str_id}>
      <div className="title">
        {str_id.toUpperCase()}
      </div>
    </div>
  )
}

export default Project