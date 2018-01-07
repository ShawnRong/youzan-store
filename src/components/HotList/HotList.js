import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import GoodItem from './GoodItem/GoodItem'
import url from '../../utility/utility'
import axios from 'axios'
import './HotList.css'

class HotList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hotLists: [],
      pageNum: 1,
      pageSize: 6,
      loading: false,
      hasMore: true
    }

    this.onInfiniteLoadHandler = this.onInfiniteLoadHandler.bind(this)
  }

  componentWillMount(){
    axios.post(url.hotLists, {
      pageNum: this.state.pageNum,
      pageSize: this.state.pageSize
    })
    .then(response => {
      this.setState({
        hotLists: response.data.lists
      })
    })
  }

  onInfiniteLoadHandler(page){
    let lists = this.state.hotLists
    this.setState({
      loading: true
    })

    // get all lists escape
    if(lists.length > this.state.pageSize) {
      this.setState({
        loading: false,
        hasMore: false,
      })
      return
    }

    axios.post(url.hotLists, {
      pageNum: this.state.pageNum,
      pageSize: this.state.pageSize
    })
    .then(response => {
      lists = lists.concat(response.data.lists)
      this.setState({
        hotLists: lists,
        loading: false
      })
    })

  }

  render() {
    return (
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={this.onInfiniteLoadHandler}
        hasMore={!this.state.loading && this.state.hasMore}
        useWindow={true}
      >
       <div className="hot-goods js-waterfull-wrap">
        <ul className="js-list js-lazy">
          {this.state.hotLists.map((list, idx) =>(
            <li key={idx}>
              <GoodItem imgSrc={list.img} title={list.name} price={list.price}/>
            </li>
          ))}
        </ul>
       </div>
      </InfiniteScroll>
    )
  }
}

export default HotList