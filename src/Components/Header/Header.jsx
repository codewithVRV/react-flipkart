import './Header.css'


function Header () {
    return (
        <>
            <div className="nav-wrapper">
                <div className="left-content">
                    <h4><a href="index.html" className="text-decoration-none">Shop Cart</a> </h4>

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
                        <li><a className="dropdown-item" href="#">Login</a></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
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