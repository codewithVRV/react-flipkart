import { Link } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import './Authentication.css'

function Login () {
    return (
        <>
            <div className="container">
            <div className="row">
                <h2 className="home-title text-center">
                    Welcome to Shop Cart
                </h2>
            </div>

            <div className="login-wrapper" id="loginForm">
                <h4 className="text-center">Login</h4>
                {/* Auth component */}
                <Auth />
                <div className="signup-btn text-center fw-bold">
                    <Link to={'/signup'}>Dont have an Account? Sign Up Here</Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default Login;