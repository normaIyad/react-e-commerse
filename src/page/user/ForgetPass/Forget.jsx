import { useContext } from "react";
import Email from "../../../componants/user/EmailforForget/Email";
import {Context} from "../../../Context/Contxt"
import Forgetcode from "../../../componants/user/ForgetCode/Forgetcode";
export default function Forget() {
     const { sendcode} = useContext(Context)
    if(sendcode){
        return  <Forgetcode/>
    }
    return (
     <>
     
     <Email/>
     </>

    )
}
