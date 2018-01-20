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
import GoodsToBuy from "./GoodsToBuy/GoodsToBuy";

class GoodsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onGoodsToBuyOpen: false
    };
    this.onBuyClickHandler = this.onBuyClickHandler.bind(this);
    this.onBuyClickCloseHandler = this.onBuyClickCloseHandler.bind(this);
  }

  componentDidMount() {
    this.props.onLoadGoodsDetail({ id: this.props.id });
    this.props.onLoadDealList({ id: this.props.id });
  }

  onBuyClickHandler() {
    this.setState({
      onGoodsToBuyOpen: true
    });
  }

  onBuyClickCloseHandler() {
    this.setState({
      onGoodsToBuyOpen: false
    });
  }

  render() {
    return (
      <div>
        <GoodsSwiper />
        <GoodeDesc />
        <GoodsSelect clicked={this.onBuyClickHandler} />
        <GoodsToBuy
          open={this.state.onGoodsToBuyOpen}
          close={this.onBuyClickCloseHandler}
        />
        <GoodsStore />
        <GoodsTab />
        <GoodsFooter open={this.onBuyClickHandler} />
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
