import React from "react";

import "./User.css";

const user = props => (
  <div className="container " style={{ minHeight: "581px" }}>
    <div className="content">
      <div className="user-infos">
        <div className="pull-left avatar">
          <div
            className="img"
            style={{
              backgroundImage:
                "url(https://img.yzcdn.cn/upload_files/no_pic.png?imageView2/2/w/280/h/280/q/75/format/webp)"
            }}
          />
        </div>
        <div className="pull-left desc">
          <p>ShawnRong</p>
        </div>
      </div>
      <div className="order-related">
        <ul className="uc-order list-horizon clearfix js-order-overview">
          <li>
            <a
              className="link clearfix relative link-topay"
              data-for="topay"
              href="https://h5.youzan.com/v2/trade/record/alllist?type=topay"
              target="_blank"
            >
              <p className="title-info c-black font-size-12">待付款</p>
            </a>
          </li>
          <li>
            <a
              className="link clearfix relative link-totuan"
              data-for="totuan"
              href="https://h5.youzan.com/v2/trade/record/alllist?type=totuan"
              target="_blank"
            >
              <p className="title-info c-black font-size-12">待接单</p>
            </a>
          </li>
          <li>
            <a
              className="link clearfix relative link-tosend"
              data-for="tosend"
              href="https://h5.youzan.com/v2/trade/record/alllist?type=tosend"
              target="_blank"
            >
              <p className="title-info c-black font-size-12">待发货</p>
            </a>
          </li>
          <li>
            <a
              className="link clearfix relative link-send"
              data-for="send"
              href="https://h5.youzan.com/v2/trade/record/alllist?type=send"
              target="_blank"
            >
              <p className="title-info c-black font-size-12">待收货</p>
            </a>
          </li>
          <li>
            <a
              className="link clearfix relative link-rights"
              href="https://h5.youzan.com/v2/trade/record/rightsOrder"
              target="_blank"
            >
              <p className="title-info c-black font-size-12">退款/维权</p>
            </a>
          </li>
        </ul>
        <div className="block block-list list-vertical">
          <a
            className="block-item link clearfix ico-order"
            href="https://h5.youzan.com/v2/trade/record/alllist?type=all"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">全部订单</p>
          </a>
        </div>
        <div className="block block-list list-vertical">
          <a
            className="block-item link clearfix ico-favior js-login"
            href="https://maijia.youzan.com/mars/collect/goods"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">收藏的商品</p>
          </a>
          <a
            className="block-item link clearfix ico-shop js-login"
            href="https://maijia.youzan.com/mars/collect/shop"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">收藏的店铺</p>
          </a>
          <a
            className="block-item link clearfix ico-bought js-login"
            href="https://maijia.youzan.com/mars/record/bought"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">我买过的</p>
          </a>
          <a
            className="block-item link clearfix ico-history js-login"
            href="https://maijia.youzan.com/mars/record/goodsbrowse"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">我的浏览记录</p>
          </a>
        </div>
        <div className="block block-list list-vertical">
          <a
            className="block-item link clearfix ico-card"
            href="https://maijia.youzan.com/mars/record/MemberCard"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">我的会员卡</p>
          </a>
          <a
            className="block-item link clearfix ico-coupon"
            href="https://h5.youzan.com/v2/ump/promocard/crosssite?empty_redirect=yzapp"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">我的优惠券</p>
          </a>
          <a
            className="block-item link clearfix ico-luckymoney hide"
            href="https://h5.youzan.com/v2/trade/record/luckymoney?f_platform=yzapp"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">我的红包</p>
          </a>
          <a
            className="block-item link clearfix ico-backs"
            href="https://h5.youzan.com/v2/trade/record/backs?f_platform=yzapp"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">我的返现</p>
          </a>
        </div>
        <div className="block block-list list-vertical">
          <a className="block-item link clearfix ico-setting js-login">
            <p className="title-info c-black font-size-14">收货地址管理</p>
          </a>
          <a
            className="block-item link clearfix ico-help"
            href="http://bbs.youzan.com/home.php?mod=space&amp;do=thread&amp;view=me&amp;order=lastpost&amp;mobile=2&amp;fid=85&amp;filter=common&amp;in_app_type=weixin"
            target="_blank"
          >
            <p className="title-info c-black font-size-14">联系有赞客服</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default user;
