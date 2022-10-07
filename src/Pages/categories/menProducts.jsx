import React from 'react'

const MenProducts = ({ data }) => {
    let prefix = 'menTextile-'
    let baseId = 1;
    const cardId = () => baseId++;
    return (
        <>
            {data && data.filter((product) => {
                return product[1].category === "men's clothing"
            }).map((product, index) => {
                const { image, title, price } = product[1];
                return (
                    <div id={prefix + cardId()} className='card' key={index}>
                        <img className='card-img' src={image} alt="" />
                        <p className='card-title'>{title}</p>
                        <div className='card-price'>{price}</div>
                        <button>sepete ekle</button>
                    </div>

                )
            })}
        </>
    )
}

export default MenProducts