import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create New Account</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder='Ypur email here'/>
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password here' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter password here' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account ? <br />
                <Link to='/login'>Login</Link></p>
                <p>___________ <sub>or</sub> ___________</p>
                <button className='btn-regular'> Signin Google</button>
            </div>
        </div>
    );
};

export default Register;