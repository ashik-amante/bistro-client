import { useEffect, useState } from "react"

const useMenu= ()=>{
     const [menu, setMenu] = useState([])
     const [loading, setloading] = useState(true)
    
        useEffect(() => {
            fetch('menu.json')
                .then(res => res.json())
                .then(data => {
                   
                    setMenu(data)
                    setloading(false)
                })
        }, [])
    
    return [menu,loading]
}

export default useMenu