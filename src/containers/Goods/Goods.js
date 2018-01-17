import React from "react";
import { withRouter } from "react-router-dom";

import GoodsDetail from "../../components/GoodsDetail/GoodsDetail";

const goods = props => {
  if (props.location.search) {
    const id = props.location.search.match(/id=([^&#]*)/)[1];
    return <GoodsDetail id={id} />;
  } else {
    return null;
  }
};
export default withRouter(goods);
