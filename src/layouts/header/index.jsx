import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import logo from "../../images/logo.png"
import cart from "../../images/header/cart.png"
import profile from "../../images/header/profile.png"
import heart from "../../images/header/heart.png"
import Profile_options from '../../components/header/profile_options'

function Header() {
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);

  const handleMouseOver = () => {
    setIsHoveringProfile(true);
  }

  const handleMouseOut = () => {
    setIsHoveringProfile(false);
  }


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
                    <img className='w-[33px] hover:opacity-80' src={heart} alt="Heart logo" />
                </Link>
                
                <Link to="">
                    <img className='w-[33px] hover:opacity-80' src={cart} alt="Cart logo" />
                </Link>

                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    <Link to="/user/login"><img className='w-[33px] hover:opacity-80' src={profile} alt="Profile Logo" /></Link>
                    {isHoveringProfile && (
                        <>
                            <div className='absolute w-10 h-44 right-9 bg-[rgb(39,38,38)] rounded-xl z-10'></div>
                            <Profile_options></Profile_options>
                        </>
                    )}
                </div>
            </div>

        </div>
    </>
  )
}

export default Header