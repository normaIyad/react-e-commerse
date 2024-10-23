import Card from "../Card/Card";
import useApi from '../../../getAPI';
import style from './Offers.module.css'
import Loading from "../Loading/Loading";
export default function Offers() {
  const [data, error, loading] = useApi('https://ecommerce-node4.onrender.com/products?page=1&limit=6');
  if (loading) {
      return <Loading/>
  }
 if (error) {
    return <div>Error: {error}</div>;
  }
  if (data && data.products && Array.isArray(data.products)) {
    return (
      <div className={` ${style.offers} ` }>
        <div className="container">
          <div className="title">
          <h2 className="header">Our Offers</h2>
          <p className="text-center text-danger">Some amazing offers and discounts</p>
          </div>  
          <div className="row">
            {data.products.map((product) => (
              <div className="col-md-4" key={product._id}>
                <Card
                  id={product._id}
                  imgs={product.mainImage.secure_url}  // Use `imgsrc` for the correct prop name
                  name={product.name.slice(0 , 80)}
                  description={product.description.slice(0, 180) + "..." }
                  price={product.price}
                  finalPrice={product.finalPrice}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return <div>No products available</div>;
}
