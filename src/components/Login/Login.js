import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    };

    if(user){
        navigate('/')
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login to continue</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {loading && <p>Loading....</p>}
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p>New to Ema-john? <Link to='/singup' className='form-link'>Create an account</Link> </p>
                <div className="hr-or">
                    <hr className='hr' />or <hr className='hr' />
                </div>

                <div className='button'>
                    <input type="button" className='google-btn' value="Continue with Google" />
                    <input type="button" className='google-btn' value="Continue with Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;