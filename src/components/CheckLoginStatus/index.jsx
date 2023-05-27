import React from 'react'
import { auth } from '../../config/firebase';

function CheckLoginStatus() {

  const checkLoginStatus = () => {
    console.log(auth.currentUser);
  };

  checkLoginStatus();

  return (
    <>
    </>
  )
}

export default CheckLoginStatus