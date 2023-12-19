import React from 'react'
import './Certificate.css'

type Props = {
  str_id: string
}

const Certificate = ({str_id}: Props) => {
  return (
    <div id={str_id}>
      <div className="title">
        {str_id.toUpperCase()}
      </div>
    </div>
  )
}

export default Certificate