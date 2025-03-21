import React from 'react'
import Product from './Product'

function AllProducts({products}) {
  return (
    <div>
      <div className="beers">
        {
            products.map((productName) => {
                return <Product productName={productName} />
            })
        }
      </div>
    </div>
  )
}

export default AllProducts