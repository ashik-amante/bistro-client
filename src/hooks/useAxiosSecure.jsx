import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import useAuth from './useAuth';

 const axiosSecure = axios.create({
    baseURL :'http://localhost:5000'
})

const useAxiosSecure = () => {
   const navigate = useNavigate()
   const {logOut} = useAuth()

      // request

   axiosSecure.interceptors.request.use( function(config){
      const token  = localStorage.getItem('access-token')
      console.log('req stopped by interceptor',token);

      config.headers.authorization = `Bearer ${token}`
      return config
   } , function(err){
      return Promise.reject(err)
   })

   // response
   axiosSecure.interceptors.response.use(function(response){
      return response
   }, async function(err){
      const status = err.response.status;
      
      if(status === 401 || status === 403){
         await logOut()
         navigate('/login')
      }
      console.log(status);
      return Promise.reject(err)
   })

   return axiosSecure
};

export default useAxiosSecure;