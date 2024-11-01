import { useFormik } from "formik"
import style from "./Forget.module.css"
import axios from "axios"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"
export default function Forgetcode() {
    const navigate = useNavigate();
    const email = localStorage.getItem("email");
    const schema =  yup.object().shape({
            email: yup.string().email().required(),
            code: yup.string().required(),
            password: yup.string().required().min(8).max(18),
        });
    const formk = useFormik({
        initialValues: {
            email:  email||'',
            password : "",
            code: '',
        },
        validate: (values) => {
            const errors = {}
            if (!values.code) {
                errors.code = 'Required'
            }
            return errors
        },
        onSubmit: onSubmit ,
        validationSchema: schema,
    })
    console.log(formk.values);
    async function onSubmit() {
        try{
            const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/verifyCode`, { email: formk.values.email, code: formk.values.code });
            console.log('verification successful:', data);
            if (data.message ==='success') {
                alert("Password reset successful, please check your email for new password");
                navigate("/login");
            }
        }catch(e) {
           console.log(e);
           alert(`error` , e.message);
        }
    }
    return (
        <section className={`breadcrumb ${style.forgetpass}`}>
            <div className={`${style.forgetBox}`}>
                <div className={`shadow mb-5 bg-white rounded ${style.databox}`}>
                    <div className="title">
                        <h1 className="header">Forget Password</h1>
                    </div>
                    <div>
                        <form className={`${style.form}`} >
                            <div className="form-floating mb-3 mt-3">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    className={`form-control ${formk.errors.email && formk.touched.email
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
                            <div className="form-floating mb-3 mt-3">
                                <input
                                    type="password"
                                    placeholder="enter new password"
                                    id="password"
                                    className={`form-control ${formk.errors.password && formk.touched.password
                                            ? "is-invalid"
                                            : !formk.errors.password && formk.touched.password
                                                ? "is-valid"
                                                : ""
                                        }`}
                                    value={formk.values.password}
                                    name="password"
                                    onBlur={formk.handleBlur}
                                    onChange={formk.handleChange}
                                />
                                <label htmlFor="password">new password</label>
                                {formk.errors.password && formk.touched.password ? (
                                    <div className="invalid-feedback">{formk.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="form-floating mb-3 mt-3">
                                <input
                                    type="text"
                                    placeholder="code"
                                    id="code"
                                    className={`form-control  ${formk.errors.password && formk.touched.password
                                            ? "is-invalid"
                                            : !formk.errors.password && formk.touched.password
                                                ? "is-valid"
                                                : ""
                                        }`}
                                    value={formk.values.code}
                                    name="code"
                                    onBlur={formk.handleBlur}
                                    onChange={formk.handleChange}
                                />
                                <label htmlFor="code">email code</label>
                            </div>
                            <input
                                type="submit"
                                className="btn purple btn-lg mb-3 mt-3 w-100"
                                value="save changes"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
