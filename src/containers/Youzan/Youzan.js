import React, { Component, Fragment } from 'react'
import HotList from '../../components/HotList/HotList'

import './Youzan.css'

class Youzan extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <p>This is youzan container</p>
        <HotList />
      </Fragment>
    )
  }
}

export default Youzan