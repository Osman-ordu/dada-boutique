import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../Styles/categoryTitles.styles.scss'

const productTitles = ({getProduct}) => {
  return (
    <div className='product-titles'>
      <div className='container'>
        <ul>
          <li>
            <NavLink onClick={getProduct} to='men-section'>Men</NavLink>
          </li>
          <li>
            <NavLink onClick={getProduct} to='women-section'>Women</NavLink>
          </li>
          <li>
            <NavLink onClick={getProduct} to='jewelery'>Jewelery</NavLink>
          </li>
          <li>
            <NavLink onClick={getProduct} to='electronics'>Electronics</NavLink>
          </li>


        </ul>
      </div>
    </div>
  )
}

export default productTitles