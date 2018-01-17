import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SearchList from "./SearchList/SearchList";
import SearchInput from "./SearchInput/SearchInput";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="search-wrap">
        <SearchInput />
        <div className="searchLists">
          <ul className="list">
            {this.props.searchResult
              ? this.props.searchResult.map(item => (
                  <SearchList result={item} key={item.id} />
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  return {
    searchResult: state.search.searchResult
  };
};

export default withRouter(connect(mapStateToProps)(Search));
