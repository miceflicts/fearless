import React from 'react'
import { Link } from 'react-router-dom'

import { getAuth } from "firebase/auth";

function Profile_options({isLoggedIn}) {

  const auth = getAuth();

  if (auth.currentUser !== null) 
      console.log("user id: " + auth.currentUser.uid);


  return (
    <div className=' w-48 min-h-[160px] absolute right-9 top-[8.5rem] bg-[rgb(39,38,38)] shadow-lg rounded-xl z-20'>
        <div className='flex flex-col gap-4 text-white text-center items-center text-sm mt-2'>
            {!isLoggedIn ? (
              <>
                <Link to="/user/login"><h5 className=' text-white opacity-90 hover:opacity-100'>Cadastrar-se / Registrar</h5></Link>
                <hr className="h-px w-40 bg-gray-500 border-0"/>
                <Link to="/user/orders"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Meus pedidos</h5></Link>
                <Link to="/user/recently_viewed"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Vistos recentemente</h5></Link>
                <Link to="/user/cart"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Carrinho</h5></Link>
              </>
            ) : (
              <>
                <Link to="/user/login"><h5 className=' text-white opacity-90 hover:opacity-100'>A</h5></Link>
                <hr className="h-px w-40 bg-gray-500 border-0"/>
                <Link to="/user/orders"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Meus pedidos</h5></Link>
                <Link to="/user/recently_viewed"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Vistos recentemente</h5></Link>
                <Link to="/user/cart"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Carrinho</h5></Link>
              </>
            )}
        </div>
    </div>
  )
}

export default Profile_options