import React from "react";

const FilterButtons = ({ data, setFilter }) => {


    const filterRisingPrice = (up,down) => {
        const filterPrice = data.sort((a, b) => {
            up = parseFloat(a[1].price)
            down =   parseFloat(b[1].price)
            return up - down;
        },Number);

        setFilter(filterPrice)
        setFilter([])
    }
    
    const filterDecreasingPrice = (up,down) => {
        const filterPrice = data.sort((a, b) => {
            up = parseFloat(a[1].price)
            down =   parseFloat(b[1].price)
            return down - up;
        },Number);

        setFilter(filterPrice)
        setFilter([])
    }

    return (
        <div className='btn-group'>
            <button onClick={filterRisingPrice} className='btn'>
                <span>
                    Fiyata göre(Artan)
                </span>
            </button>
            <button onClick={filterDecreasingPrice} className='btn'>
                <span>
                    Fiyata göre(Azalan)
                </span>
            </button>
            <button onClick={filterAlphabetically} className='btn'>
                <span>
                    Ürün Adına Göre (A-Z)
                </span>
            </button>
            <button onClick={filterReverseAlpabetically} className='btn'>
                <span>
                    Ürün Adına Göre (Z-A)
                </span>
            </button>
            <button className='btn'>
                <span>
                    Stoktakiler
                </span>
            </button>
        </div>
    )
}

export default FilterButtons