import React from 'react'

interface headerProps {
  title: string
}

const Header: React.FC<headerProps> = ({ title }) => {
  return (
    <header className="header">
      {title}
    </header>
  )
}

export default Header
