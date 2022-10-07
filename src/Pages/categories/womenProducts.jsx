import React from 'react'
import Card from '../../Components/Containers/card';

const WomenProducts = ({ data }) => {
 
  return (
    <>
      {data && data.filter((product) => {
        return product[1].category === "women's clothing"
      }).map((product) => {
        const { image, title, price } = product[1];
        return (
          <Card image={image} title={title} price={price} />
        )
      })}
    </>
  )
}

export default WomenProducts