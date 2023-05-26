import React from 'react'

function Profile_options() {
  return (
    <div className=' w-48 h-40 absolute right-9 top-[8.5rem] bg-[rgb(39,38,38)] shadow-lg rounded-xl z-20'>
        <div className='flex flex-col gap-4 text-white text-center items-center text-sm mt-2'>
            <h5 className=' text-white opacity-90 hover:opacity-100'>Cadastrar-se / Registrar</h5>
            <hr className="h-px w-40 bg-gray-500 border-0"/>
            <h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Meus pedidos</h5>
            <h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Vistos recentemente</h5>
            <h5 className=' opacity-80 text-gray-200 hover:opacity-100'>Carrinho</h5>
        </div>
    </div>
  )
}

export default Profile_options