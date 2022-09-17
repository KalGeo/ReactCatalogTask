import React from 'react'

interface IMenuItemProps {
  title: string
  id: string
}

interface menuProps {
  productsCategory: string
  setProductsCategory: (category: string) => void
}

const menuItems: IMenuItemProps[] = [
  {
    title: 'Mobile Devices',
    id: 'smartphones'
  },
  {
    title: 'Software',
    id: 'software'
  },
  {
    title: 'Fashion',
    id: 'fashion'
  }
]

const Menu: React.FC<menuProps> = ({ setProductsCategory, productsCategory }) => {
  return (
    <nav className={'menu'}>
      <ul className={'menu-list'}>
        {menuItems.map((item, index) =>
          <li key={index} className={`menu-list-item ${productsCategory === item.id ? ' active' : ''}`}
              onClick={() => setProductsCategory(item.id)}>
            <span className={'menu-list-item-text'}>{item.title}</span>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Menu
