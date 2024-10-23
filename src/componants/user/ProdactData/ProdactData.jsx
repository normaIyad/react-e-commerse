import style from './ProdactDats.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faComments } from '@fortawesome/free-regular-svg-icons';
import { useState , useEffect } from 'react';
import axios from 'axios';

export default function ProdactData({id , name, price, finalprice, description = "", img, sup_imgs = [], colors = [], sizes = [], reviews = [] }) {
  const [imgurl , setimgurl] = useState(img);
  console.log(id);
  useEffect(() => {
    console.log("hello world");
    setimgurl(img);
  }, [img]);
  const addtoCard = async()=>{
    const token = localStorage.getItem("userToken");
    const {data} = await axios.post("https://ecommerce-node4.onrender.com/cart/" , {
      productId: id
    } , {
      headers: {
        authorization: `Tariq__${token}`}
    });
    console.log(data);
  }
  return (
    <section className={`container ${style.mainbox}`}>
      <div className={`d-flex ${style.mainboxflex}`}>
        <div className={`${style.imgs} d-flex`}>
          <div className={`${style.supImgsContaner}`}>
            {sup_imgs && sup_imgs.length > 0 ? (
              sup_imgs.map((imgObj, index) => (
                <div key={index} className={`${style.img}`} >
                  <img src={imgObj.secure_url} alt="" className={style.img} onClick={()=>setimgurl(imgObj.secure_url)} />
                </div>
              ))
            ) : (
             null
            )}
          </div>
          <div className={`${style.mainimg}`}>
            <img src={imgurl} alt=""  className={`${style.imge1}`} />
          </div>
        </div>
        <div className={`${style.des}`}>
          <h2>{name}</h2>
          <div className='d-flex gap'>
            <div className={`starts d-flex ${style.stars}`}>
              <FontAwesomeIcon icon={faStarSolid} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStarSolid} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStarSolid} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStarSolid} style={{ color: "#FFD43B" }} />
              <FontAwesomeIcon icon={faStarRegular} style={{ color: "#FFD43B" }} />
              <span>4.5 (120 ratings)</span>
            </div>
            <div className="d-flex align-items-center gap">
              <FontAwesomeIcon icon={faComments} style={{ marginRight: "5px" }} />
              <span>120 comments</span>
            </div>
          </div>
          {colors.length > 0 && (
            <div>
              <h3>Available Colors:</h3>
              <div className={`colors d-flex gap`}>
                {colors.map((color, index) => (
                  <div key={index} className={`color d-flex `}>
                    <div className={`rounded-circle ${style.color}`} style={{ backgroundColor: color }}></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {sizes.length > 0 ? (
            <div>
              <h3>Available Sizes:</h3>
              <div className={`sizes d-flex gap`}>
                {sizes.map((size, index) => (
                  <div key={index} className={`size btn btn-outline-dark`}>{size}</div>
                ))}
              </div>
            </div>
          ) : null}
          <div className={`w-100 d-flex  ${style.boxcontainer}`}>
          <p className={`${style.pricebtn} btn btn-outline-dark price`}> $ {finalprice ?  <p className={`${style.finalprise}`}>{finalprice}</p> : null} {price}</p>
          <button className={`btn btn-primary ${style.btnaddtocard}` } onClick={()=> addtoCard()}>Add to Cart</button>
          </div>
         
        </div>
      </div>
      <section className={`d-flex ${style.mainboxflex} `}>
        <div className={style.decimg}>
          <div className='title'>
          <h2 className='header'>description</h2>
          </div>
       
          <p className='w-100'>{description.slice(0, 700)}</p>
        </div>
        <div className={`${style.decimg}`}>
          <img src={img} alt="prodact img " className='w-100' />
        </div>
     
      </section>
    </section>
  );
}
