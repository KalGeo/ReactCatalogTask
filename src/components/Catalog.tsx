import React, { Component } from 'react'
import ProductCard from './ProductCard'

class Catalog extends Component {
  render (): React.ReactNode {
    return <section className={'catalog'}>
      <ProductCard />
    </section>
  }
}

export default Catalog
