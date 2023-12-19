import React from 'react'
import './Header.css'
import TopMenu from './top-menu/TopMenu'
type Props = {
  menuNames: Array<string>
  moveMenu: any
}

function Header({menuNames, moveMenu}: Props) {
  const renderMenus = () => {
    return (
      <ol className='top-menu-bar'>
        {menuNames.map((menuName) => {
          return <li><TopMenu moveMenu={moveMenu} menuName={menuName}></ TopMenu></li>
        })}
      {/* {menuNames.map((menuName, idx) => {return <TopMenu menuName={menuName}} />})} */}
      </ol>
    )
  }
  return (
    <header id='header'>
      <div className="inner">
        {renderMenus()}
      </div>
    </header>
  )
}

export default Header