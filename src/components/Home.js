import React from 'react';
import '../design/Home.css';
import HomeBanner from '../assets/home_banner.jpg';


const Home = () => {
    return (
        <div className='home'>
            
           <div className='home_container'>
                {/**Banner Area*/}
                <img className='home_banner_img' src={HomeBanner} alt="Banner Img"/>

                {/**Product Rows*/}

                <div className='home_product_row'>
                    {/**Product*/}
                    {/**Product*/}
                </div>

                
                <div className='home_product_row'>
                    {/**Product*/}
                    {/**Product*/}
                    {/**Product*/}
                </div>

                
                <div className='home_product_row'>
                    {/**Product*/}
                    
                </div>
           </div>
        </div>
    )
}
export default Home;
