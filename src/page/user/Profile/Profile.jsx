
import Getuserorder from "../../../componants/user/Getuserorders/Getuserorder";
import Imgsectionprofile from "../../../componants/user/Imgsection/Imgsectionprofile";
import  {Context} from "../../../Context/Contxt"
import { useContext } from "react";

export default function Profile() {
    const { userData } = useContext(Context);
   
  

    return (
        <section className="breadcrumb container">
            <Imgsectionprofile username={userData.userName} />
            <Getuserorder/>
        </section>
    );
}
