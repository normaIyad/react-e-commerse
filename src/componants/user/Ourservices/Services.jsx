import style from './Services.module.css'
import img1 from "../../../assets/svglogo/+plane.svg"
import img2 from "../../../assets/svglogo/mony.svg";
import img3 from "../../../assets/svglogo/secure.svg"
export default function Services() {
  return (
    <section className='backgroundf mt-2'>
    <div className={`container ${style.container}`}>
       <div className="d-flex p-3  justify-content-center gap">
       <div className='row justify-content-center text-center '>
        <div className={style.logo }>
         <img src={img1} alt=""  className={style.img} /> 
        </div>
       
        <h3 className='maincolor'>WORLDWIDE SHIPPING</h3>
        <p className='text-muted none'>Lorem ipsum dolor sit amet, consectetuer 
        adipiscing elit. Aenean</p> 
        </div>
        <div className='row justify-content-center text-center '>
          <div className={style.logo}>
          <img src={img2} alt=""  className={style.img}/>
          </div>
        <h3 className='maincolor'>30 DAYS GUARANTEE</h3>
        <p className='text-muted none'>Lorem ipsum dolor sit amet, consectetuer 
        adipiscing elit. Aenean</p>
        </div>
        <div className='row justify-content-center text-center '>
          <div className={style.logo} >
          <img src={img3} alt=""  className={style.img}/>
          </div>
           
            <h3 className='maincolor'>SECURED PAYMENTS</h3>
            <p className='text-muted none'>Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit. Aenean</p>
        </div>
       </div>
    </div>
    </section>
  )
}
