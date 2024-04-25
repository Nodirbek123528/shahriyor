import React from 'react'

function HomeOutdoorProduct({list}) {
 
  return (
    <div className="homeOutdoor-products">
      {
        list.map(item => (
          <div className="homeOutdoor-product" key={item.id}>
            <h4 className='homeOutdoor-product__title'>{item.name}</h4>
            <p className='homeOutdoor-product__price'>{item.price.toLocaleString()} UZS</p>
            <div className="homeOutdoor-product__image">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default HomeOutdoorProduct