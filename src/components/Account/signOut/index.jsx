import React, { useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';

function SignOut() {
const auth = getAuth();

signOut(auth)
    .then(() => {
        console.log('Signed Out');
    })
    .catch((error) => {
        console.error(error);
    });
}

export default SignOut;
