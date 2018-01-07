import React from 'react'
import './Search.css'

const search = (props) => {
  return (
    <div className="custom-search js-search-bar">
      <form>
          <input type="search" className="custom-search-input" autoComplete="off" name="keyword" value="" placeholder="搜索更赞的商品"/>
          <span className="icon-custom-search"></span>
      </form>
    </div>
  )
}

export default search