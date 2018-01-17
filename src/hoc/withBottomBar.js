import React, { Component } from "react";
import BottomBar from "../components/BottomBar/BottomBar";

const withBottomBar = WrapComponent => {
  return class extends Component {
    render() {
      return (
        <div className="container">
          <WrapComponent />
          <BottomBar />
        </div>
      );
    }
  };
};

export default withBottomBar;
