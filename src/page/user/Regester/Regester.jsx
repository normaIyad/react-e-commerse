import { Link, useNavigate } from 'react-router-dom'
import style from './Regester.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
import * as yup from "yup"
export default function Regester() {
    const usenav = useNavigate()
    const schema = yup.object({
      userName : yup.string().required().max(15).min(8) ,
      email : yup.string().email().required() ,
      password : yup.string().required().min(8).max(20)
    });
    const formik = useFormik({
        initialValues:{
          userName: '',
          email: '',
          password: '',
        },
        onSubmit: onsupmet , 
        validationSchema : schema , 

    });
    async function onsupmet(){
        try{
            const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`, formik.values);
            console.log('Signup successful:', data); 
            if (data.message ==='success') {
              usenav('/login');
          } 
        }
        catch (error) {
            console.log(error);
        }
    }
    console.log(formik.values);
  return (
    <section className={`${style.regester} h-75`}>
    <div className={`container rounded h-75`}>
      <div className={`d-flex m-auto shadow-lg rounded bg-white ${style.loginBox}`}> 
      <div className={`  ${style.text}`}>
        <div className={` ${style.textdicoration}`}>
        <h2 className={style.hstyle}>Hello </h2>
        <p>regester with your personal details to ues all of side featurs </p>
        <Link to={'/login'} className='btn btn-outline-light'>
          Log in
        </Link>
        </div>
      </div>
      <div className={` ${style.regesterForm}`}>
        <div>
        <div className='mb-3 mt-3'>
          <h2 className={style.hstyle}>Regester</h2>
        </div>
          <form onSubmit={formik.handleSubmit} >
            <div>
            <div className={`form-floating mb-3 mt-3 ${style.inputcontans} `}>
                <input type="text" 
                    className={`form-control ${
                      formik.touched.userName && formik.errors.userName ? 'is-invalid' : 
                      formik.touched.userName && !formik.errors.userName ? 'is-valid' : ''
                  }`}
                id="name" placeholder="full name ex(norma khsanafsah) " name="userName" 
                onChange={formik.handleChange} value={formik.userName} onBlur={formik.handleBlur}
                />
                <label htmlFor="name">full name</label>
                {
                formik.touched.userName && formik.errors.userName ?   <div className="invalid-feedback" >
          Please {formik.errors.userName} 
        </div> :   <div className="valid-feedback">
        Looks good!
      </div>
        }
              </div>
              <div className={`form-floating mb-3 mt-3 ${style.inputcontans} `}>
                <input type="email" className={`form-control ${formik.touched.email && formik.errors.email? "is-invalid" : formik.touched.email && !formik.errors.email? "is-valid" : ""}`} id="email" placeholder="Enter email" name="email" 
                 onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}
                />
                <label htmlFor="email">Email</label>
                {formik.touched.email && formik.errors.email?  ( <div className="invalid-feedback">
          Please  {formik.errors.email} 
        </div>) : (null)}
              </div>
              <div className={`form-floating mb-3 mt-3 ${style.inputcontans} `}>
                <input type="password" className={`form-control ${formik.touched.password && formik.errors.password? "is-invalid" : formik.touched.password && !formik.errors.password? "is-valid" : "" }`} id="pwd" placeholder="Enter password" name="password"
                onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}
                />
                <label htmlFor="pwd">Password</label>
                {formik.touched.password && formik.errors.password?  ( <div className="invalid-feedback">
          Please {formik.errors.password} 
        </div>) : (null)}
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-lg mb-3 mt-3 w-75 pb-2 purple">
                Regester
              </button>
            </div>
          </form>
        </div>
      </div >
   
      </div>
    </div>
  </section>
  )
}
