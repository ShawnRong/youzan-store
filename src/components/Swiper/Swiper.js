import React, { Component } from 'react'
import { Carousel } from 'antd';
import { connect } from 'react-redux'

import axios from 'axios'
import { fetchBanner } from '../../store/actions'
import url from '../../utility/utility'
import './Swiper.css'

class Swiper extends Component {
  componentWillMount() {
    this.props.onLoadBannerList()
  }

  render(){
    return (
      <Carousel autoplay>
        {this.props.bannerList.map(banner => (
          <div>
            <img src={banner.image} />
          </div>
        ))}
      </Carousel>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    bannerList: state.bannerList
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onLoadBannerList: () => dispatch(fetchBanner())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Swiper)