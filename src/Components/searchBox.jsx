import React from 'react'
import { InputGroup, Input, Button } from 'reactstrap'
import { FiSearch } from 'react-icons/fi'

const SearchBox = ({ getProduct,setSearch }) => {
    

    const searchProduct = (event) => {
        return setSearch(event.target.value)
    }
    return (
        <>
            <InputGroup className='input-group'>
                <Input type="search"  onChange={searchProduct} placeholder='Ürün ara' />
                <Button >
                    <FiSearch size={20} />
                </Button> 
            </InputGroup>
   
        </>



    )
}

export default SearchBox