import React from 'react'
import { auth, googleProvider } from "../../config/firebase"
import { signInWithPopup } from 'firebase/auth'

function SignInWithGoogle() {

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch(error){
            console.error(error);
        };
      };

    signInWithGoogle();

    return (
        <>
        </>
    )
}

export default SignInWithGoogle