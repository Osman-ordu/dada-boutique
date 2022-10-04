import React from 'react'
import { InputGroup, Input, Button } from 'reactstrap'
import { FiSearch } from 'react-icons/fi'
import  logo  from './../../assets/image/babypapa.png'

const navbar = () => {
    return (
        <navbar>
            <div className='container'>
                <img src={logo} alt="babypapa" style={{width:'150px'}} />
                <InputGroup className='input-group'>
                    <Input type="search" placeholder='Aramak istediğin ürünü yaz, Kolayca bul!' />
                    <Button >
                        <FiSearch size={20} />
                    </Button>
                </InputGroup>
                <div className='button-group'>
                    <button className='login-sign-up'>Giriş Yap/Üye Ol</button>
                    <button className='basket'>Sepetim</button>
                </div>
            </div>
        </navbar>
    )
}

export default navbar