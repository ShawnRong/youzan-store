import React from "react";
import { connect } from "react-redux";

import "./GoodsDesc.css";

const goodsDesc = props => {
  return (
    <div className="goods-header">
      <h2 className="title">{props.goodsDetail.title}</h2>
      <span className="hide js-add-wish js-wish-animate wish-add  font-size-12 tag tag-redf30 pull-right">
        喜欢
      </span>
      <div className="goods-price">
        <div className="current-price">
          <span>¥</span>
          <i className="js-goods-price price">
            {parseFloat(props.goodsDetail.price).toFixed(2)}
          </i>
        </div>
        <span className="btn btn-blue btn-retail hide retail-btn">
          门店有售
        </span>
        <div className="original-price">
          {parseFloat(props.goodsDetail.originalPrice).toFixed(2)}
        </div>
      </div>
      <hr className="with-margin-l" />
      <div className="stock-detail">
        <dl>
          <dt>运费:</dt>
          <dd className="postage-desc" data-postage="免运费">
            {props.goodsDetail.postage}
          </dd>
        </dl>
        <dl>
          <dt>剩余:</dt>
          <dd>{props.goodsDetail.remain}</dd>
        </dl>
        <dl>
          <dt>销量:</dt>
          <dd>{props.goodsDetail.sales}</dd>
        </dl>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    goodsDetail: state.goods.goodsDetail
  };
};

export default connect(mapStateToProps)(goodsDesc);
