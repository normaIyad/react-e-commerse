import axios from "axios"
import { useState, useEffect } from "react";
import style from "./Order.module.css"
import { useFormik } from "formik";
import * as yup from "yup"

import "yup-phone-lite";

export default function Order() {
    const [userinfo, setuserinfo] = useState([]);
    const [cart, setcart] = useState([]);
    const skima = yup.object({
        couponName: yup.string().required().min(5).max(12),
        address: yup.string().required(),
        phone: yup.string().phone("PS", true,"Please enter a valid phone number").required("Phone is required"),
    })
    const formk = useFormik(
        {
            initialValues: {
                couponName: "",
                address: "",
                phone: "",
            },
            onSubmit: submit,
            validationSchema: skima,
        }
    )
    console.log(formk.values)
    async function submit() {
        const token = localStorage.getItem("userToken");
        console.log(token)
        try {
            const { data } = await axios.post("https://ecommerce-node4.onrender.com/order",formk.data ,{ headers: { Authorization: `Tariq__${token}`}});
            console.log(data);
            setuserinfo(formk.values);
            alert("Order Placed Successfully")
        } catch (error) {
            console.log(error)
        }
    }
    const getcard = async () => {
        const { data } = await axios.get("https://ecommerce-node4.onrender.com/cart",
            {
                headers: {
                    authorization: `Tariq__${localStorage.getItem("userToken")}`
                }
            });
        setcart(data.products)
    }
    console.log(userinfo)
    useEffect(() => {
        getcard()
    }, [])
    return (
        <>
            <div className="container">
                <div className="row align-items-center title breadcrumb">
                    <h2 className="header  text-center">Order Form</h2>
                </div>
                <div className={`d-flex`}>
                    <div className="orderform w-50 ">
                        <form onSubmit={formk.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Order Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${formk.errors.couponName && formk.touched.couponName ? "is-invalid" : !formk.errors.couponName && formk.touched.couponName ? "is-valid" : ""}`}
                                    id="name"
                                    placeholder="Enter order Name ex(my order)"
                                    name="couponName"
                                    onChange={formk.handleChange}
                                    value={formk.values.couponName}  // Update here
                                    onBlur={formk.handleBlur}
                                    required
                                />
                                {formk.errors.couponName && formk.touched.couponName ? (
                                    <div className='invalid-feedback'>{formk.errors.couponName}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className={`form-control ${formk.errors.address && formk.touched.address ? "is-invalid" : !formk.errors.address && formk.touched.address ? "is-valid" : ""}`} id="address" placeholder="Enter Address" name="address" value={formk.address} onChange={formk.handleChange} onBlur={formk.handleBlur} required />
                                {formk.errors.address && formk.touched.address ? (<div className='invalid-feedback'>{formk.errors.address}</div>) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className={`form-control ${formk.errors.phone && formk.touched.phone ? "is-invalid" : !formk.errors.phone && formk.touched.phone ? "is-valid" : ""}`} id="phone" placeholder="Enter Phone Number" name="phone" value={formk.phone} onChange={formk.handleChange} onBlur={formk.handleBlur} required />
                                {formk.errors.phone && formk.touched.phone ? (
                                    <div className='invalid-feedback'>{formk.errors.phone}</div>
                                ) : null}
                            </div>
                            <div className={`form-group ${style.magin}`}>
                                <button type="submit" className=" form-control mt-1 btn btton mainbkcolor"> confirm order</button>
                            </div>
                        </form>
                    </div>
                    <div className="orderdata w-50">
                        <div className="row  gap">
                            {cart.map((prodact) => {
                                return <div key={prodact._id} className="d-flex">
                                    <img src={prodact.details.mainImage.secure_url} alt="" className={style.img} />
                                    <div className=" row align-items-center">
                                        <div>
                                            <h3 className={style.nameofprodact}>{prodact.details.name}</h3>
                                            <p  >{prodact.details.price}$</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}