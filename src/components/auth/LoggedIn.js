import React, { useState } from 'react'

//* FIREBASE
import { auth } from '../../firebase-config'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export function LoggedIn() {

    const navigate = useNavigate();

    const logout = async () => {
        signOut(auth)
        localStorage.removeItem('email')
        localStorage.removeItem('name')
        localStorage.removeItem('profilePic')
        navigate('/')
    }

    const [ user, setUser ] = useState({});

    onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
    })

    return(
        <div>
            <h1>You are logged in {user?.email}</h1>
            <h2>Your name is {localStorage.getItem('name')}</h2>
            <img src={localStorage.getItem('profilePic')} alt='profile pic'/>
            <button onClick={logout}>Sign Out</button>
        </div>
    )
}