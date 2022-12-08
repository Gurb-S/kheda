import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import SiteContext from './Context';

export const PrivateRoute = ({ children }) => {
    //import from router dom
    const location = useLocation();

    // import from context api
    const { auth } = useContext(SiteContext)

    // const auth = getAuth();
   // const user = auth.currentUser;
   console.log(auth.currentUser)

    return auth.currentUser ? children : <Navigate to='/' replace state={{ from: location }}/>

}