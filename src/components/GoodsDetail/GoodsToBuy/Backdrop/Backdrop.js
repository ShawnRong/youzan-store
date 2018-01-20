import React from "react";
import "./Backdrop.css";

const backdrop = props => {
  return props.show ? <div id="backdrop" onClick={props.clicked} /> : null;
};

export default backdrop;
