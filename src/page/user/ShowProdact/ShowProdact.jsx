import { useParams } from "react-router-dom"
import Loading from "../../../componants/user/Loading/Loading";
import useApi from "../../../getAPI";
import { useState, useEffect } from "react";
import Offers from "../../../componants/user/Offerspart/Offers"
import ProdactData from "../../../componants/user/ProdactData/ProdactData";
import { Link } from "react-router-dom";
export default function ShowProdact() {
    const [imgs, setImgs] = useState([]);
    const { prodactid } = useParams();
    console.log(prodactid);
    // fetch data from API and render it here
    const [data, error, loading] = useApi(`https://ecommerce-node4.onrender.com/products/${prodactid}`);
    console.log(data);
    useEffect(() => {
        if (data && data.product) {
            // Set supplementary images when data is loaded
            setImgs(data.product.subImages);
        }
    }, [data]);
    console.log(imgs);
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className="container">
              <div className="breadcrumb">
              <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/cartigory/${data.product.categoryId}`}>Catigory</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
              </div>

                <ProdactData
                    id={data.product._id}
                    name={data.product.name}
                    price={data.product.price}
                    finalprice={data.product.finalprice}
                    description={data.product.description}
                    img={data.product.mainImage.secure_url}
                    sup_imgs={imgs}
                    colors={data.product.colors}
                    sizes={data.product.sizes}
                    reviews={data.product.reviews}
                />
                <Offers />
            </div>
        </>
    )
}
