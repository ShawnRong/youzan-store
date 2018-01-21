import React from "react";

import Cart from "../../components/Cart/Cart";
import withBottomBar from "../../hoc/withBottomBar";
import "./ShoppingCart.css";

const shoppingCart = () => (
  <div className="container " style={{ minHeight: "581px" }}>
    <div className="content clearfix js-page-content">
      <div id="cart-container">
        <div className="js-invalid-goods shop-list">
          <p className="block invalid-list-title">以下商品无法一起购买</p>
          <div className="block block-list-cart block-order border-top-0">
            <ul className="block border-0 invalid-list js-invalid-list">
              <li className="block-item block-item-cart error">
                <div index="0">
                  <div className="check-container hide">
                    <span className="check" />
                  </div>
                  <div className="name-card clearfix">
                    <a
                      href="https://h5.youzan.com/v2/showcase/goods?alias=36co1k2m80lmu"
                      className="thumb js-goods-link"
                    >
                      <img
                        data-src="https://img.yzcdn.cn/upload_files/2017/06/29/FstNOp77JZHQjZIDFd5LlZYE3j_j.jpg!200x200.jpg"
                        className="js-lazy"
                        src="https://img.yzcdn.cn/upload_files/2017/06/29/FstNOp77JZHQjZIDFd5LlZYE3j_j.jpg?imageView2/2/w/200/h/200/q/75/format/webp"
                      />
                    </a>
                    <div className="detail">
                      <a
                        href="https://h5.youzan.com/v2/showcase/goods?alias=36co1k2m80lmu"
                        className="js-goods-link"
                      >
                        <h3 className="title js-ellipsis">
                          <i>
                            国际安徒生奖大奖书系（文学作品系列第二辑 共8册）
                            国际安徒生奖获奖书系
                            是经过IBBY各国分会和丛书主编、著名儿童文学理论家方卫平教授层层筛选产生的经典佳作
                          </i>
                        </h3>
                      </a>
                      <p className="sku ellipsis">下周二发货</p>
                      <div className="num">
                        ×<span className="num-txt">1</span>
                      </div>
                    </div>
                    <div className="error-box">商品已售罄</div>
                  </div>
                  <div className="delete-btn">
                    <span>删除</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="center clear-block">
              <button className="btn clear-btn js-clear">清空失效商品</button>
            </div>
          </div>
        </div>
        <div style={{ padding: "0" }} className="js-bottom-opts bottom-fix">
          <div className="go-shop-tip js-go-shop-tip c-orange font-size-12">
            你需要分开结算每个店铺的商品哦~
          </div>
          <div className="bottom-cart clear-fix">
            <div className="select-all">
              <span className="check" />
              <span className="check" />
              全选
            </div>
            <div className="total-price" v-show="!editingShop">
              合计：¥<span
                className="js-total-price"
                style={{ color: "rgb(255, 102, 0)" }}
              >
                aa
              </span>
              <p className="c-gray-dark">不含运费</p>
            </div>
            <button
              href="javascript:;"
              className="js-go-pay btn btn-orange-dark font-size-14"
            >
              结算 (3)
            </button>
            <button
              href="javascript:;"
              className="j-delete-goods btn font-size-14 btn-red"
            >
              删除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withBottomBar(shoppingCart);
