import React, { useMemo } from 'react'
import ProductCard, { IProductProps } from './ProductCard'
import { products } from './Data'

interface CatalogProps {
  productsCategory: string
  productsPerPage: number
  loadMore: () => void
}

const Catalog: React.FC<CatalogProps> = ({ productsCategory, loadMore, productsPerPage }) => {
  const preparedProducts: IProductProps[] = useMemo(() => products.filter(product => product.category === productsCategory), [productsCategory])

  return (
    <section className={'catalog-wrapper'}>
      <div className={'catalog'}>
        {preparedProducts.slice(0, productsPerPage).map((product) =>
          <ProductCard {...product} key={product.id} />)}
      </div>
      <button className={'more-button'} disabled={preparedProducts.length <= productsPerPage} onClick={loadMore}>Load
        more
      </button>
    </section>
  )
}

export default Catalog
