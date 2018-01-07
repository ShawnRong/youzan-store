import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { fetchTopList, fetchSubList } from '../../store/actions'
import SubList from './SubList/SubList'
import './TopList.css'

class TopList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onLoadTopList()
    this.props.onLoadSubList({id : '1'})
  }

  onTopListClickHandler(event, id){
    //Add active class
    const children = event.target.parentNode.children
    for(let child of children){
      child.classList.remove('active')
    }
    event.target.classList.add('active')
    this.props.onLoadSubList({id : id})
  }

  render() {
    return (
    <Fragment>
      <div className="class-nav">
          <div id="scroll-nav" style={{height: "100%"}}>
              <ul className="nav" id="scroll-nav-content" style={{height: "540px", transform: "translate3d(0px, 0px, 0px)"}}>
                  {this.props.topLists.map(topList => (
                    <li className="category-name js-category-name" data-cid={topList.id} key={topList.id} onClick={(event) => this.onTopListClickHandler(event, topList.id)}>{topList.name}</li>
                  ))}
              </ul>
          </div>
      </div>
      <SubList subLists={this.props.subLists}/>
    </Fragment>


    )
  }
}

const mapStateToProps = state => {
  return {
    topLists: state.category.topList,
    subLists: state.category.subLists
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadTopList: () => dispatch(fetchTopList()),
    onLoadSubList: (id) => dispatch(fetchSubList(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopList)