import React from "react";
import "./SearchList.css";

const searchList = props => {
  return (
    <li className="goods-item">
      <a href="goods.html?id=18010">
        <div className="thumb">
          <img src={props.result.image} />
          {props.result.isOut ? <i className="sell-out" /> : null}
        </div>
        <div className="detail">
          <div className="title">{props.result.name}</div>
          <div className="meta relative">
            <span className="price">￥{props.result.price}</span>
            {props.result.isPostage ? (
              <span className="ship pull-right">包邮</span>
            ) : null}
          </div>
        </div>
      </a>
    </li>
  );
};

export default searchList;
