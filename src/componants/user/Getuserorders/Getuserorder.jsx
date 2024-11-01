import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Getuserorder.module.css"
export default function Getuserorder() {
    const [order, setOrder] = useState([]);

    const fetchOrder = async () => {
        try {
            const token = localStorage.getItem("userToken");
            if (!token) {
                console.error("User token not found in local storage.");
                return;
            }
            const { data } = await axios.get("https://ecommerce-node4.onrender.com/order/", {
                headers: {
                    authorization: `Tariq__${token}`
                }
            });

            console.log("Fetched orders:", data.orders);
            setOrder(data.orders);

        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <div>
            <h2> Orders</h2>
            <div>
                <div className="row">
                    {
                        order.length > 0 &&
                        order.map(order => (
                            <div className="w-50" key={order._id}>
                                <div className={`card ${style.row}  border-secondary mb-3`}>
                                <img className={`card-img-top ${style.img}`} src="https://e7.pngegg.com/pngimages/876/563/png-clipart-purchasing-computer-icons-purchase-order-bank-purchase-requisition-bank-blue-company.png" alt="Card image cap" />

                                    <div className="card-body">
                                        <div className="card-body  text-secondary">
                                        <p className="card-title">Order Date: {order.updatedAt}</p>
                                        <p className="card-title">Total Price: ${order.finalPrice}</p>
                                        <p className="card-title">Order State: {order.status}</p>
                                        </div>
                                     
                                    </div>
                                </div>
                           </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
