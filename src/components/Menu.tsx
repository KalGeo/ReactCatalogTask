import React, { Component } from 'react'

interface menuProps {
  title?: string
  url?: string
}

const menuItems: menuProps[] = [
  {
    title: 'Software',
    url: '/software'
  },
  {
    title: 'Mobile Devices',
    url: '/mobile-devices'
  },
  {
    title: 'Fashion',
    url: '/fashion'
  }
]

class Menu extends Component<menuProps> {
  render (): React.ReactNode {
    return <aside className={'menu'}>
      <ul className={'menu-list'}>
        {menuItems.map((item, index) =>
          <li key={index} className={'menu-list-item'}>
            <a href={item.url} className={'menu-list-item-link'}>{item.title}</a>
          </li>
        )}
      </ul>
    </aside>
  }
}

export default Menu
