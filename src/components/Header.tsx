import React, { Component } from 'react'

interface headerProps {
  title: string
}

class Header extends Component<headerProps> {
  render (): React.ReactNode {
    return <header className="header">
      {this.props.title}
    </header>
  }
}

export default Header
