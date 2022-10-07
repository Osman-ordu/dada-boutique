import React from 'react'
import Card from '../../Components/Containers/card'
const Electronics = ({ data }) => {

  return (
    <>
      {data && data.filter((product) => {
        return product[1].category === "electronics"
      }).map((product) => {
        const { image, title, price } = product[1];
        return (
          <Card image={image} title={title} price={price} />
        )
      })}
    </>
  )
}

export default Electronics

