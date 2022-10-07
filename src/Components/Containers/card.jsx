import React from 'react'


const card = ({ image, title, price }) => {

  return (
    <>
      <div className='card'>
        <img className='card-img' src={image} alt="" />
        <h5 className='card-title'>{title}</h5>
        <div className='card-footer'>
          <p className='card-price'>{price}$</p>
          <a href='/'>Sepete ekle
          </a>
        </div>
      </div>
    </>
  )
}

export default card