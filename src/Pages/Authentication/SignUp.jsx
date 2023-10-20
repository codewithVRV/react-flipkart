import { Link, useNavigate } from 'react-router-dom';
import Auth from '../../Components/Auth/Auth';
import './Authentication.css'
import axios from 'axios';
import { signup } from '../../Apis/fakeStoreProdApis';
import toast from 'react-hot-toast';
function SignUp () {
    const navigator = useNavigate()

    async function onAuthFormSubmit(authArguments, resetForm) {
        try{
            await axios.post(signup(), {
                username: authArguments.username,
                password: authArguments.password,
                email: authArguments.email,
            })
            toast.success("Succesfully Sign Up")
            navigator('/login')
        }
        catch (error) {
            console.log("error of signup", error)
            resetForm()
            toast.error("Something went wrong...")
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
                <h4 className="text-center">Sign Up</h4>
                {/* Auth component */}
                <Auth 
                
                onSubmit={onAuthFormSubmit}


                />
                <div className="signup-btn text-center fw-bold">
                    <Link to={'/login'}>Already have an Account? Login Here</Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default SignUp;