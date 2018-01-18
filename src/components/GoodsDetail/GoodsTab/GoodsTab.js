import React, { Component } from "react";
import { connect } from "react-redux";

import "./GoodsTab.css";

class GoodsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  tabClickHandler(event, idx) {
    event.preventDefault();
    this.setState({
      activeIndex: idx
    });
  }

  render() {
    let tabContent = null;
    if (this.state.activeIndex == 0) {
      tabContent = (
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.goodsDetail.description
          }}
        />
      );
    } else {
      tabContent = (
        <div className="js-traderecord-list block-list-traderecord">
          <div className="list-header">
            <span className="col-1">买家</span>
            <span className="col-2 center">成交时间</span>
            <span className="col-3 center">数量</span>
          </div>
          <div className="js-list b-list block block-list">
            {this.props.dealList.map((list, idx) => (
              <div className="block-item" key={idx}>
                <span className="col-1 c-gray-darker">{list.buyer}</span>
                <span className="col-2 c-gray-dark center">
                  {list.time.substr(0, 10)}
                </span>
                <span className="col-3 c-gray-darker center">{list.num}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="js-detail-container" style={{ marginTop: "10px" }}>
        <div className="js-tabber-container goods-detail">
          <div className="js-tabber tabber tabber-n2 clearfix orange">
            <button
              onClick={e => this.tabClickHandler(e, 0)}
              className={this.state.activeIndex === 0 ? "active" : null}
            >
              商品详情
            </button>
            <button
              onClick={e => this.tabClickHandler(e, 1)}
              className={this.state.activeIndex === 1 ? "active" : null}
            >
              本店成交
            </button>
          </div>
        </div>
        {tabContent}
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

export default connect(mapStateToProps)(GoodsTab);
