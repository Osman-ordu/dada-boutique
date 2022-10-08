import React from 'react'
import {CgDollar} from 'react-icons/cg'


const card = ({ image, title, price }) => {

  return (
    <>
      <div className='card'>
        <img className='card-img' src={image} alt="" />
        <h5 className='card-title'>{title}</h5>
        <div className='card-content'>
          <p className='card-price'>{price.toFixed(0)}<CgDollar size={18} style={{color:'green'}}/></p>
          <a href='/'>Sepete ekle
          </a>
        </div>
      </div>
    </>
  )
}

export default card