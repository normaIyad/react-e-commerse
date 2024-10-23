import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from "./Card.module.css";
import { Link } from 'react-router-dom';
export default function Card({ id ,  imgs, name, description, price, finalPrice }) {
  return (
    <div className={`card ${style.card} h-100`}>
      <img src={imgs} className={`card-img-top ${style.cardimgtop}`} alt={name} />
      
      <div className={`hart ${style.hart}`}>
        <FontAwesomeIcon icon={faHeart} className={`mr-3 ${style.hartsvg}`} />
      </div>
      
      <div className="card-body  align-items-center">
        <div>
          <Link to={`/prodactDeatals/${id}`} >
          <h3 className="card-text">{name}</h3>
          </Link>
          <span className="card-text">{description}</span>
        </div>
        
        <div className="card-body">
          <Link to={`/prodactDeatals/${id}`} >
          <button className="btn btn-primary btn-block">View Details</button>
          </Link>
          <span className=" btn btn-outline-secondary">
            {price === finalPrice ? (
              <span className='text-dark'>{price}$</span>
            ) : (
              <>
                <span className={`text-danger ${style.span}`}>{finalPrice}$</span>
                <span className={`badge badge-secondary mr-2 text-dark ${style.del}`} >{price}$</span>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
