import React from 'react'
import './header.scss'
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BsHeadphones } from 'react-icons/bs';
import Navbar from './navbar';
import ProductTitles from './productTitles';
const header = () => {
    return (
        <header>
            <div className='container'>
                <div className='header-group'>
                    <div className='header-items'>
                        <div className='header-social'>
                            <span className='header-icon icon-phone'>
                                <a href="tel:+6494461709">
                                    <BsHeadphones /> 3244234
                                    </a>
                            </span>
                            <span className='header-icon icon-facebook'>
                                <a href="">
                                    <AiFillFacebook />
                                </a>
                            </span>
                            <span className='header-icon icon-instagram'>
                                <a href="">
                                    <AiFillInstagram />
                                </a>
                            </span>
                        </div>

                        <span>
                            <a href="/">Sipariş Takip</a>
                            <a href="/">İletişim</a>
                        </span>
                    </div>
                    <Navbar />
                    <ProductTitles />
                </div>
            </div>
        </header>
    )
}

export default header