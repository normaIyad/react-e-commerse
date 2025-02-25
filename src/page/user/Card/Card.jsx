import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import style from "./Card.module.css";
import axios from 'axios';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import Total from '../../../componants/user/Total/Total';
import Loading from '../../../componants/user/Loading/Loading';
export default function Card() {
    const [products, setProducts] = useState([]);  // Initialize as an array
    const [loder, setloder] = useState(true);
    const [total, setTotal] = useState(0);
    const token = localStorage.getItem('userToken');
    const fetchOrders = async () => {
        try {
            const { data } = await axios.get(`https://ecommerce-node4.onrender.com/cart`, {
                headers: {
                    Authorization: `Tariq__${token}`
                }
            });
            setProducts(data.products);
            console.log(data.products)
        } catch (error) {
            console.error("Error fetching products", error);
        } finally {
            setloder(false);
        }
    };
    const increase = async (prodactid) => {
        try {
            const { data } = await axios.patch("https://ecommerce-node4.onrender.com/cart/incraseQuantity/", {
                productId: prodactid
            }, {
                headers: {
                    authorization: `Tariq__${token}`
                }
            });
            fetchOrders();
            console.log(data)
        } catch (error) {
            console.error("Error increasing quantity", error);
        }
    };
    async function decrease(prodactid, quantity) {
        if (quantity > 1) {
            try {
                const { data } = await axios.patch("https://ecommerce-node4.onrender.com/cart/decraseQuantity", {
                    productId: prodactid
                }, {
                    headers: {
                        authorization: `Tariq__${token}`
                    }
                });
                fetchOrders();
                console.log(data)
            }
            catch (error) {
                console.error("Error decreasing quantity", error);
            }
        }
        else {
            alert("There not quanti");
        }
    };
    async function deleteItem(prodactid) {
        const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/removeItem`, {
            productId: prodactid
        }, {
            headers: {
                Authorization: `Tariq__${token}`
            }
        });
        console.log(data);
        fetchOrders();
    }
    const deleteall = async () =>{
        try {
            const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/clear`, {}, {
                headers: {
                    authorization: `Tariq__${token}`
                }
            });
            console.log(data);
            fetchOrders();
        } catch (error) {
            console.error("Error deleting all items", error);
        }
    }
    const finalprice = (prics, quantity) => prics * quantity;
    useEffect(() => {
        fetchOrders();
    }, []);
    useEffect(() => {
        const calcolate = products.reduce((sum, prodact) => sum + finalprice(prodact.details.finalPrice, prodact.quantity), 0);
        setTotal(calcolate);
    }, [products])
    if (loder) {

        return <div className='container'><Loading /></div> 
    }
    return (
        <div>
            {products.length > 0 ? (
                <>
                 <section className="header-top breadcrumb">
                <div className="container">
                    <div className="announcement">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active " aria-current="page">
                                    Add to cart
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
                <section className="card-products">

                    <table className="table table-striped">
                        <thead className="dark">  {/* Use global class */}
                            <tr>
                                <th scope="col" className={`text-center dark ${style.padding} `}>PRODUCT DETAILS</th>
                                <th scope="col" className={`text-center dark ${style.padding} `}>PRICE</th>
                                <th scope="col" className={`text-center dark ${style.padding} `}>QUANTITY</th>
                                <th scope="col" className={`text-center dark ${style.padding} `}>SHIPPING</th>
                                <th scope="col" className={`text-center dark ${style.padding} `}>TOTAL</th>
                                <th scope="col" className={`text-center dark ${style.padding} `}>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}> {/* Use a unique key */}
                                    <td scope="row">
                                        <div className={`d-flex txt ${style.felxgap}`}>
                                            <img src={product.details.mainImage.secure_url} alt={product.details.name} className={style.img} />
                                            <div className="">
                                                <h5 className='text-break '>{product.details.name}</h5>
                                                <div>
                                                    <p className="size">Color: <span>{product.color}</span></p>
                                                    <p className="color">Size: <span>{product.size}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`text-center ${style.padding}`}>  {product.details.price === product.details.finalPrice ? product.details.price : product.details.finalPrice}  $</td> {/* Replace with product price */}
                                    <td className={`text-center ${style.padding}`}>
                                        <div className={`quantity ${style.quantity}`}>
                                            <button className={`minus ${style.buttons}`} aria-label="Decrease" onClick={() => decrease(product.productId, product.quantity)}>−</button>
                                            <span className="counter-value">{product.quantity}</span>
                                            <button className={`plus ${style.buttons}`} aria-label="Increase" onClick={() => increase(product.productId)}>+</button>
                                        </div>
                                    </td>
                                    <td className={`text-center ${style.padding}`}>free</td> {/* Adjust if needed */}
                                    <td className={`text-center ${style.padding}`}>  {finalprice(product.details.finalPrice, product.quantity)} $ </td>
                                    <td className={`text-center ${style.padding}`}>
                                        <FontAwesomeIcon icon={faTrash} style={{ color: "#076ab6", cursor: 'pointer' }} onClick={() => { deleteItem(product.productId) }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td  className="text-right">Subtotal:</td>
                                <td className="text-center" >{total}</td>
                                <td></td>
                                <td></td>
                                <td colSpan="2" className={`text-left d-flex ${style.delete} `}>
                                    <div className='d-flex justify-content-end'>
                                   <button className='btn btn-outline-danger' onClick={()=>{deleteall()}}>delete all </button>
                                   </div>
                             </td>
                             <td></td>
                           
                            </tr>
                        </tfoot>
                    </table>
                    <Total total={total} />
                </section>
                </>
            ) : (
                <div className={`container text-center 
                  `}>
                    <div className='d-flex flex-column breadcrumb'>
                    <h2 className='col-6 col-sm-3 w-100'>No products added to cart yet.</h2>
                    <Link to="/" className="btn col-6 col-sm-3 w-100 ">Go back to shop</Link>
                </div></div>
            )}
          
        </div>
    );
}
