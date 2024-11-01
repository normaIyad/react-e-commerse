import useApi from '../../../getAPI'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import style from './Catigories.module.css'
import Loading from '../Loading/Loading'
import { Link } from 'react-router-dom';
export default function Catgrios() {
//   const [data, loading, error] = useApi('https://ecommerce-node4.onrender.com/categories');
const [data, loading, error] = useApi('https://ecommerce-node4.onrender.com/categories');
   
  if(loading){
    return <>
    <Loading/>
    </>
  }
  if (error) {
    return (
      error
    );
  }
  return (
  <>
  <section className="container mt-2 reletive">
    <div className='title'>
      <h2 className='header'> Shop by Catgories</h2>   
    </div>
 
  <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
     {data.categories.map((category) => (
  <SwiperSlide key={category._id} className={style.SwiperSlide} >
    <Link to={ `/cartigory/${category._id}/${category.name} `} >
    <img src={category.image.secure_url} alt={category.name} className={style.img} />
    </Link>
  
  </SwiperSlide>
))}
    </Swiper>
    </section>
  </>
  )
}
