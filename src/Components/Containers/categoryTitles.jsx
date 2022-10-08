import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../Styles/categoryTitles.styles.scss'

const productTitles = ({getProduct}) => {
  return (
    <div className='product-titles'>
      <div className='container'>
        <ul>
          <li>
            <NavLink onClick={getProduct} to='men-section'>Erkek</NavLink>
          </li>
          <li>
            <NavLink onClick={getProduct} to='women-section'>Kadın</NavLink>
          </li>
          <li>
            <NavLink onClick={getProduct} to='jewelery'>Aksesuar</NavLink>
          </li>
          <li>
            <NavLink onClick={getProduct} to='electronics'>Elektronik</NavLink>
          </li>


        </ul>
      </div>
    </div>
  )
}

export default productTitles