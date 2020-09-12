import React from 'react';
import '../design/Product.css';

function Product({id, title, price,image, rating}) {
    return (
        <div className='product'>
            <div className='product_info' id={id}>
                <p className='product_title'>
                    {title}
                </p>

                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <span role="img" aria-label = "">🌟</span>
                        ))}
                </div>

            </div>
            <img className='product_img' 
            src={image} 
            alt="Product Img"/>

            <button className='product_cart_btn'>Add To Cart</button>
        </div>
    )
}

export default Product
