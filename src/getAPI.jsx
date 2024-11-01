import axios from "axios";
import { useEffect, useState } from "react";

export default function useApi(api) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoding] = useState(true);
    const apicall = async()=>{
    try{
        const { data } = await axios.get(api);
        setData(data);
    }
    catch(error){
        setError(error.message);
    }
    finally{
        setLoding(false);
    }
    }
    useEffect(()=>{
        apicall() 
    } , [api])
    return [data , error , loading]
}
