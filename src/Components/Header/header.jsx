import React from 'react'
import './../../Styles/header.scss'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsHeadphones } from 'react-icons/bs';
import Navbar from './navbar';
import CategoryTitles from './../../Components/Containers/categoryTitles'
import headerImage from './../../assets/image/home-image-portre.jpg'

const header = ({ getProduct,setSearch }) => {

    return (
        <header>
            <div className='container'>
                <div className='header-group'>
                    <div className='header-items'>
                        <div className='header-social'>
                            <span className='header-icon icon-phone'>
                                <a href="tel:+6494461709">
                                    <BsHeadphones size={20} />
                                </a>
                            </span>
                            <span className='header-icon icon-facebook'>
                                <a href="">
                                    <AiFillFacebook size={20} />
                                </a>
                            </span>
                            <span className='header-icon icon-instagram'>
                                <a href="">
                                    <AiFillInstagram size={20} />
                                </a>
                            </span>
                        </div>
                        <span>
                            <a href="/">Sipariş Takip</a>
                            <a href="/">İletişim</a>
                        </span>
                    </div>
                    <Navbar getProduct={getProduct} setSearch={setSearch} />
                    <CategoryTitles getProduct={getProduct} />
                    <div>
                        <img src={headerImage} alt="" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default header