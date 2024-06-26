import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">Cart</h1>
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
                {cart.length === 0 ? (
                    <p className="text-center">Your cart is empty</p>
                ) : (
                    <div>
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-4">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-xl font-bold">{item.title}</h2>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Total Price: ${item.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
