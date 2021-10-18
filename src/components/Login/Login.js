import React from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/shop'
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url)
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Sign In</h2>
                <form onSubmit=''>
                    <input type="email" placeholder='Enter your email here' />
                    <br />
                    <input type="password" placeholder='Enter password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-Jhon ? <Link to='/register'>Register</Link></p>
                <p> ____________ <sub> or </sub> ____________</p>
                <button className='btn-regular' onClick={handleGoogleSignIn}> Signin Google</button>
            </div>

        </div>
    );
};

export default Login;