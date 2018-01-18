import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGoodsDetail, fetchDealList } from "../../store/actions";

import GoodsSwiper from "./GoodsSwiper/GoodsSwiper";
import GoodeDesc from "./GoodsDesc/GoodsDesc";
import GoodsSelect from "./GoodsSelect/GoodsSelect";
import GoodsStore from "./GoodsStore/GoodsStore";
import GoodsTab from "./GoodsTab/GoodsTab";
import GoodsFooter from "./GoodsFooter/GoodsFooter";
import GoodsRecommend from "./GoodsRecommend/GoodsRecommend";

class GoodsDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadGoodsDetail({ id: this.props.id });
    this.props.onLoadDealList({ id: this.props.id });
  }

  render() {
    return (
      <div>
        <GoodsSwiper />
        <GoodeDesc />
        <GoodsSelect />
        <GoodsStore />
        <GoodsTab />
        <GoodsFooter />
        <GoodsRecommend />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    goodsDetail: state.goods.goodsDetail,
    dealList: state.goods.dealList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadGoodsDetail: id => dispatch(fetchGoodsDetail(id)),
    onLoadDealList: id => dispatch(fetchDealList(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsDetail);
