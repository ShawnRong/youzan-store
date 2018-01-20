import React from "react";

import "./GoodsToBuy.css";
import Backdrop from "./Backdrop/Backdrop";

const goodsToBuy = props => {
  let attachedClasses = "sku-layout sku-box-shadow popup close";
  if (props.open) {
    attachedClasses = "sku-layout sku-box-shadow popup open";
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.close} />
      <div id="goods-sku" className={attachedClasses}>
        <div className="sku-layout-title name-card sku-name-card">
          <div className="thumb">
            <img
              className="js-goods-thumb goods-thumb"
              src="https://img.yzcdn.cn/upload_files/2017/07/12/FkSvYz8FLLD9-t0smXO43hF6ov7S.jpg?imageView2/2/w/100/h/100/q/75/format/webp?imageView2/2/w/100/h/100/q/75/format/webp"
              alt=""
            />
          </div>
          <div className="detail goods-base-info clearfix">
            <p className="title c-black ellipsis">
              寻找田野|最正宗的上海南汇8424 得奖最多奥运会指定西瓜1只/箱 9-11斤
            </p>
            <div className="goods-price clearfix">
              <div className="current-price pull-left c-black">
                <span className="price-name pull-left font-size-14 c-orange">
                  ¥
                </span>
                <i className="js-goods-price price font-size-16 vertical-middle c-orange">
                  98.00
                </i>
              </div>
              <div className="original-price vertical-middle font-size-14 line-through">
                108
              </div>
            </div>
          </div>
          <div className="js-cancel sku-cancel">
            <div className="cancel-img" onClick={props.close} />
          </div>
        </div>
        <div
          className="sku-detail adv-opts hotel-checkin-select"
          style={{ border: "none", margin: "0", display: "none" }}
        >
          <div className="sku-detail-inner adv-opts-inner-addons">
            <dl className="sku-group select-sku js-select-checkin-date">
              <dt>时间：</dt>
              <dd className="js-checkin-date-value">选择入住时间</dd>
            </dl>
          </div>
        </div>
        <div className="adv-opts layout-content" style={{ maxHeight: "554px" }}>
          <div className="goods-models js-sku-views block block-list border-top-0">
            <dl className="clearfix block-item">
              <dt className="sku-num pull-left">
                <label>购买数量：</label>
              </dt>
              <dd className="sku-quantity-contaienr">
                <dl className="clearfix">
                  <div className="quantity">
                    <button className="minus " type="button" />
                    <input type="text" className="txt" />
                    <button className="plus" type="button" />
                    <div className="response-area response-area-minus" />
                    <div className="response-area response-area-plus" />
                  </div>
                </dl>
              </dd>
              <dt className="other-info">
                <div className="stock">剩余450件</div>
              </dt>
            </dl>
          </div>
          <div className="confirm-action content-foot clearfix">
            <div className="big-btn-2-1">
              <a
                href="javascript:;"
                className="js-mutiBtn-confirm cart big-btn orange-btn vice-btn"
              >
                加入购物车
              </a>
              <a
                href="javascript:;"
                className="js-mutiBtn-confirm confirm big-btn red-btn main-btn"
              >
                立即购买
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default goodsToBuy;
