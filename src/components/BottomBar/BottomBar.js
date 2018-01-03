import React, { Component } from 'react'

import BottomBarButton from './BottomBarButton/BottomBarButton'
import './BottomBar.css'

class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      barButtons: [
        {
          link: '/homepage',
          iconName: 'icon-home',
          name: '有赞'
        },
        {
          link: '/category',
          iconName: 'icon-category',
          name: '分类'
        },
        {
          link: '/shopping-cart',
          iconName: 'icon-cart',
          name: '购物车'
        },
        {
          link: '/member',
          iconName: 'icon-user',
          name: '我'
        }
      ]
    }
  }

  render() {
    return (
      <div className="bottom-nav">
        <ul>
          {this.state.barButtons.map(barButton => (
            <li key={barButton.iconName}>
              <BottomBarButton link={barButton.link} iconName={barButton.iconName} name={barButton.name}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BottomBar