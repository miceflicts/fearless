import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import logo from "../../images/logo.png"
import cart from "../../images/header/cart.png"
import profile from "../../images/header/profile.png"
import heart from "../../images/header/heart.png"
import Profile_options from '../../components/header/profile_options'

function Header() {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  const [isHamburguerOpen, setIsHamburguerOpen] = useState(false);

  const handleMouseOver = () => {
    setIsHoveringProfile(true);
  }

  const handleMouseOut = () => {
    setIsHoveringProfile(false);
  }

  const handleHamburguerClick = () => {
    setIsHamburguerOpen(!isHamburguerOpen);
  }


  return (
    <>
        <div className=' w-full h-10 flex justify-center items-center bg-neutral-900'>
            <div className=' ml-10 text-gray-200  font-medium max-[400px]:text-sm'>
                <h5 className=''>Drop inicial com 10% de desconto</h5>
            </div>
        </div>

        <div className=' w-full h-24 flex justify-between items-center bg-black/60'>
            <div className=' w-[160px] max-[500px]:w-[150px] max-[400px]:ml-5 mt-4 ml-10'>
                <Link to="/"><img src={logo} alt="Website logo" className=' cursor-pointer'/></Link>
            </div>

            <div className=' flex justify-center gap-4 max-[400px]:mr-5 mr-10'>
                <Link to="">
                    <img className='w-[33px] max-[585px]:hidden hover:opacity-80' src={heart} alt="Heart logo" />
                </Link>
                
                <Link to="">
                    <img className='w-[33px] max-[585px]:hidden hover:opacity-80' src={cart} alt="Cart logo" />
                </Link>

                <button onClick={handleHamburguerClick} data-collapse-toggle="navbar-hamburger" type='button' aria-controls="navbar-hamburger" aria-expanded="false" className="space-y-2 hidden max-[585px]:flex flex-col">
                    <div aria-hidden="true" className="w-8 h-0.5 bg-gray-400"></div>
                    <div aria-hidden="true" className="w-8 h-0.5 bg-gray-400"></div>
                    <div aria-hidden="true" className="w-8 h-0.5 bg-gray-400"></div>
                </button>

                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    <Link to="/user/login"><img className='w-[33px] max-[585px]:hidden hover:opacity-80' src={profile} alt="Profile Logo" /></Link>
                    {isHoveringProfile && (
                        <>
                            <div className='absolute w-10 h-44 right-9 bg-[rgb(39,38,38)] rounded-xl z-10'></div>
                            <Profile_options></Profile_options>
                        </>
                    )}
                </div>
            </div>
        </div>

        <div className={`${isHamburguerOpen ? "flex-col" : "hidden"} min-[585px]:hidden`} id="navbar-hamburger">
                <ul className="flex flex-col font-medium bg-black/60 border-gray-700">
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 rounded text-gray-400 hover:bg-zinc-900 hover:text-white">Home</a>
                </li>

                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 rounded text-gray-400 hover:bg-zinc-900 hover:text-white">Services</a>
                </li>

                <li>
                    <a href="#" className="block py-2 pl-3 pr-4  rounded  text-gray-400 md:dark:hover:text-white hover:bg-zinc-900 hover:text-white">Pricing</a>
                </li>

                <li>
                    <a href="#" className="block py-2 pl-3 pr-4  rounded  text-gray-400 hover:bg-zinc-900 hover:text-white mb-2">Contact</a>
                </li>
                
                </ul>
        </div>
    </>
  )
}

export default Header