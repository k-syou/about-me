import React from 'react'
import './TopMenu.css'
type Props = {
  menuName: string
  moveMenu: any
}

function TopMenu({menuName, moveMenu}: Props) {
  // const moveMenu = (id: string) => {
  //   const el_target = document.getElementById(id);
  //   const top = el_target?.offsetTop
  //   window.scrollTo({
  //     top: Number(top) - 70,
  //     behavior: 'smooth'
  //   })
  // }
  return (
    <button className='top-menu' onClick={() => moveMenu(menuName)} >{menuName.toUpperCase()}</button>
  )
}

export default TopMenu