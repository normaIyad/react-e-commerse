import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import style from "./Email.module.css";
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../../Context/Contxt";

export default function Email() {
    const { setsendcode} =  useContext(Context);
    const storedEmail = localStorage.getItem('email'); 
    const schema = yup.object({
        email: yup.string().email('Invalid email format').required('Email is required').label('Email'),
    });
    const formk = useFormik({
        initialValues: {
            email: storedEmail || '', 
        },
        onSubmit: async (values) => {
            try {
                const { data } = await axios.patch(
                    "https://ecommerce-node4.onrender.com/auth/sendcode",
                    { email: values.email } 
                );
                console.log(data);
                setsendcode(true);
                alert('Code sent to your email');
            } catch (e) {
                console.error(e.message);
                alert('Error sending code: ' + e.message);
            }
        },
        validationSchema: schema, 
    });

    return (
        <section className={`breadcrumb ${style.forgetpass}`}>
            <div className={`${style.forgetBox}`}>
                <div className={`shadow mb-5 bg-white rounded ${style.databox}`}>
                    <div className="title">
                        <h1 className="header">Forget Password</h1>
                    </div>

                    <div>
                        <form className={`${style.form}`} onSubmit={formk.handleSubmit}>
                            <div className="form-floating mb-3 mt-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    className={`form-control ${
                                        formk.errors.email && formk.touched.email
                                            ? "is-invalid"
                                            : !formk.errors.email && formk.touched.email
                                            ? "is-valid"
                                            : ""
                                    }`}
                                    value={formk.values.email} 
                                    name="email"
                                    onBlur={formk.handleBlur}
                                    onChange={formk.handleChange}
                                />
                                <label htmlFor="email">Email</label>
                                {formk.errors.email && formk.touched.email ? (
                                    <div className="invalid-feedback">{formk.errors.email}</div>
                                ) : null}
                            </div>
                            <input
                                type="submit"
                                className="btn purple btn-lg mb-3 mt-3 w-100"
                                value="Send code to email"
                            />
                        </form>
                        <div className="text-center">
                            <Link to="/login" className="text-primary-emphasis">
                                Back to login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
