import React from 'react';
import '../design/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Logo from '../assets/AMZZNIA_LOGO.png';
import {Link} from 'react-router-dom';

function Header(){
    return(
      <div className = 'header'>
        {/**Logo */}
        <Link to='/'>
            <img className='header_logo' src={Logo} alt="AMZZNIA Logo"/>
        </Link>
        

        {/**Search input */}

        <div className='header_search'>
            <input className='header_search_input' type='text'/>
            <SearchIcon className='header_search_icon' alt="search icon"/>
        </div>

        {/**Nav Links */}
        <div className='header_nav'>
            <div className='header_nav_link'>
                <span className='header_nav_link_one'>
                    Hello, Guest
                </span>

                <span className='header_nav_link_two'>
                    Sign In
                </span>
            </div>

            <div className='header_nav_link'>
                <span className='header_nav_link_one'>
                    Returns
                </span>

                <span className='header_nav_link_two'>
                    & Orders
                </span>
            </div>

            <div className='header_nav_link'>
                <span className='header_nav_link_one'>
                    Your
                </span>

                <span className='header_nav_link_two'>
                    Prime
                </span>
            </div>

            {/**Cart & Counter Nav */}

            <Link to='/checkout'>
                <div className='header_cart'>
                    <ShoppingBasket/>

                    <span className='header_nav_link_two header_basketCount'>
                        0
                    </span>
                </div>
            </Link>
          
        </div>
      </div>
    );
}

export default Header;