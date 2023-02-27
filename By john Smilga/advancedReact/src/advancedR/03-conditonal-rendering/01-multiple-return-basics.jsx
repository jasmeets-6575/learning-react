import { useEffect , useState } from "react"

const multipleReturn = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },3000)
    },[])

    if(isLoading){
        return <h2>Loading</h2>
    }
    return (<h2>Multiple return basics</h2> )
}

export default multipleReturn
