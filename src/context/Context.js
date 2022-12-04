import React from 'react'

//* Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebase-config';

export const SiteContext = React.createContext();

export function SiteProvider({ children }){

    const login = async (email, password) => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(user)
        } catch(error){
            console.log(error.message)
        }
    }

    const values = {
        login,
        signInWithGoogle
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
// TODO: error validation of login with email and password
// TODO: don't allow user to sign in with phone unless they have create account with phone
// TODO: error validation for phone sign in
// TODO: make forgot password work

//* Sign Up page
// TODO: error validation for sign up with email and password
// TODO: error validation for sign up with phone

//* Home page
// TODO: fix error with page needing to be refreshed for name and icon to show up
