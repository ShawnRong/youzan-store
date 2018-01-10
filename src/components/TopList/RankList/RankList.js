import React from 'react'

import './RankList.css'

const rankList = (props) => {
  return (
    <div className="class-category">
      <div id="scroll-main-content" className="main-content inner-content">
        <div className="hot-wrap">
          <div className="hot-goods">
            <div className="hot-title">
              <p className="pull-left">热销商品榜</p>
              <a href="#" className="pull-right icon-right">更多</a>
            </div>
            <ul>
              {props.rankLists.hotGoods? props.rankLists.hotGoods.map((hotGood, idx) => (
                <li className="goods-item" key={hotGood.id}>
                  <a href="#">
                    <div className="thumb badge center-img">
                      <img src={hotGood.image}/>
                      <span className="num">{idx+1}</span>
                    </div>
                    <div className="detail">
                      <div className="title">{hotGood.name}</div>
                      <div className="price">￥{hotGood.price}</div>
                      <div className="recommend">
                        <span>推荐值:</span>
                        <span>{hotGood.recommend}</span>
                      </div>
                    </div>
                  </a>
                </li>
              )): null}
            </ul>
          </div>
          <div className="hot-shops">
            <div className="hot-title">
              <p className="pull-left">TOP店铺榜</p>
              <a href="#" className="pull-right icon-right">更多</a>
            </div>
            <ul>
              {props.rankLists.hotShops?props.rankLists.hotShops.map((hotShop, idx) => (
                <li className="shop-item" key={hotShop.id}>
                  <div className="shop-title">
                    <span className="badge">{idx+1}</span>
                    <a href="#">{hotShop.name}</a>
                    <span className="follows"> / 关注度: {hotShop.follows}</span>
                  </div>
                  <ul className="shop-images">
                    {hotShop.images.map((image, idx) => (
                      <li key={idx}>
                        <a href="#"><img src={image} /></a>
                      </li>
                    ))
                    }
                  </ul>
                </li>
              )): null }
            </ul>
          </div>
          <div className="hot-keywords">
            <div className="hot-title">
              <p className="pull-left">热搜词排行</p>
            </div>
            <ul className="keywords-list">
              { props.rankLists.hotKeywords ?
                props.rankLists.hotKeywords.map((keyword, idx) => (
                  <li key={idx}><a href="#" className="hot-keyword">{keyword}</a></li>
                )): null
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rankList