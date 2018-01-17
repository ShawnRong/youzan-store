import React from "react";
import { Carousel } from "antd";
import { connect } from "react-redux";

const goodsSwiper = props => {
  return (
    <Carousel autoplay>
      {props.goodsDetail.imgs
        ? props.goodsDetail.imgs.map((img, idx) => (
            <div key={idx}>
              <img src={img} />
            </div>
          ))
        : null}
    </Carousel>
  );
};

const mapStateToProps = state => {
  return {
    goodsDetail: state.goods.goodsDetail
  };
};

export default connect(mapStateToProps)(goodsSwiper);
