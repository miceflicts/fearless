import React from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function RecoverPassword({ email, onUserNotFound, onUserFound}) {
    const auth = getAuth();

    const Recover = () => {
        sendPasswordResetEmail(auth, email)
            .then(() =>{
                // Password reset email sent
                console.log(email)
                console.log("sent password reset email");
                onUserFound()
            })
            .catch((error) => {
                // Error while sending the email
                const errorCode = error.code;
                onUserNotFound(errorCode);
            });
    }

    Recover();

    return (
        <div></div>
    )
}

export default RecoverPassword