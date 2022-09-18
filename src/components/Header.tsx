import React from 'react'

interface headerProps {
  title: string
}

const Header: React.FC<headerProps> = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  )
}

export default Header
