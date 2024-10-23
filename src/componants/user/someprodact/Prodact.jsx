
import useApi from'../../../getAPI';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import style from './Prodact.module.css'
export default function Prodact({numofprodact}) {
    const [data, loading, error] = useApi(`https://ecommerce-node4.onrender.com/products?page=3&limit=${numofprodact}`);
    console.log(data, loading, error);
    if (loading) {
        return <Loading/>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <>
    <div className='container'>
        <div className='title'> 
        <h2 className="header">Products</h2>
        </div>    
        <div className="row">
        {data.products.map((product) => (
              <div className="col-md-4" key={product._id}>
                <Card
                  id={product._id}
                  imgs={product.mainImage.secure_url}  // Use `imgsrc` for the correct prop name
                  name={product.name.slice(0 , 40)}
                  description={""}
                  price={product.price}
                  finalPrice={product.finalPrice}
                  className={style.card}
                />
              </div>
            ))}
        </div>
    </div>
      
    </>
  )
}
