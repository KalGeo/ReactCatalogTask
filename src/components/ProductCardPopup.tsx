import React from 'react'
import Popup from 'reactjs-popup'

interface ProductCardModalProps {
  thumbnail: string
  title: string
  description: string
}

const ProductCardPopup: React.FC<ProductCardModalProps> = (props) => {
  return (
    <Popup trigger={<button className="button"> View More </button>} modal>
      <div className={'product-popup'}>
        <div className={'product-popup-image'}>
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className={'product-popup-body'}>
          <h3 className={'product-popup-body-title'}>{props.title}</h3>
          <p className={'product-popup-body-description'}>{props.description}</p>
        </div>
      </div>
    </Popup>
  )
}

export default ProductCardPopup
