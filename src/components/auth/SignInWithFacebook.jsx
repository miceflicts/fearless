import React from 'react'
import { auth, facebookProvider} from "../../config/firebase"
import { signInWithPopup } from 'firebase/auth'

function SignInWithFacebook() {

    const SignInWithFacebook = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
        } catch(error){
            console.error(error);
        };
      };

    SignInWithFacebook();

    return (
        <></>
    )
}

export default SignInWithFacebook