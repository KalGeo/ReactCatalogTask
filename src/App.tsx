import React, { Fragment, useCallback, useState } from 'react'
import './App.scss'
import Catalog from './components/Catalog'
import Menu from './components/Menu'
import Header from './components/Header'
import { products } from './components/Data'

const DEFAULT_CATEGORY = 'smartphones'
const DEFAULT_PRODUCTS_PER_PAGE = 4

function App (): React.ReactElement {
  const [productsCategory, setProductsCategory] = useState<string>(DEFAULT_CATEGORY)
  const [productsPerPage, setProductsPerPage] = useState(DEFAULT_PRODUCTS_PER_PAGE)

  const handleChangeCategory = useCallback((category: string) => {
    setProductsCategory(category)
    setProductsPerPage(DEFAULT_PRODUCTS_PER_PAGE)
  }, [setProductsCategory, setProductsPerPage])

  const loadMore = (): void => {
    if (products.length >= productsPerPage) {
      setProductsPerPage(productsPerPage + DEFAULT_PRODUCTS_PER_PAGE)
    }
  }

  return (
    <Fragment>
      <div className="wrapper">
        <Header title={'Simple React Catalog'} />
        <main className="main">
          <Menu setProductsCategory={handleChangeCategory} productsCategory={productsCategory} />
          <Catalog productsCategory={productsCategory} loadMore={loadMore} productsPerPage={productsPerPage} />
        </main>
      </div>
    </Fragment>
  )
}

export default App
