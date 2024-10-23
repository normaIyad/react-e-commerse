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
export function usePatch(api , datas , auth){
  const [data , setdata] = useState(null);
  const [error , setError] = useState(null);
  async function  patch(){
  try{
   const {data} = await axios.patch(api , {  productId: datas} , {headers: {
     authorization: `Tariq__${auth}`}
   }) ; 
   setdata(data);
  } catch(error){
   setError(error.message);
  }
}
useEffect(()=>{
    patch()
} ,[api , datas , auth] )
return [data , error ]
}