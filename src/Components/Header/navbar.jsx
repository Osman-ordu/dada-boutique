import React from 'react'
import SearchBox from '../searchBox'
import  logo  from './../../assets/image/babypapa.png'


const navbar = ({getProduct,setSearch}) => {

    return (
        <div className='navbar'>
            <div className='container'>
                <img src={logo} alt="logo" className='logo-image' />
                <SearchBox getProduct={getProduct} setSearch={setSearch} />       
            </div>
        </div>
    )
}

export default navbar