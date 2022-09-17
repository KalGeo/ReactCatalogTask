import React from 'react'
import ProductCardPopup from './ProductCardPopup'

interface productProps {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  thumbnail: string
  images: string[]
}

const ProductCard: React.FC<productProps> = (props) => {
  return (
    <div className={'product-card'}>
      <div className="product-card-image">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className={'product-card-body'}>
        <h3 className={'product-card-title'}>{props.title}</h3>
        <div className={'actions'}>
          <div className={'product-card-price'}>{props.price} лв.</div>
          <ProductCardPopup thumbnail={props.thumbnail} title={props.title}
                            description={props.description} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
