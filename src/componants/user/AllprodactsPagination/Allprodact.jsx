import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import useApi from "../../../getAPI";
import { useState } from "react";
import style from "./All.module.css"
export default function Allprodact() {
    const [page, setPage] = useState(1);
    const limit = 5;
    const skip = (page - 1) * limit;  // Calculate the skip value for the API call based on the current page and limit.
    const [data, error, loading] = useApi(`https://ecommerce-node4.onrender.com/products?page=${page}&limit=5&skip=${skip}`);
    const totalpages = data?.total || 1;
    const numOfPages = Math.ceil(totalpages / limit);
    console.log(data);
    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div className="breadcrumb alert alert-danger">Error: {error}</div>;
    }
    return (
        <div>
            <section className={`prodactSection ${style.prodactSection}`} >
                    <div className="container">
                        <div className="title">
                            <h2 className="header">Products</h2>
                        </div>
                        <div className="row">
                            {data.products.map((product) => {
                                return (
                                    <div className="col-md-4" key={product._id}>
                                        <Card
                                            id={product._id}
                                            imgs={product.mainImage.secure_url}  // Use `imgsrc` for the correct prop name
                                            name={product.name.slice(0, 80)}
                                            description={product.description.slice(0, 180) + "..."}
                                            price={product.price}
                                            finalPrice={product.finalPrice}
                                        />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                            <button onClick={() => setPage(page - 1)} className="page-link">Previous</button>
                        </li>
                        
                        {[...Array(numOfPages)].map((_, i) => (
                            <li key={i} className={`page-item ${i + 1 === page ? "active" : ""}`}>
                                <button className="page-link" onClick={() => setPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                     
                        <li className={`page-item ${page === numOfPages ? "disabled" : ""}`}>
                            <button onClick={() => setPage(page + 1)} className="page-link">Next</button>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}
