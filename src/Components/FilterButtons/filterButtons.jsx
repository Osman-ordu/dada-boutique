import React from "react";

const FilterButtons = ({ data, setFilter }) => {
    
    const filterRisingPrice = () => {
        setFilter(() => data.sort((a, b) => parseFloat(a[1].price) - parseFloat(b[1].price), Number))
        setFilter([])
    }
    const filterDecreasingPrice = () => {
        setFilter(() => data.sort((a, b) => parseFloat(b[1].price) - parseFloat(a[1].price), Number))
        setFilter([])
    }



    return (
        <div className='btn-group'>
            <button onClick={filterRisingPrice} className='btn'>
                <span>
                    Fiyata göre(Artan)
                </span>
            </button>
            <button onClick={filterDecreasingPrice}  className='btn'>
                <span>
                    Fiyata göre(Azalan)
                </span>
            </button>
            <button className='btn'>
                <span>
                    Ürün Adına Göre (A-Z)
                </span>
            </button>
            <button className='btn'>
                <span>
                    Ürün Adına Göre (Z-A)
                </span>
            </button>
        </div>
    )
}

export default FilterButtons