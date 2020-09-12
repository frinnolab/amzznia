import React from 'react';
import '../design/CheckoutItem.css';

const CheckoutItem = ()=>{
    return(
        <div className='checkout_item'>
            <img className='checkout_item_img'
            src={require('../assets/prod_00.jpg')}
            alt=""/>

            <div className='checkout_item_info'>
                <h2 className='checkout_item_title'>Dummy Prod Title</h2>
                <p className='checkout_item_price'>
                    <small>$</small> 
                    <strong>
                        0.99
                    </strong>
                </p>

                <div className='checkout_item_rating'>
                        <span role='img' aria-label="">🌟 </span>
                        <span role='img' aria-label="">🌟 </span>
                        <span role='img' aria-label="">🌟 </span>
                    </div>
            </div>

            <div className='checkout_item_remove'>
                <span role='img' aria-label="">❌</span>
            </div>
        </div>
    );
}


export default CheckoutItem;