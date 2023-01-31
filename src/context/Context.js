import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
//* Firebase
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { auth, signInWithGoogle } from '../firebase-config';
import { doc, addDoc, setDoc, collection } from 'firebase/firestore';

export const SiteContext = React.createContext();

export function SiteProvider({ children }){

    const [ currentUser, setCurrentUser ] = useState({});

    useEffect(() =>{
        const unsub = onAuthStateChanged(auth,(user) =>{
            setCurrentUser(user)
            console.log(user);
        })
        //defining it and calling it in the return function helps prevent memory leaking
        return () =>{
            unsub();
        }
    },[])

    // function that allows you to easily create cookies
    const setCookie = (name, count) => {
        const cookieOptions = {
            expires: 1, //1 day
            secure: true,  
            sameSite: "None"
        };
        Cookies.set(`${name}`, count, cookieOptions)
    }

    //*TEST CHARTJS updating
    const [ points, setPoints] = useState(4);
    //* END TEST

    //* Creates the code for the user on the start page
    const generateGameCode = () =>{
        const randomNumber = Math.floor(Math.random() * 99999) + 100000;
        if(randomNumber > 99999 && randomNumber < 1000000){
            setCookie('gameCode',randomNumber)
            return randomNumber
        }
        else{
            setCookie('gameCode',randomNumber)
            return Math.floor(Math.random() * 99999) + 100000;
        }
    }

    const gameCodeCookie = Cookies.get('gameCode')
    const [gameCode, setGameCode] = useState(gameCodeCookie);

    const [loginError, setLoginError] = useState('');

    const loginUser = async (email, password,navigate) => {
        try{
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            //console.log(user)
            generateGameCode()
            navigate('/')
        } catch(error){
            //! START: delete this
            console.log(error.message)
            //! END: delete this
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
            else if(error.message === 'Firebase: Error (auth/internal-error).'){
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
        currentUser,
        points,
        setPoints,
        generateGameCode,
        doc,
        addDoc,
        collection,
        setDoc,
        gameCode,
        setGameCode
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
// // TODO: don't allow user to sign in with phone unless they have create account with phone
// // TODO: error validation for phone sign in
// // TODO: redirect user to home page if logged in

//* Password reset page
// // TODO: make forgot password work

//* Sign Up page
// // TODO: error validation for sign up with email and password
// // TODO: error validation for sign up with phone

//* Home page
// // TODO: fix error with page needing to be refreshed for name and icon to show up

