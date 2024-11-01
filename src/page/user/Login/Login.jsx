import axios from 'axios';
import  { useState } from 'react';
import style from './Login.module.css'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { useContext } from 'react';
import {Context} from '../../../Context/Contxt'
import {jwtDecode}  from 'jwt-decode';
import SweetAlert2 from 'react-sweetalert2';
export default function Login() {
  const [swalProps, setSwalProps] = useState({});
    const {setuserData , setisLogin} = useContext(Context);

  const navigate = useNavigate();
  const schema = yup.object(
    {
      email: yup.string().email().required(),
      password: yup.string().min(8).required().max(20),
    }
  );
  const formik = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      //  onsubmit: submet ,
      onSubmit: supnet,
      validationSchema: schema,

    }
  )
  async function supnet() {
    try {
   const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin `, formik.values);
        console.log(data);
      if (data.message === 'success') {
        localStorage.setItem("userToken", data.token);
        const userdata = jwtDecode(data.token);
        setuserData(userdata);
        console.log(userdata);
        triggerAlert();
        setisLogin(true);
        navigate("/home");
      }
    }
    catch (e) {
      console.error('Error:', e);
      alert("Invalid Email or Password");
      localStorage.setItem("email", formik.values.email)
    }
  }
 
  function triggerAlert() {
    setSwalProps({
      show: true,
      title: 'Login Successful',
      text: 'Welcome to the application!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  return (
    <section className={`${style.login} h-75 `}>
      <div className={`container rounded h-75`}>
        <div className={`d-flex m-auto shadow-lg bg-white rounded ${style.loginBox}`}>
          <div className={` ${style.loginForm}`}>
            <div>
              <div className='mb-3 mt-3'>
                <h2 className={`${style.hstyle } header`}>Sing In</h2>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <div className={`form-floating mb-3 mt-3 ${style.inputcontans} `}>
                    <input type="email" className={`form-control ${formik.errors.email && formik.touched.email ? "is-invalid" : !formik.errors.email && formik.touched.email ? "is-valid" : ""}`} id="email" placeholder="Enter email" name="email"
                      onChange={formik.handleChange} value={formik.email} onBlur={formik.handleBlur}
                    />
                    {
                      formik.errors.email && formik.touched.email ? <div className='invalid-feedback'>{formik.errors.email}  </div> : null
                    }
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className={`form-floating mb-3 mt-3 ${style.inputcontans} `}>
                    <input type="password" className={`form-control ${formik.errors.password && formik.touched.password ? "is-invalid" : !formik.errors.password && formik.touched.password ? "is-valid" : ""}`} id="pwd" placeholder="Enter password" name="password"
                      onChange={formik.handleChange} value={formik.password} onBlur={formik.handleBlur}
                    />{
                      formik.errors.password && formik.touched.password ? <div className='invalid-feedback'>{formik.errors.password}  </div> :null
                    }
                    <label htmlFor="pwd">Password</label>
                  </div>
                </div>
                <div>
                  <div className={`mb-3 mt-3`}>
                    <span>Forget</span> <Link className='text-primary' to={"/forgetPassword"}> your password?</Link>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg mb-3 mt-3 w-75 purple ">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div >
          <div className={` ${style.text}`}>
            <div className={` ${style.textdicoration}`}>
              <h2 className={style.hstyle}>Hello </h2>
              <p>regester with your personal details to ues all of side featurs </p>
              <Link to={'/regester'} className='btn btn-outline-light'>
                SION UP
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SweetAlert2 {...swalProps} />
    </section>
  )
}
