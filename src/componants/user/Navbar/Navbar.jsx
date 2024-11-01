import { Link } from "react-router-dom";
import logo from '../../../assets/logo-regular.png';
import { faUser, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import val from './Navbar.module.css';
import { useState, useEffect, useContext } from "react";
import  {Context} from "../../../Context/Contxt"
export default function Navbar() {
    const {isLogin , userData  ,logout} = useContext(Context);
    const [backgroundcolor, setBackgroundcolor] = useState("");

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setBackgroundcolor('white');
        } else {
            setBackgroundcolor("");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <>
            <nav className="navbar navbar-expand-lg y" style={{ backgroundColor: backgroundcolor } }>
                <div className={`container-fluid ${val.gap}`}>
                    <div className="navbar-brand">
                        <img src={logo} alt="Logo" />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Navbar Links and Icons */}
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        { !isLogin ? (
                            <>
                             <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Log in</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/regester' className="nav-link">Register</Link>
                            </li> 
                            </>
                            ) : (<>
                                  <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                                 <li className="nav-item">
                                <Link to={"/allprodact"}  className="nav-link"> Prodacts</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About us</a>
                            </li>
                            <li className="nav-item">
                                    <a className="nav-link" onClick={logout}>Logout</a>
                                </li>
                            </>
                             )}    
                        </ul>
                    </div>
                    <div className={`icons d-flex align-items-center ml-2 justify-content-end ${val.gap}`}>
                      <Link to={"/profile"}> <FontAwesomeIcon icon={faUser} className="mr-3" /> 
                        {isLogin ? <span>  { userData?.userName} </span> : null}  </Link> 
                      <Link to={"/card"}> <FontAwesomeIcon icon={faCartShopping} /> </Link> 
                        <FontAwesomeIcon icon={faHeart} className="mr-3" />
                    </div>
                </div>
            </nav>
        </>
    );
}
