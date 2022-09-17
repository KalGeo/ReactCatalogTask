import React from 'react'
import ProductCard from './ProductCard'
import { products } from './Data'

interface CatalogProps {
  productsCategory: string
  productsPerPage: number
  loadMore: () => void
}

const Catalog: React.FC<CatalogProps> = ({ productsCategory, loadMore, productsPerPage }) => {
  const preparedProducts = products.filter(product => product.category === productsCategory)

  return (
    <section className={'catalog-wrapper'}>
      <div className={'catalog'}>
        {preparedProducts.slice(0, productsPerPage).map((product, index) =>
          <ProductCard {...product} key={index} />)}
      </div>
      <button className={'more-button'} disabled={preparedProducts.length <= productsPerPage} onClick={loadMore}>Load
        more
      </button>
    </section>
  )
}

export default Catalog
