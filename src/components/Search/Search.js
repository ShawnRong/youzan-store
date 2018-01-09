import React, { Component } from 'react'
import './Search.css'

class Search extends Component{
  constructor(props){
    super(props)
    this.onSearchClickHandler = this.onSearchClickHandler.bind(this)
  }

  onSearchClickHandler(){
    console.log('search')
  }

  render(){
    return (
      <div className="custom-search js-search-bar">
        <form>
            <input type="search" onClick={this.onSearchClickHandler} className="custom-search-input" autoComplete="off" name="keyword" value="" placeholder="搜索更赞的商品"/>
            <span className="icon-custom-search"></span>
        </form>
      </div>
    )
  }
}

export default Search