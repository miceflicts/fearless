import React from 'react'
import { Link } from 'react-router-dom';
import success_icon from "../../images/icons/success.png";
import Footer_Layout from '../../layouts/footer';

function Register_Success() {
  return (
    <>
      <div className='w-screen flex justify-center'>
          <div className=' flex flex-col h-[700px] items-center justify-center gap-10'>
              <img className=' w-[150px]' src={success_icon} alt=" success icon" />
              <h5 className=' text-white font-medium text-2xl'>Parabéns! Você se registrou com sucesso!</h5>
              <Link className=' contents' to="/"><button type="button" className=" text-white/80 bg-black/70 hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base w-2/4 py-3.5 mb-32">Voltar para a loja</button></Link>
          </div>
      </div>
      <Footer_Layout></Footer_Layout>
    </>
  )
}

export default Register_Success