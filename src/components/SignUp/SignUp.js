import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPaassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    };

    if(user){
        navigate('/')
    }

    const handleCreateUser = (event) => {
        event.preventDefault()
        if(password !== confirmPaassword){
            setError('Your two password did not match!')
            return;
        }
        if(password < 6){
            setError('Password must be 6 characters or longer!')
            return;
        };

        createUserWithEmailAndPassword(email, password)

    }




    return (
        <div className='form-container'>
            <div>
                <div>
                    <h2 className='form-title'>Please Sign Up</h2>
                </div>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" required />
                </form>
                <p>Alreadu have an account? <Link to='/login' className='form-link'>Login</Link> </p>
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

export default SignUp;