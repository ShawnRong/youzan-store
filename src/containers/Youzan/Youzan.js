import React, { Component, Fragment } from 'react'
import HotList from '../../components/HotList/HotList'
import Swiper from '../../components/Swiper/Swiper'

import './Youzan.css'

class Youzan extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <Swiper />
        <HotList />
      </Fragment>
    )
  }
}

export default Youzan