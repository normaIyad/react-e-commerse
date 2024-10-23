import takecareimg from '../../../assets/takecare/Rectangle 16.png';
import takecareimg2 from '../../../assets/takecare/Rectangle 17.png';
import takecareimg3 from '../../../assets/takecare/Rectangle 18.png';
import style from './Takecare.module.css';

export default function Takecare() {
  return (
    <section className='backgroundf w-100'>
      <div className='container mt-3'>
        <div className='row p-4'>
          <div className={`col-md-4 ${style.center}`}>
            <h2 className='maincolor'>TAKE CONTROL OF YOUR HEALTH</h2>
            <div className='card-body'>
              <p className='text-muted'>
                The Good4Me range has been formulated based on scientific & traditional evidence.
              </p>
              <p className='text-muted'>
                Our vitamins are here and ready to boost your mood, immunity, and overall well-being!
              </p>
              <p className='text-muted'>
                Made in New Zealand from local and imported ingredients.
              </p>
              <a href="#" className='btn btn-outline-secondary'>
                BROWSE OUR RANGE
              </a>
            </div>
          </div>
          <div className={`col-md-8 d-flex justify-content-center align-items-center`}>
            <div className={`d-flex gap`}>
              <div className={`${style.imageGroup} ${style.gap} `}>
                <img src={takecareimg3} alt="product" className={style.imgSize} />
                <img src={takecareimg2} alt="product" className={style.imgSize} />
              </div>
              <div className={style.imgSizeLarge}>
                <img src={takecareimg} alt="product" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
