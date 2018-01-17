import React from "react";
import { connect } from "react-redux";

import "./GoodsStore.css";

const goodsStore = props => (
  <div className="store-info">
    <div className="block block-list goods-store">
      <div className="custom-store block-item ">
        <a
          className="custom-store-link clearfix"
          href="https://h5.youzan.com/v2/home/cz0mk59k"
        >
          <div className="custom-store-img" />
          <div className="custom-store-name">{props.goodsDetail.storeName}</div>
          <span className="custom-store-enter">进入店铺</span>
        </a>
      </div>
      <a className="offline-store block-item retail-store hide">
        <span className="offline-store-img" />
        <span className="offline-store-name">线下门店</span>
        <div className="offline-store-branch retail-store-name" />
      </a>
      <div className="renzheng block-item">
        <span className="js-rz-item-alert rz-item">
          <span className="rz-name font-size-12 c-gray-darker">企业认证</span>
        </span>
        <span className="js-rz-item-alert rz-item">
          <span className="rz-name font-size-12 c-gray-darker">担保交易</span>
        </span>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    goodsDetail: state.goods.goodsDetail
  };
};

export default connect(mapStateToProps)(goodsStore);
