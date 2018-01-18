import React from "react";

import "./GoodsSelect.css";

const goodsSelect = () => (
  <div className="sku-detail adv-opts">
    <div className="sku-detail-inner adv-opts-inner">
      <dl className="sku-group select-sku js-select-sku">
        <dt>
          <span className="js-sku-label">选择</span>：
        </dt>
        <dd className="js-sku-value">
          <span className="sku-item">净含量</span>
        </dd>
      </dl>
    </div>
  </div>
);

export default goodsSelect;
