import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    //const navigate = useNavigate();


    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
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
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
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