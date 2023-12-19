import React from 'react'
import './Education.css'

type Props = {
  str_id: string
}

const Education = ({str_id}: Props) => {
  return (
    <div id={str_id}>
      <div className="title">
        {str_id.toUpperCase()}
      </div>
      <div></div>
    </div>
  )
}

export default Education