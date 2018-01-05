import React, { Component } from 'react'
import { Carousel } from 'antd';

import axios from 'axios'
import url from '../../utility/utility'
import './Swiper.css'

class Swiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: []
    }
  }

  componentWillMount() {
    axios.get(url.banner)
      .then(response => {
        this.setState({
          bannerList: response.data.lists
        })
      })

  }

  render(){
    return (
      <Carousel autoplay>
        {this.state.bannerList.map(banner => (
          <div>
            <img src={banner.image} />
          </div>
        ))}
      </Carousel>
    )
  }
}

export default Swiper