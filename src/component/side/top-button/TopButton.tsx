import React from 'react'
import './TopButton.css'
type Props = {
  moveMenu: any
}

const TopButton = ({moveMenu}: Props) => {
  return (
    <button onClick={() => moveMenu(null)} className='top-button'>
      <span className="material-symbols-outlined">
        arrow_upward
      </span>
    </button>
  )
}

export default TopButton