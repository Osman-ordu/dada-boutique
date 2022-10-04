import React from 'react'
import { useState, useEffect } from 'react'
import {useId} from 'react'
import axios from 'axios'
import Header from './Components/Header/header'

const App = () => {
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false)
  const cardId = useId();
  const clickHandler = () => { setRefresh(!refresh) }


  const url = 'https://fakestoreapi.com/products'

  async function getData() {
    try {
      const response = await axios.get(url);
      const dataArray = Object.entries(response.data)
      setData(dataArray);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => { getData() }, [refresh])
  return (
    <>
      <Header getProduct={clickHandler} />
      {data && data.map((item, index) => (
        <div id={cardId} key={index}>{item[1].category}</div>
      ))}





    </>
  )
}

export default App