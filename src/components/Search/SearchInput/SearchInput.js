import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSearchResult } from "../../../store/actions";

import "./SearchInput.css";

class searchInput extends Component {
  constructor(props) {
    super(props);
    this.onSearchClickHandler = this.onSearchClickHandler.bind(this);
    this.onSearchEnterHandler = this.onSearchEnterHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.state = {
      keyword: ""
    };
  }

  componentDidMount() {
    if (this.props.location.search) {
      const keyword = this.props.location.search.match(/keyword=([^&#]*)/)[1];
      this.setState({
        keyword: keyword
      });
      this.props.onLoadSearchResult({ keyword: keyword });
    }
  }

  onSearchClickHandler() {
    if (this.props.location.pathname !== "/search") {
      this.props.history.push("/search");
    }
  }

  onChangeHandler(event) {
    this.setState({
      keyword: event.target.value
    });
  }

  onSearchEnterHandler(event) {
    event.preventDefault();
    //call search api
    this.props.onLoadSearchResult({ keyword: this.state.keyword });
  }
  render() {
    return (
      <div className="custom-search js-search-bar">
        <form onSubmit={this.onSearchEnterHandler}>
          <input
            type="search"
            onClick={this.onSearchClickHandler}
            onChange={this.onChangeHandler}
            className="custom-search-input"
            autoComplete="off"
            placeholder="搜索更赞的商品"
            value={this.state.keyword}
          />
          <span className="icon-custom-search" />
        </form>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onLoadSearchResult: keyword => dispatch(fetchSearchResult(keyword))
  };
};

export default connect(null, mapDispatchToProps)(withRouter(searchInput));
