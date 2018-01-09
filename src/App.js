import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './containers/Layout/Layout'
import BottomBar from './components/BottomBar/BottomBar'
import Youzan from './containers/Youzan/Youzan'
import Category from './containers/Category/Category'
import ShoppingCart from './containers/ShoppingCart/ShoppingCart'
import Search from './containers/Search/Search'
import User from './containers/User/User'

import './css/common.css'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Redirect from="/" to="/homepage" exact />
          <Route path="/homepage" component={Youzan}/>
          <Route path="/category" component={Category}/>
          <Route path="/shopping-cart" component={ShoppingCart}/>
          <Route path="/member" component={User}/>
          <Route path="/search" component={Search}/>
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default App