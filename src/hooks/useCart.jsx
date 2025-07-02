import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    //    tan stack
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [carts, refetch]
};

export default useCart;