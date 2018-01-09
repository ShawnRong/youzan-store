import React from 'react'

import './SubList.css'

const subList = (props) => {
  return (
    <div className="class-category">
      <div id="scroll-main-content" className="main-content inner-content">
        <h3 className="category-title">热门品牌</h3>
        <ul className="category-content">
          {props.subLists.brandList ? props.subLists.brandList.map(brand => (
            <li className="category-item js-category-item">
              <img src={brand.image} alt={brand.name} className="category-img"/>
              <span className="category-item-name">{brand.name}</span>
            </li>
          )) : null}
        </ul>
        <h3 className="category-title">热门分类</h3>
        <ul className="category-content">
          {props.subLists.categoryList ? props.subLists.categoryList.map(category => (
            <li className="category-item js-category-item">
              <img src={category.image} alt={category.name} className="category-img"/>
              <span className="category-item-name">{category.name}</span>
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default (subList)