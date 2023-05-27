import React from 'react'
import { auth } from '../../config/firebase';
import {signInWithEmailAndPassword} from "firebase/auth";

function LogIn(loginEmail, loginPassword) {
    const logIn = async () => {
        try {
          let user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
          console.log("logged in");
        } catch (error) {
          console.log(error.message);
        };
    };

    logIn();

  return (
    <>
    </>
  )
}

export default LogIn