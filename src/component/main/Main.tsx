import React from 'react'
import './Main.css'
type Props = {
  mainTags: Array<any>
}

function Main({mainTags}: Props) {

  const renderContents = () => {
    return (
      <main id='main'>
        <div className="inner">
        {mainTags.map((value) => {
          return value
        })}
        </div>
      </main>
    )
  }

  return renderContents()
}

export default Main;