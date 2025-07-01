import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(user) return children
    if(loading) return <p className='text-3xl text-center'>Loading .......</p>
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;