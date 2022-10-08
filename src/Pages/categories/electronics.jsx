import React from 'react'
import Card from '../../Components/Containers/card'
const Electronics = ({ data }) => {

  return (
    <>
      {data && data.filter((product) => {
        return product[1].category === "electronics"
      }).map((product, index) => {
        const { image, title, price } = product[1];
        return (
          <Card key={index} image={image} title={title} price={price} />
        )
      })}
    </>
  )
}

export default Electronics

