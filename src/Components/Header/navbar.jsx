import React from 'react'
import { InputGroup, Input, Button,Navbar } from 'reactstrap'
import { FiSearch } from 'react-icons/fi'
import  logo  from './../../assets/image/babypapa.png'


const navbar = ({getProduct}) => {

    return (
        <div className='navbar'>
            <div className='container'>
                <img src={logo} alt="babypapa" style={{width:'200px'}} />
                <InputGroup className='input-group'>
                    <Input type="search" placeholder='Aramak istediğin ürünü yaz, Kolayca bul!' />
                    <Button onClick={getProduct} >
                        <FiSearch size={20} />
                    </Button>
                </InputGroup>
                <div className='button-group'>
                    <button className='login-sign-up'>Giriş Yap/Üye Ol</button>
                    <button className='basket'>Sepetim</button>
                </div>
            </div>
        </div>
    )
}

export default navbar