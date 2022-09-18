import React from 'react'
import ProductCardModal from './ProductCardModal'

export interface IProductAttributeProps {
  [id: string]: string
}

export interface IProductProps {
  id: number
  title: string
  description: string
  price: number
  brand: string
  thumbnail: string
  images: string[]
  category: string
  attributes: IProductAttributeProps
}

const ProductCard: React.FC<IProductProps> = (props: IProductProps) => {
  const [productModalOpen, setProductModalOpen] = React.useState(false)

  const handleModalClose = (): void => {
    setProductModalOpen(false)
  }

  return (
    <>
      <div className={'product-card'} onClick={() => setProductModalOpen(true)}>
        <div className="product-card-image">
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className={'product-card-body'}>
          <h3 className={'product-card-title'}>{props.title}</h3>
          <div className={'actions'}>
            <div className={'product-card-price'}>{props.price} BGN</div>
          </div>
        </div>
      </div>
      {productModalOpen && <ProductCardModal handleModalClose={handleModalClose} {...props} />}
    </>
  )
}

export default ProductCard
