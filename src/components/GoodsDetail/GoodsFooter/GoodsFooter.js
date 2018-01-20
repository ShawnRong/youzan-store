import React from "react";

import "./GoodsFooter.css";

const goodsFooter = props => (
  <div>
    <div className="js-bottom-opts js-footer-auto-ele stick-bottom">
      <div className="stick-bottom-icons">
        <a href="javascript:;" className="js-yz-im icons icons-im ">
          店主
        </a>
        <a
          href="https://h5.youzan.com/v2/showcase/homepage?kdt_id=16546132"
          className="js-call-im icons icons-home"
        >
          店铺
        </a>
        <a href="javascript:;" className="js-yz-zan icons icons-zan ">
          收藏
        </a>
      </div>
      <div className="stick-bottom-btns">
        <div className="btn-cart">
          <a className="js-add-cart">加入购物车</a>
        </div>
        <div className="btn-buy">
          <a href="javascript:;" className="js-buy-it" onClick={props.open}>
            立即购买
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default goodsFooter;
