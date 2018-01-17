import React, { Fragment } from "react";

import SearchInput from "../../components/Search/SearchInput/SearchInput";
import TopList from "../../components/TopList/TopList";
import withBottomBar from "../../hoc/withBottomBar";

const category = props => (
  <Fragment>
    <SearchInput />
    <TopList />
  </Fragment>
);

export default withBottomBar(category);
