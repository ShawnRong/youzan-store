import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./SearchList.css";

class searchList extends Component {
  constructor(props) {
    super(props);
    this.onClickHanlder = this.onClickHanlder.bind(this);
  }

  onClickHanlder() {
    this.props.history.push({
      pathname: "/goods",
      search: "?id=" + this.props.result.id
    });
  }

  render() {
    return (
      <li className="goods-item" onClick={this.onClickHanlder}>
        <div className="thumb">
          <img src={this.props.result.image} />
          {this.props.result.isOut ? <i className="sell-out" /> : null}
        </div>
        <div className="detail">
          <div className="title">{this.props.result.name}</div>
          <div className="meta relative">
            <span className="price">￥{this.props.result.price}</span>
            {this.props.result.isPostage ? (
              <span className="ship pull-right">包邮</span>
            ) : null}
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(searchList);
