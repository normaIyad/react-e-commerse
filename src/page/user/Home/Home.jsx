import Catgrios from "../../../componants/user/Catigores/Catgrios";
import Offers from "../../../componants/user/Offerspart/Offers";
import Services from "../../../componants/user/Ourservices/Services";
import Slider from "../../../componants/user/slider/Slider";
import Prodact from "../../../componants/user/someprodact/Prodact";
import Takecare from "../../../componants/user/takecare/Takecare";
import img from '../../../assets/landing/Banner 2.jpg'
import Landing from "../../../componants/user/Landing/Landing";
export default function Home() {
  return (
    <>
      <Slider />
      <Catgrios/>
      <Services/>
      <Offers/>
      <Takecare/>
      <Prodact numofprodact={3}/>
      <Landing imgsrc={img} title={"Big Summer Sale"} para={"Commodo fames vitae vitae leo mauris in. Eu consequat."} link={"#"}/>

    </>
  );
}
