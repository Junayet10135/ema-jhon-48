import React from 'react';
import './Orders.css'
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviweItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveProduct = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="Review-container">
                {
                    cart.map(product=><ReviewItem
                        key={product.id}
                        product = {product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                        <button>proceed Shipment </button>
                    </Link>
                </Cart>
                
            </div>
        </div>
            
    );
};

export default Orders;