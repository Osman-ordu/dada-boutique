import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Components/Header/header'
import Categories from './Pages/categories/index'



const App = () => {

  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false)
  const [filter, setFilter] = useState({});

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

  useEffect(() => {
    if (refresh) {
      getData()
      
    }
  }, [refresh])
  return (
    <>
      <Header getProduct={clickHandler} />
      <Categories  filter={filter} setFilter={setFilter} data={data} />
    </>
  )
}

export default App