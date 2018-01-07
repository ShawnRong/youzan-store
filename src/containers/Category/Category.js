import React, { Fragment } from 'react'

import Search from '../../components/Search/Search'
import TopList from '../../components/TopList/TopList'

const category = (props) => (
  <Fragment>
    <Search />
    <TopList />
  </Fragment>
)

export default category