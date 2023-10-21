import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import './Authentication.css'
import axios from 'axios';
import { signin } from '../../Apis/fakeStoreProdApis';
import toast from 'react-hot-toast';
import { useContext, useRef } from 'react';
import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode";
import UserContext from '../../Context/UserContext';
function Login () {

    const authRef = useRef()
    const navigator = useNavigate()
    const [token, setToken] = useCookies(['jwt-token'])
    const { setUser} = useContext(UserContext)

    async function onAuthFormSubmit(formDetails) {
        try{
            const response = await axios.post(signin(), {
                email: formDetails.email,
                password: formDetails.password,
                username: formDetails.username
            }, {withCredentials: true})
            const tokenDetails = jwt_decode(response.data.token)
            // console.log(tokenDetails)
            setUser({username: tokenDetails.user, id: tokenDetails.id})
            setToken('jwt-token',response.data.token, {httpOnly: true})
            navigator('/')
            toast.success("Login Successfully")
        }

        catch (error) {
            console.log("error from login", error)
            authRef.current.resetFormData()
            toast.error("Something went wrong..")
        }
    }

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
                <Auth 
                
                onSubmit={onAuthFormSubmit}
                ref={authRef}
                
                />
                <div className="signup-btn text-center fw-bold">
                    <Link to={'/signup'}>Dont have an Account? Sign Up Here</Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default Login;