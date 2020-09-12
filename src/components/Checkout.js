import React from 'react';
import '../design/Checkout.css';
import CheckoutItem from '../components/CheckoutItem.js';

function Checkout({id, title,price,image}) {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
            {/** <img className='checkout_banner_ad' 
                src={require('../assets/home_banner.jpg')}
                alt="Banner Ad"
                /> */}

                <div className='checkout_items'>
                    <h2 className='checkout_title'>Your Cart is ready</h2>

                    <CheckoutItem/>
                </div>


            </div>

            <div className='checkout_right'>
                <h2>Checkout Right <span role='img' aria-label="">😍</span> </h2>
            </div>
            
        </div>
    )
}

export default Checkout;
