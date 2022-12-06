import React, { useState } from 'react'
//* Firebase
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebase-config';

export const SiteContext = React.createContext();

export function SiteProvider({ children }){

    const [loginError, setLoginError] = useState('');

    const loginUser = async (email, password,navigate) => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            //console.log(user)
            navigate('/home')
        } catch(error){
            console.log(error.message)
            if(error.message === 'Firebase: Error (auth/invalid-email).'){
                setLoginError('please provide a valid email address')
                //console.log('Not a valid Email')
            }
            else if(error.message === 'Firebase: Error (auth/wrong-password).'){
                setLoginError('your email or password is incorrect')
                //console.log('Wrong Password')
            }
            else if(error.message === 'Firebase: Error (auth/user-not-found).'){
                setLoginError('your email or password is incorrect')
                //console.log('Not a registered Email')
            }
            else{
                setLoginError('server error - please close app and try again')
                //console.log('500 - Internal Server Error: Please close app and try again')
            }
            console.log('Login Failed')
        }
    }

    const sendResetLink = async (email) => {
        try{
            await sendPasswordResetEmail(auth, email)
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        }
    }

    const values = {
        loginUser,
        loginError,
        signInWithGoogle,
        sendResetLink,
    }


    /**
     * the App.js is surrounded by the Provider context and the {children} refers to the App.js 
     * the value={values} is the items being passed into the other children
     */
    return(
        <SiteContext.Provider value={values}>
            {children}
        </SiteContext.Provider>
    )
}

export default SiteContext;

//* Sign In page
// // TODO: error validation of login with email and password
// TODO: don't allow user to sign in with phone unless they have create account with phone
// TODO: error validation for phone sign in

//* Password reset page
// // TODO: make forgot password work

//* Sign Up page
// TODO: error validation for sign up with email and password
// TODO: error validation for sign up with phone

//* Home page
// TODO: fix error with page needing to be refreshed for name and icon to show up
