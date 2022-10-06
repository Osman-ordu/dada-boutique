import React from 'react'
import './../../Styles/categories.styles.scss'
import { Routes, Route } from "react-router-dom";
import MenProducts from './menProducts'
import WomenProducts from './womenProducts'
import Jewelery from './jewelery'
import Electronics from './electronics'



const Categories = ({ data }) => {


    return (
        <>
            <div className='categories-container'>
                <Routes>
                    <Route path='men-section' element={<MenProducts data={data} />} />
                    <Route path='women-section' element={<WomenProducts data={data} />} />
                    <Route path='jewelery' element={<Jewelery data={data} />} />
                    <Route path='electronics' element={<Electronics data={data} />} />
                </Routes>
            </div>

        </>
    )
}

export default Categories