import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchAddressList } from "../../store/actions";
import "./Address.css";

class address extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadAddressList();
  }

  render() {
    return (
      <div
        className="container"
        style={{ minHeight: "597px", overflow: "hidden" }}
      >
        <div className="block-list address-list section section-first js-no-webview-block">
          {this.props.addressList
            ? this.props.addressList.map(address => {
                let attachedClass = "block-item js-address-item address-item";
                address.isDefault == "true"
                  ? (attachedClass = attachedClass + " address-item-default")
                  : null;
                return (
                  <div className={attachedClass} key={address.id}>
                    <div className="address-title">
                      {address.name} {address.tel}
                    </div>
                    <p>
                      {address.provinceName}
                      {address.cityName}
                      {address.districtName}
                      {address.address}
                    </p>
                    <a className="address-edit">修改</a>
                  </div>
                );
              })
            : null}
        </div>
        <div className="block stick-bottom-row center">
          <Link
            className="btn btn-blue js-no-webview-block js-add-address-btn"
            to="/address/add"
          >
            新增地址
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addressList: state.address.addressList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadAddressList: () => dispatch(fetchAddressList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(address);
