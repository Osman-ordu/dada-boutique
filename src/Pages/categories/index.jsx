import { React, useState } from 'react'
import './../../Styles/categories.styles.scss'
import { Routes, Route } from "react-router-dom";
import MenProducts from './menProducts'
import WomenProducts from './womenProducts'
import Jewelery from './jewelery'
import Electronics from './electronics'
import FilterButtons from '../../Components/FilterButtons/filterButtons';




const Categories = ({ data }) => {
    const [filter, setFilter] = useState({})

    return (
        <>
            <div className='categories-container'>
               {data && <FilterButtons data={data} setFilter={setFilter} /> } 
                <Routes>
                    <Route path='men-section' element={<MenProducts data={data} filter={filter} />} />
                    <Route path='women-section' element={<WomenProducts data={data} />} />
                    <Route path='jewelery' element={<Jewelery data={data} />} />
                    <Route path='electronics' element={<Electronics data={data} />} />
                </Routes>
            </div>

        </>
    )
}

export default Categories