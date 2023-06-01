import React,{useState} from 'react'

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth"
import SignInWithGoogle from '../../components/auth/SignInWithGoogle'
import SignInWithFacebook from '../../components/auth/SignInWithFacebook'

import * as EmailValidator from 'email-validator';
import { useNavigate } from 'react-router-dom';
import ForgotPasswordModal from '../../components/auth/ForgotPasswordModal';
import Footer_Layout from '../../layouts/footer';


function Login() {
  // criar conta
  const [userEmail, setUserEmail] = useState("")
  const [firstUserPassword, setFirstUserPassword] = useState("")
  const [secondUserPassword, setSecondUserPassword] = useState("") // dois useStates para checar se as duas senhas são iguais.

  // logar
  const [logInEmail, setLogInEmail] = useState();
  const [logInPassword, setLogInPassword] = useState();

  // Mensagens de erro
  const [istheSamePassword, setIstheSamePassword] = useState(true);
  const [isTheEmailValid, setIsTheEmailValid] = useState(true);
  const [isThePasswordStrong, setIsThePasswordStrong] = useState(true);
  const [isTheLoginWrong, setIsTheLoginWrong] = useState(false);
  const [isEmailAlreadyInUse, setIsEmailAlreadyInUse] = useState(false);

  // Recuperação de senha
  const [isModalShowing, setIsModalShowing] = useState(false);

  const navigate = useNavigate();

  const handleModalOpened = (showModal) => {
    setIsModalShowing(showModal);
  };

  const handleSignUpClick = () => {
    setIsTheEmailValid(EmailValidator.validate(userEmail));
    firstUserPassword.length < 6 ? setIsThePasswordStrong(false) : setIsThePasswordStrong(true)
    firstUserPassword === secondUserPassword ? setIstheSamePassword(true) : setIstheSamePassword(false);
    
    firstUserPassword === secondUserPassword && isTheEmailValid && isThePasswordStrong ? signUp() : null;
  }

  const signUp = async () => {
    try {
        await createUserWithEmailAndPassword( auth, userEmail, firstUserPassword);
        navigate("/user/register_success")
    } catch(error){
        const errorMessage = error.message.split(':')[1].trim();
        console.log(errorMessage);
        errorMessage === "Error (auth/email-already-in-use)." ? setIsEmailAlreadyInUse(true) : setIsEmailAlreadyInUse(false);
    };
  };

    const handleLogInClick = async () => {
        if (logInEmail !== undefined && logInPassword !== undefined) {
            try {
                let user = await signInWithEmailAndPassword(auth, logInEmail, logInPassword);
                setIsTheLoginWrong(false);
                navigate("/user/index")
            } catch (err) {
                setIsTheLoginWrong(true);
            }
        };
    };

    const handleLogInWithPopOutSuccess = () => {
        navigate("/user/index")
    }
  
  return (
    <>
        <div className=' w-screen flex justify-center'>
            <div className=' flex mt-[100px] justify-between min-h-[70vh]'>
                <div>
                    <div className='w-[300px] flex flex-col gap-4'>
                        <h5 className=' text-center text-3xl text-white font-semibold'>Já Sou Cliente</h5>
                        <div className='flex flex-col'>
                            <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>E-mail:</label>
                            <input onChange={(e) => {setLogInEmail(e.target.value)}} type="text" className="text-xs rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                            {isTheLoginWrong ? (
                            <span className=' text-red-500 text-xs mt-1'>
                                O Endereço de Email ou Senha que você digitou está incorreto.
                            </span>
                            ) : null}
                            <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>Senha</label>
                            <input onChange={(e) => {setLogInPassword(e.target.value)}} type="password" className="text-xs rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                        </div>
                        <div className='flex flex-col items-center ml-1'>
                            <button onClick={handleLogInClick} type="button" className="text-white bg-black/70 hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base w-full py-2.5 mr-2 mb-2">Continuar</button>
                            <h3 onClick={() => {setIsModalShowing(true)}} className=' text-center text-white text-sm font-normal opacity-90 cursor-pointer'>Esqueceu sua senha?</h3>
                            {isModalShowing ? (
                            <div>
                                <ForgotPasswordModal onModalOpened={handleModalOpened}/>
                            </div>
                            ) : null}
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <hr className='w-2/4 h-px my-8 border-0 bg-white/30'/>
                            <h3 className=' text-white/40 text-sm font-semibold'>Ou</h3>
                            <hr className='w-2/4 h-px my-8 border-0 bg-white/30'/>
                        </div>

                        <SignInWithGoogle OnLogInWithPopOutSuccess={handleLogInWithPopOutSuccess}></SignInWithGoogle>
                        <SignInWithFacebook OnLogInWithPopOutSuccess={handleLogInWithPopOutSuccess}></SignInWithFacebook>
                    </div>
                </div>

                <div className="absolute left-1/2 -ml-0.5 w-[0.1px] h-[60%] bg-[rgba(229,229,229,0.11)]"></div>

                <div>
                    <div className='w-[300px] ml-[200px] flex flex-col gap-4'>
                        <h5 className=' text-center text-3xl text-white font-semibold'>Sou Novo Cliente</h5>
                        <div>
                            <h3 className=' mt-8 text-white text-sm font-normal'>E-mail:</h3>
                            <input onChange={(e) => {setUserEmail(e.target.value)}} type="text" className="text-xs mt-2 rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                            {!isTheEmailValid ? (
                                <span className=' text-red-500 text-xs'>
                                O e-mail que você digitou não é válido. Por favor, verifique seu e-mail e tente novamente
                            </span>
                            ) : null}
                            {isEmailAlreadyInUse ? (
                                <span className=' text-red-500 text-xs'>
                                O e-mail que você digitou já está em uso.
                            </span>
                            ) : null}
                        </div>
                        <div>
                            <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>Senha</label>
                            <input onChange={(e) => {setFirstUserPassword(e.target.value)}} type="password" className="text-xs mt-2 rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                            {!isThePasswordStrong ? (
                            <span className=' text-red-500 text-xs'>
                                A senha deve ter no mínimo 6 caracteres.
                            </span>
                            ) : null}
                        </div>
                        <div>
                            <label className=' mt-8 text-white text-sm font-normal mb-[8px]'>Confirme sua senha:</label>
                            <input onChange={(e) => {setSecondUserPassword(e.target.value)}} type="password" id="default-input" className="text-xs mt-2 rounded-[5px] border block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"/>
                            {!istheSamePassword ? (
                            <span className=' text-red-500 text-xs'>
                                A sua senha não corresponde, por favor tente novamente.
                            </span>
                            ) : null}
                        </div>
                        <hr className='w-full h-px border-0 bg-white/30 mt-6'/>
                        <button onClick={handleSignUpClick} type="button" className="mt-6 text-white bg-black/70 hover:bg-black/60 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2">Registrar</button>
                    </div>
                </div>
            </div>
        </div>

        <Footer_Layout></Footer_Layout>
    </>

  )
}

export default Login