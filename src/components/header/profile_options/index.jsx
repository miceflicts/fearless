import React from 'react'
import { Link } from 'react-router-dom'

import SignOut from '../../Account/signOut';

function Profile_options({ closeProfileOptions,isLoggedIn, userInfo}) {
 
  console.log(userInfo)

  let userNameEmail = "";

  if (isLoggedIn) {
    const atIndex = userInfo.userEmail.indexOf("@");
    userNameEmail = userInfo.userEmail.slice(0, atIndex)
  }

  const handleSignOut = () => {
    SignOut();
    closeProfileOptions();
  }


  return (
    <div className=' w-48 min-h-[170px] absolute right-9 top-[8.5rem] bg-[rgb(39,38,38)] shadow-lg rounded-xl z-20'>
        <div className='flex flex-col gap-4 text-white text-left ml-4 text-sm mt-2'>
            {!isLoggedIn ? (
              <>
                <Link to="/user/login"><h5 className=' text-white opacity-90 hover:opacity-100 mt-1'>Cadastrar-se / Registrar</h5></Link>
                <hr className="h-px w-40 bg-gray-500 border-0"/>
                <Link to="/user/orders"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Meus pedidos</h5></Link>
                <Link to="/user/recently_viewed"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Vistos recentemente</h5></Link>
                <Link to="/user/cart"><h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Carrinho</h5></Link>
              </>
            ) : (
              <>
                <Link to="/user/index"><h5 className=' text-white opacity-95 hover:opacity-80 mt-1'>{userInfo.userName === null ? userNameEmail : userInfo.userName}</h5></Link>
                <hr className="h-px w-40 bg-gray-500 border-0"/>
                <Link to="/user/index"><h5 className=' opacity-80 text-gray-300 hover:opacity-100'>Meu Perfil</h5></Link>
                <Link to="/user/cart"><h5 className=' opacity-80 text-gray-300 hover:opacity-100'>Meus Pedidos</h5></Link>
                <Link to="/user/recently_viewed"><h5 className=' opacity-80 text-gray-300 hover:opacity-100'>Visto Recentemente</h5></Link>
                <hr className="h-px w-40 bg-gray-500 border-0"/>
                <Link to="/user/login"><h5 onClick={handleSignOut} className=' opacity-80 text-gray-300 hover:opacity-100 mb-3'>Sair</h5></Link>
              </>
            )}
        </div>
    </div>
  )
}

export default Profile_options