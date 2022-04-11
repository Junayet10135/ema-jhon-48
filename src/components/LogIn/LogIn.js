import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    // if (user) {
    //     navigate(from, { replace: true });
    // }

    useEffect(() => {
        if (user) {
            navigate(from, {replace:true});
        }
    }, [user, navigate, from]);

    const handleCreateUser = event => {
        event.preventDefault();

        if (password.length < 6) {

            return;

        }


        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Log In</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading.....</p>
                    }
                    <input className='form-submit' type="submit" value="Log in" />
                </form>
                <p>
                    New to ema-john? <Link to='/signup' className='form-link'>Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default LogIn;