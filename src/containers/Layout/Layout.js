import React from 'react'
import BottomBar from '../../components/BottomBar/BottomBar'

const layout = (props) => {
  return (
    <div className="container">
      {props.children}
      <BottomBar />
    </div>
  )
}

export default layout
