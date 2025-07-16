// import { useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from "./useAxiosPublic";

const useMenu= ()=>{
    //  const [menu, setMenu] = useState([])
    //  const [loading, setloading] = useState(true)
     const axiosPublic = useAxiosPublic()
    
        // useEffect(() => {
        //     fetch('http://localhost:5000/menu')
        //         .then(res => res.json())
        //         .then(data => {
                   
        //             setMenu(data)
        //             setloading(false)
        //         })
        // }, [])

        const {data: menu=[],refetch, isLoading} = useQuery({
            queryKey: ['menu'],
            queryFn : async ()=>{
                const res = await axiosPublic.get('/menu')
                return res.data
            }
        })

        console.log(menu);
        console.log(refetch);
    
    return [menu,refetch,]
}

export default useMenu