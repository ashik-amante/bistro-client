import axios from 'axios';
import React from 'react';

const useAxiosPublic = () => {

    const axiosPublic = axios.create({
        baseURL:'https://server-murex-iota-75.vercel.app'
    })
    return axiosPublic

};

export default useAxiosPublic;