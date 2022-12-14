import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPaassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    };

    const handleCreateUser = (event) => {
        event.preventDefault()


    }
    return (
        <div className='form-container'>
            <div>
                <div>
                    <h2 className='form-title'>Shipping Information</h2>
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
                <p>Already have an account? <Link to='/login' className='form-link'>Login</Link> </p>
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

export default Shipment;