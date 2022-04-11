import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';
//import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass , setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value);
    }

    useEffect(()=>{
        if (user) {
            navigate('/shop');
        }
    },[user , navigate])

    const handleCreateUser =event =>{
        event.preventDefault();
        if(password !== confirmPass){
            setError('Password Not Matched');
            return;
        }
        
        if(password.length < 6){
            setError('password must be more than 6 character');
            return;
            
        }
        setError('');
        createUserWithEmailAndPassword(email , password);
        
    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Sign Up</h2>
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
                        <input onBlur={handleConfirmPassBlur} type="password" name="confirm-password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already Have An Account? <Link to='/login' className='form-link'>Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;