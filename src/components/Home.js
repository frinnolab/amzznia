import React from 'react';
import '../design/Home.css';
import HomeBanner from '../assets/home_banner.jpg';
import Product from '../components/Product.js';


const Home = () => {
    return (
        <div className='home'>
            
           <div className='home_container'>
                {/**Banner Area*/}
                <img className='home_banner_img' src={HomeBanner} alt="Banner Img"/>

                {/**Product Rows*/}

                <div className='home_product_row'>
                    {/**Product*/}
                    <Product title="Red Vans" price={29.99} rating={3} image={require('../assets/prod_00.jpg')}/>
                    {/**Product*/}
                    <Product title="Coco Oil Body Lotion" price={17.99} rating={2} image={require('../assets/prod_01.jpg')}/>
                </div>

                
                <div className='home_product_row'>
                    {/**Product*/}
                    <Product title="Wooden Stand" price={5.99} rating={4} image={require('../assets/prod_03.jpg')}/>

                    {/**Product*/}
                    <Product title="Channel Perfume" price={45.99} rating={4} image={require('../assets/prod_04.jpg')}/>

                    {/**Product*/}
                    <Product title="Red Chrome Nike" price={75.99} rating={5} image={require('../assets/prod_05.jpg')}/>
                </div>

                
                <div className='home_product_row'>
                    {/**Product*/}
                    <Product title="Clinique Red Lipstick" price={4.99} rating={3} image={require('../assets/prod_06.jpg')}/>
                </div>
           </div>
        </div>
    )
}
export default Home;
