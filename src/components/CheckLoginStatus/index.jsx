import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function CheckLoginStatus() {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) { // check if the user is logged in
      const uid = user.uid;
      console.log(uid)
    }
  });

  return (
    <>
    </>
  )
}

export default CheckLoginStatus