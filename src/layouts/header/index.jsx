import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

import logo from "../../images/logo.png"
import instagram_icon from "../../images/header/instagram_icon.png"
import cart from "../../images/header/cart.png"
import profile from "../../images/header/profile.png"
import heart from "../../images/header/heart.png"

function Header() {
  return (
    <>
        <div className=' w-full h-10 flex justify-center items-center bg-neutral-900'>
            <div className=' ml-10 text-gray-200'>
                <h5 className=''>Drop inicial com 10% de desconto</h5>
            </div>

            
        </div>

        <div className=' w-full h-24 flex justify-between items-center bg-black/60'>
            <div className=' w-[160px] mt-4 ml-10'>
                <Link to="/"><img src={logo} alt="Website logo" className=' cursor-pointer'/></Link>
            </div>

            <div className=' flex justify-center gap-4 mr-10'>
                <Link to="">
                    <img className='w-[33px]' src={heart} alt="Heart logo" />
                </Link>
                
                <Link to="">
                    <img className='w-[33px]' src={cart} alt="Cart logo" />
                </Link>

                <Link to="">
                    <img className='w-[33px]' src={profile} alt="Profile Logo" />
                </Link>
            </div>

        </div>
    </>
  )
}

export default Header