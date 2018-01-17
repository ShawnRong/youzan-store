import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomBarButton.css";

const bottomBarButton = props => (
  <NavLink to={props.link}>
    <i className={props.iconName} />
    <div>{props.name}</div>
  </NavLink>
);

export default bottomBarButton;
