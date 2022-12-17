import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import SiteContext from './Context';

export const PrivateRoute = ({ children }) => {
    // import from context api
    const { auth } = useContext(SiteContext)
    console.log(auth.currentUser)
    console.log(auth.displayName)
    if(!auth){
        return <Navigate to='/signin'/>
    }
}