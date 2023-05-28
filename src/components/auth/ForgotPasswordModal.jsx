import React,{useEffect, useState} from 'react'
import RecoverPassword from './RecoverPassword';
import success_icon from "../../images/icons/success.png"

function ForgotPasswordModal({ onModalOpened }) {

  const [showModal, setShowModal] = useState(true);
  const [recoverEmail, setRecoverEmail] = useState("");

  const [isUserFound, setIsUserFound] = useState(true);
  
  const [canContinueRecover, setCanContinueRecover] = useState(false);
  const [canShowInfo, setCanShowInfo] = useState(false);

  useEffect(() => {
    onModalOpened(showModal);

  }, [showModal])
  
  const handleContinueButtonClick = () => {
    setCanContinueRecover(true)
  }

  const handleUserNotFound = (error) => {
    setIsUserFound(false);
    setCanContinueRecover(false);
  };

  const handleUserFound = () => {
    setIsUserFound(true);
    setCanContinueRecover(false);
    setCanShowInfo(true);
  }
  
  return (
    <>
        {showModal ? (
        <>
          {!canShowInfo ? (
              <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="w-auto max-w-[600px]">
                    {/*content*/}
                    <div className=" rounded-lg shadow-lg flex flex-col items-center w-full bg-stone-800">
                        {/*header*/}
                        <div className="flex mt-5 ">
                        <h3 className="text-3xl font-bold text-center text-white/80">
                            Esqueceu sua senha
                        </h3>
                        </div>
                        {/*body*/}
                        <div className=" flex-auto">
                        <p className="mt-4 mb-1 ml-4 mr-4 p-4 text-stone-300 text-sm font-normal text-start">
                            Se você esqueceu sua senha, insira seu endereço de e-mail cadastrado.
                            <br></br>
                            Enviaremos um link para redefinir sua senha.
                        </p>
                        <p className=" ml-4 mr-4 p-4 text-stone-200 text-sm font-normal text-start">Endereço de e-mail</p>
                        <div className='w-full flex flex-col items-center'>
                            <input onChange={(e) => {setRecoverEmail(e.target.value)}} type="text" id="default-input" className="text-xs rounded-[5px] border w-[88%] bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                            {!isUserFound ? (
                                <span className=' text-red-500 text-xs mt-2'>
                                    O e-mail que você digitou não é válido. Por favor, verifique seu e-mail e tente novamente.
                                </span>
                            ) : null}
                        </div>
                        </div>
                        {/*footer*/}
                        <div className="flex p-6">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            className="bg-emerald-500 hover:bg-emerald-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                                handleContinueButtonClick();
                            }}
                        >
                            Continuar
                        </button>
                        </div>
                    </div>
                        {canContinueRecover ? (
                            <RecoverPassword email={recoverEmail} onUserNotFound={handleUserNotFound} onUserFound={handleUserFound}></RecoverPassword>
                        ) : null}
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
          ) : (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="w-auto max-w-[600px]">
                    {/*content*/}
                    <div className=" rounded-lg shadow-lg flex flex-col items-center w-full bg-stone-800">
                        {/*header*/}
                        <div className="flex mt-5 ">
                        <img className=' w-[100px]' src={success_icon} alt="success icon" />
                        </div>
                        {/*body*/}
                        <div className=" flex-auto">
                        <p className="mt-4 mb-1 ml-4 mr-4 p-4 text-stone-300 text-lg font-semibold text-center">
                            Um link para redefinir sua senha foi enviado para {recoverEmail}
                        </p>                        
                        </div>
                        {/*footer*/}
                        <div className="flex p-6">
                        <button
                            className="bg-emerald-500 hover:bg-emerald-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-14 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Sair
                        </button>
                        </div>
                    </div>
                        {canContinueRecover ? (
                            <RecoverPassword email={recoverEmail} onUserNotFound={handleUserNotFound} onUserFound={handleUserFound}></RecoverPassword>
                        ) : null}
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </>                                                                    
      ) : null}
    </>
  )
}

export default ForgotPasswordModal