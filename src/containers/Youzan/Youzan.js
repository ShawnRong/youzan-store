import React, { Component, Fragment } from 'react'

import RecommendShop from '../../components/RecommendShop/RecommendShop'
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
        <div className="section-title">优店推荐</div>
        <RecommendShop />
        <div className="line-block line-block-gray">
            <div className="lineblock-title">
                <span className="lineblock-font">最热商品推荐</span>
            </div>
        </div>
        <HotList />
      </Fragment>
    )
  }
}

export default Youzan