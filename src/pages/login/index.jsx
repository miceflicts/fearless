import React,{useState} from 'react'
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as EmailValidator from 'email-validator';
import SignInEmailAndPassword from '../../components/auth/SignInEmailAndPassword'
import SignInWithGoogle from '../../components/auth/SignInWithGoogle'
import SignInWithFacebook from '../../components/auth/SignInWithFacebook'

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

  const handleSignUpClick = () => {
    setIsTheEmailValid(EmailValidator.validate(userEmail));

    firstUserPassword.length < 6 ? setIsThePasswordStrong(false) : setIsThePasswordStrong(true)
    firstUserPassword === secondUserPassword ? setIstheSamePassword(true) : setIstheSamePassword(false);
    
    firstUserPassword === secondUserPassword && isTheEmailValid && isThePasswordStrong ? SignInEmailAndPassword(userEmail, firstUserPassword) : null;
    
  }

    const handleLogInClick = async () => {
        if (logInEmail !== null && logInPassword !== null) {
            try {
                let user = await signInWithEmailAndPassword(auth, logInEmail, logInPassword);
                console.log('logged in');
                setIsTheLoginWrong(false);
            } catch (err) {
                setIsTheLoginWrong(true);
                console.error(err);
            }
        };
    };
  
  return (
    <div className=' w-screen flex justify-center'>
        <div className=' flex mt-[100px] justify-between min-h-screen'>
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
                        <h3 className=' text-center text-white text-sm font-normal opacity-90'>Esqueceu sua senha?</h3>
                    </div>
                    <div className=' flex gap-2 items-center'>
                        <hr className='w-2/4 h-px my-8 border-0 bg-white/30'/>
                        <h3 className=' text-white/40 text-sm font-semibold'>Ou</h3>
                        <hr className='w-2/4 h-px my-8 border-0 bg-white/30'/>
                    </div>
                    <button onClick={SignInWithGoogle} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Login com o Google
                    </button>
                    <button onClick={SignInWithFacebook} type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                        Login com o Facebook
                    </button>
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
  )
}

export default Login