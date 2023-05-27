import React from 'react'
import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"


function SignInEmailAndPassword(userEmail,userPassword) {

  const signUp = async () => {
    try {
        await createUserWithEmailAndPassword( auth, userEmail, userPassword);
    } catch(error){
        console.error(error)
    };
  };

  signUp();
  

  return (
    <>
        
    </>
  )
}

export default SignInEmailAndPassword