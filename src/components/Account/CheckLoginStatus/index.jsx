import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function CheckLoginStatus({ OnLoginStatus, OnUserInformation }) {
  const auth = getAuth();

  let isLogged = false;

  onAuthStateChanged(auth, (user) => {
    if (user) { // check if the user is logged in
      isLogged = true

      OnUserInformation({userId: user.uid, userName: user.displayName, userEmail: user.email, userPhoto: user.photoURL})
    }
    else {
      isLogged = false;
    }
    OnLoginStatus(isLogged);
  });

  return (
    <>
    </>
  )
}

export default CheckLoginStatus