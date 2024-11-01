import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();
const Contextprovider = ({ children })  =>{
    const navigate = useNavigate();
    const [userData , setuserData] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [isLogin , setisLogin] = useState(localStorage.getItem('userToken') ? true : true);
    useEffect(()=>{
        const data = localStorage.getItem("userToken");
        if(data){
            setisLogin(true)
            const decodedToken = jwtDecode(data);
            setuserData(decodedToken);
        }
    },[]) ;
    function logout(){
        localStorage.removeItem('userToken');
        setisLogin(false);
        setuserData("");
        navigate("/login");
    }; 
    const [changepassword , setchangepassword] = useState(false) 
    const [sendcode , setsendcode] = useState(false)
    return(
        <Context.Provider value={{userData , setuserData , isLogin , setisLogin , logout , changepassword , setchangepassword  , sendcode , setsendcode , isSearch, setIsSearch }}>
            {children}
        </Context.Provider>
    );
};
export default Contextprovider ;