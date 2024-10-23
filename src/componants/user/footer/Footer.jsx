// import logo from 
import logo from '../../../assets/logo-regular.png';
import { Link } from "react-router-dom"
import likedin from '../../../assets/social-media/in.svg'
import social1 from '../../../assets/social-media/Vector (2).svg'
import social2 from '../../../assets/social-media/Vector (3).svg'
import social3 from '../../../assets/social-media/Vector (4).svg'
import style from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={`${style.footer}`}>
      <div className='container'>
      <div className="row">
        <div className="col">
          <img src={logo} alt="" />
          <h3>
            REGALO
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aliquid.</p>
        </div>
        <div className="col">
          <div className='row'>
          <div className='col'>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a href="#" className="nav-link">Shoes</a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">Accessories</a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">Clothing</a>
              </li>
              <li className="nav-item active">
                <a href="#" className="nav-link">Bags</a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Log in</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About us</a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src={likedin} alt="" /></a>
            <a href="#">
              <img src={social1} alt="" />
            </a>
            <a href="#">
              <img src={social2} alt="" />
            </a>
            <a href="#">
              <img src={social3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
