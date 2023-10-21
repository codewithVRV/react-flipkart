import { Link } from 'react-router-dom';
import './Header.css'
import { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';
import UserContext from '../../Context/UserContext';
import CartContext from '../../Context/CartContext';
import axios from 'axios';


function Header () {

    // token is an object, setToken and removeToken are functions
    const [token, setToken, removeToken] = useCookies(['jwt-token']);
    const {user, setUser} = useContext(UserContext)
    const {cart, setCart} = useContext(CartContext)
    // console.log("userid", user.id)

    // console.log("cart")
    // console.log("user details from header", user)

    function logOut () {
        removeToken('jwt-token', {httpOnly: true})
        axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`, {withCredentials: true})
        setUser(null)
        setCart(null)
    }

    useEffect(() => {

    }, [token])
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
                        <p>{ (user) ? user.username : "User Name"}</p>
                    </div>
                    <div className="dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                        </a>
                        <ul className="dropdown-menu">
                        {token['jwt-token'] ?  <li><Link onClick={() => 
                                {
                                    logOut()
                                    toast.success("Logout Successfully")
                                }
                            } className="dropdown-item" href="#">Logout</Link></li> : <li><Link to={"/login"} className="dropdown-item" href="#">Login</Link></li>}
                        

                        </ul>
                    </div>
                    <div className="cart-item">
                     {user &&    <p><Link to={`/cart/${user ? user.id : undefined}`} className="text-decoration-none text-black">Cart {cart && cart.products && `(${cart.products.length})`}</Link></p> }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;