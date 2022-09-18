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
  return (
    <div className={'product-card'}>
      <div className="product-card-image">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className={'product-card-body'}>
        <h3 className={'product-card-title'}>{props.title}</h3>
        <div className={'actions'}>
          <div className={'product-card-price'}>{props.price} BGN</div>
          <ProductCardModal {...props} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
