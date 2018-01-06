import React from 'react'

import './RecoomendShop.css'
//TODO: RecommendShop API not create

const recommendShop = (props) => {
  return (
    <div className="section-content shops">
      <div className="shop-wrap">
        <div className="shop-item">
          <a href="https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn">
              <img className="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png" />
          </a>
        </div>
        <div className="shop-item">
          <a href="https://h5.koudaitong.com/v2/feature/1e22e3vtu">
              <img className="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png" />
            </a>
        </div>
        <div className="shop-item">
          <a href="https://h5.koudaitong.com/v2/feature/8oups7zk">
            <img className="fadeIn" src="https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default recommendShop