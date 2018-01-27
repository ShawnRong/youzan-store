import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./SubList.css";

class SubList extends Component {
  constructor(props) {
    super(props);
  }

  onClickLinkHandler(keyword) {
    this.props.history.push({
      pathname: "/search",
      search: "?keyword=" + keyword
    });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="class-category">
        <div id="scroll-main-content" className="main-content inner-content">
          <h3 className="category-title">热门品牌</h3>
          <ul className="category-content">
            {this.props.subLists.brandList
              ? this.props.subLists.brandList.map(brand => (
                  <li
                    className="category-item js-category-item"
                    key={brand.id}
                    onClick={() => this.onClickLinkHandler(brand.name)}
                  >
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="category-img"
                    />
                    <span className="category-item-name">{brand.name}</span>
                  </li>
                ))
              : null}
          </ul>
          <h3 className="category-title">热门分类</h3>
          <ul className="category-content">
            {this.props.subLists.categoryList
              ? this.props.subLists.categoryList.map(category => (
                  <li
                    className="category-item js-category-item"
                    key={category.id}
                    onClick={() => this.onClickLinkHandler(category.name)}
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="category-img"
                    />
                    <span className="category-item-name">{category.name}</span>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SubList);
