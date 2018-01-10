import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchTopList, fetchSubList, fetchRankList} from '../../store/actions'
import SubList from './SubList/SubList'
import RankList from './RankList/RankList'
import './TopList.css'

class TopList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadRankList: true
    }
  }

  componentDidMount() {
    this.props.onLoadTopList()
    this.props.onLoadRankList()
  }

  onTopListClickHandler(event, id){
    //Add active class
    const children = event.target.parentNode.children
    for(let child of children){
      child.classList.remove('active')
    }
    event.target.classList.add('active')
    if (parseInt(id) === -1) {
      this.setState({
        loadRankList: true
      })
      this.props.onLoadRankList()
    }else {
      this.setState({
        loadRankList: false
      })
      this.props.onLoadSubList({id : id})
    }
  }

  render() {
    let itemLists = null
    if (this.state.loadRankList) {
      itemLists = <RankList rankLists={this.props.rankLists}/>
    } else {
      itemLists = <SubList subLists={this.props.subLists}/>
    }
    return (
    <Fragment>
      <div className="class-nav">
          <div id="scroll-nav" style={{height: "100%"}}>
              <ul className="nav" id="scroll-nav-content" style={{height: "540px", transform: "translate3d(0px, 0px, 0px)"}}>
                  {this.props.topLists.map(topList => {
                    if (topList.id === '-1') {
                      return (
                        <li className="category-name js-category-name active" data-cid={topList.id} key={topList.id} onClick={(event) => this.onTopListClickHandler(event, topList.id)}>{topList.name}</li>
                      )
                    } else {
                      return (
                        <li className="category-name js-category-name" data-cid={topList.id} key={topList.id} onClick={(event) => this.onTopListClickHandler(event, topList.id)}>{topList.name}</li>
                      )
                    }
                  }
                  )}
              </ul>
          </div>
      </div>
      {itemLists}
    </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    topLists: state.category.topList,
    subLists: state.category.subLists,
    rankLists: state.category.rankLists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopList: () => dispatch(fetchTopList()),
    onLoadSubList: (id) => dispatch(fetchSubList(id)),
    onLoadRankList: () => dispatch(fetchRankList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopList)