import React from 'react'
import Popup from 'reactjs-popup'
import { IProductProps } from './ProductCard'

interface productCardPopupProps extends IProductProps {
  handleModalClose: () => void
}

const ProductCardPopup: React.FC<productCardPopupProps> = (props: productCardPopupProps) => {
  return (
    <Popup defaultOpen modal onClose={() => props.handleModalClose()}>
      <div className={'product-modal'}>
        <div className={'product-modal-image'}>
          <img src={props.images[0]} alt={props.title} />
        </div>
        <div className={'product-modal-body'}>
          <h3 className={'product-modal-body-title'}>{props.title}</h3>
          <p className={'product-modal-body-description'}>{props.description}</p>
          {(Object.keys(props.attributes).length > 0) && (
            <table className={'product-modal-attributes-table'}>
              <tbody>
              <tr>
                <td>Price</td>
                <td>{props.price} BGN</td>
              </tr>
              {Object.keys(props.attributes).map((key, index) => (
                <tr key={index}>
                  <td>
                    <span>{key}</span>
                  </td>
                  <td>
                    <span>{props.attributes[key]}</span>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Popup>
  )
}

export default ProductCardPopup
