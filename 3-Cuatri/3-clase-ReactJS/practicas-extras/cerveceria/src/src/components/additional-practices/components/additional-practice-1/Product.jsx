import React from 'react';

function Product({ productName }) {
  return (
    <div>
        <p className='card'>{productName}</p>
    </div>
  )
}

export default Product;