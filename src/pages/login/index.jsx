import React from 'react'

function Login() {
  return (
    <div className=' w-screen flex justify-center'>
        <div className=' flex mt-[100px] justify-between min-h-screen'>
            <div>
                <div className='w-[300px] flex flex-col gap-4'>
                    <h5 className=' text-center text-3xl text-white font-semibold'>Já Sou Cliente</h5>
                    <div className='flex flex-col'>
                        <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>Número de celular ou E-mail:</label>
                        <input type="text" id="default-input" class="text-xs rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                        <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>Senha</label>
                        <input type="password" id="default-input" class="text-xs rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                    </div>
                    <div className='flex flex-col items-center ml-1'>
                        <button type="button" class="text-white bg-black/70 hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base w-full py-2.5 mr-2 mb-2">Continuar</button>
                        <h3 className=' text-center text-white text-sm font-normal opacity-90'>Esqueceu sua senha?</h3>
                    </div>
                    <div className=' flex gap-2 items-center'>
                        <hr className='w-2/4 h-px my-8 border-0 bg-white/30'/>
                        <h3 className=' text-white/40 text-sm font-semibold'>Ou</h3>
                        <hr className='w-2/4 h-px my-8 border-0 bg-white/30'/>
                    </div>
                    <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Login com o Google
                    </button>
                    <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                        Login com o Facebook
                    </button>
                </div>
            </div>

            <div class="absolute left-1/2 -ml-0.5 w-[0.1px] h-[60%] bg-[rgba(229,229,229,0.11)]"></div>

            <div>
                <div className='w-[300px] ml-[200px] flex flex-col gap-4'>
                    <h5 className=' text-center text-3xl text-white font-semibold'>Sou Novo Cliente</h5>
                    <div>
                        <h3 className=' mt-8 text-white text-sm font-normal'>Número de celular ou E-mail:</h3>
                        <input type="text" id="default-input" class="text-xs mt-2 rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                    </div>
                    <div>
                        <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>Senha</label>
                        <input type="password" id="default-input" class="text-xs mt-2 rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                    </div>
                    <div>
                        <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>Confirme sua senha:</label>
                        <input type="password" id="default-input" class="text-xs mt-2 rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                    </div>
                    <hr className='w-full h-px border-0 bg-white/30 mt-6'/>
                    <button type="button" class="mt-6 text-white bg-black/70 hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">Registrar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login