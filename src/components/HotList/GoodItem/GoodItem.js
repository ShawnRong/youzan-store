import React from 'react'
import './GoodItem.css'

const goodItem = (props) => (
  <div className="goods-item">
    <a href="#">
      <div className="thumb img-box">
        <img className="fadeIn" src={props.imgSrc} />
      </div>
      <div className="detail">
        <div className="title">{props.title}</div>
        <div className="price">{props.price}</div>
      </div>
    </a>
  </div>
)

export default goodItem