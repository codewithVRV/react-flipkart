import { Link } from 'react-router-dom';
import './Header.css'


function Header () {
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
                        <li><Link to={"/login"} className="dropdown-item" href="#">Login</Link></li>
                        <li><Link to={"/logout"} className="dropdown-item" href="#">Logout</Link></li>
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