import { Link } from 'react-router-dom';
import './Header.css'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';


function Header () {

    // token is an object, setToken and removeToken are functions
    const [token, setToken, removeToken] = useCookies(['jwt-token']);

    // useEffect(() => {

    // }, [token])
    return (
        <>
            <div className="nav-wrapper">
                <div className="left-content">
                    <h4><Link to={"/"} className="text-decoration-none">Shop Cart</Link> </h4>

                    <div className="input-wrapper">
                        <input type="text" className="form-control" placeholder="Search here..." />
                    </div>
                </div>
                <div className="right-content">
                    <div>
                        <p>User name</p>
                    </div>
                    <div className="dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                        </a>
                        <ul className="dropdown-menu">
                        {token['jwt-token'] ?  <li><Link onClick={() => 
                                {
                                    removeToken('jwt-token')
                                    toast.success("Logout Successfully")
                                }
                            } className="dropdown-item" href="#">Logout</Link></li> : <li><Link to={"/login"} className="dropdown-item" href="#">Login</Link></li>}
                        

                        </ul>
                    </div>
                    <div className="cart-item">
                        <p><a href="cart.html " className="text-decoration-none text-black">Cart 4</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;