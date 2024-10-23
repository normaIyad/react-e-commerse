// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../../../assets/slider/img1.jpg";
import img2 from "../../../assets/slider/img2.jpg";
import img3 from "../../../assets/slider/img3.jpg";
import img4 from "../../../assets/slider/img4.jpg";
import style from './Slider.module.css';

export default function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
     
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                  <div className={`${style.slider}`} style={{
                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${img1})`,
                  }
                  }>
                       <div className={style.textContainer}>
                     <h2 className={style.title}>New Season Collection</h2>
                        <p className={style.description}>Discover the latest trends in fashion and accessories.</p>
                        <button className="btn btn-primary btn-lg active">Shop Now</button></div>
                   
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${style.slider}`} style={{
                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${img2})`,
                  }
                  }>
                      <div className={style.textContainer}>
                     <h2 className={style.title}>Summer Sale</h2>
                        <p className={style.description}>Up to 50% off on select items. Dont miss out!</p>
                        <button className="btn btn-primary btn-lg active">Shop Now</button>
                 </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${style.slider}`} style={{
                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${img3})`,
                  }
                  }>
                       <div className={style.textContainer}>
                       <h2 className={style.title}>Exclusive Offer</h2>
                        <p className={style.description}>Get an extra 10% off your first order with code FIRST10.</p>
                        <button className="btn btn-primary btn-lg active">Shop Now</button>
                    </div></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${style.slider}`} style={{
                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${img4})`,
                  }
                  }>
                       <div className={style.textContainer}>
                        <h2 className={style.title}>New Arrivals</h2>
                        <p className={style.description}>Explore our latest collection of shoes and accessories.</p>
                        <button className="btn btn-primary btn-lg active">Shop Now</button>
                   </div></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
