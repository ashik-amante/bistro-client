import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
   
     const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    
    if(user && isAdmin) return children
    if(loading || isAdminLoading) return <p className='text-3xl text-center'>Loading .......</p>
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default AdminRoute;