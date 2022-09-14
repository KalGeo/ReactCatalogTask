import React, { Fragment } from 'react'
import './App.scss'
import Catalog from './components/Catalog'
import Menu from './components/Menu'
import Header from './components/Header'

interface props {
  message?: string
}

function App (props: props): React.ReactElement {
  return (
    <Fragment>
      <div className="catalog-wrapper">
        <Header title={'asd'} />
        <main className="main">
          <Menu />
          <Catalog />
        </main>
      </div>
    </Fragment>
  )
}

export default App
