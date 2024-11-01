import useApi from "../../../getAPI";
import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import { Context } from "../../../Context/Contxt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import style from "./Sidebar.module.css"
export default function Sidepar() {
    const [sidebarOpen , setSidebarOpen] = useState(true);
    const { setIsSearch } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState("");
    const [page, setPage] = useState(1);
    const limit = 5;
    const apiURL = `https://ecommerce-node4.onrender.com/products?page=${page}&limit=${limit}&search=${searchTerm}&sort=${sortType}`;
    const [data , error, loading] = useApi(apiURL) || {}; // Safe default structure if undefined
    const numOfPages = Math.ceil((10) / limit);
    useEffect(() => {
        // Safely check for products in data
        if (data && data.products) {
            setProducts(data.products);
        }
        setIsSearch(false); // Reset search status
    }, [data]);

    // Sorting handler
    const sortpy = (type) => {
        setSortType(type);
        setPage(1); // Reset to first page on sort
        setIsSearch(true);
    };

    // Search handler
    const handleSearch = (e) => {
        e.preventDefault();
        setPage(1); // Reset to first page on search
        setIsSearch(true);
    };
    const sidebarof = (e) => {
        setSidebarOpen(false);
        setIsSearch(false); // Reset search status
        setSearchTerm(e.target.innerHTML); // Set search term
        setPage(1); // Reset to first page on search
        setIsSearch(true);
    }
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={`w-100 d-flex ${style.positon}`}>
            {sidebarOpen ?(
            <div className={`offcanvas offcanvas-start show breadcrumb mb-3 w-25 ${style.sidebar}`}   id="sidebar-wrapper"  tabIndex={-1}  aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header  breadcrumb ">
                    <h5 className="offcanvas-title" id="offcanvasLabel">Products</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{
                      sidebarof();}} />
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={handleSearch} className="d-flex align-items-center">
                        <div className="form-floating w-75">
                            <input
                                type="text"
                                className="form-control"
                                id="search"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <label htmlFor="search">Search</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg mb-3 mt-3 w-25">Search</button>
                    </form>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <p>Sort Products By</p>
                            <button className="btn btn-light" onClick={() => sortpy("categories")}>Categories</button>
                            <button className="btn btn-light" onClick={() => sortpy("name")}>Name</button>
                        </li>
                        <li className="list-group-item">
                            <p>Price</p>
                            <div className="d-flex p-2 gap">
                                <button className="btn btn-light" onClick={() => sortpy("price_asc")}>Low to High</button>
                                <button className="btn btn-light" onClick={() => sortpy("price_desc")}>High to Low</button>
                                <button className="btn btn-light" onClick={() => sortpy("discount")}>Discount</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>)  : <div className={style.search} onClick={()=>{
                setSidebarOpen(true)
            }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: "#3612a1",}}  />
            </div>
              }
            <div className="container w-75">
                <div className="title">
                    <h2 className="header">Search Results</h2>
                </div>
                <div className="row">
                    {products && products.length > 0 ? (
                        products.map((product) => (
                            <div className="col-md-4" key={product._id}>
                                <Card
                                    id={product._id}
                                    imgs={product.mainImage.secure_url}
                                    name={product.name.slice(0, 80)}
                                    description={`${product.description.slice(0, 180)}...`}
                                    price={product.price}
                                    finalPrice={product.finalPrice}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
                <div className="pagination margin-top">
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
                </div>
            </div>
        </div>
    );
}
