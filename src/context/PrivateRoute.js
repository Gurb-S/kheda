import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import SiteContext from './Context';

export const PrivateRoute = ({ children }) => {
    // import from context api
    const { currentUser } = useContext(SiteContext)
    //if there is no user redirect to signin page if there is a cuser return the current page
    if(!currentUser){
        return <Navigate to='/signin'/>
    }
    return children
}