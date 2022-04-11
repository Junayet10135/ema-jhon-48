import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    //const navigate = useNavigate();


    const handleNameBlur = event => {
        setName(event.target.value);
    }
   
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handleNumberBlur = event => {
        setNumber(event.target.value);
    }

    // useEffect(() => {
    //     if (user) {
    //         navigate('/shop');
    //     }
    // }, [user, navigate])

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, number};
        console.log(shipping);

    }
    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Sipping Info</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email"> Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Phone Number</label>
                        <input onBlur={handleNumberBlur} type="text" name="number" id="" required />
                    </div>
                   
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Shipment Item" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;