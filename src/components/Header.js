import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://restaurant-landing.pages.dev/h_logo.png" alt="" />
            </div>

            <div className="header__right">
                <nav>
                    <ul>
                        <li> <NavLink to="/"> Home</NavLink></li>
                        <li> <NavLink to="/reserve"> Reserve</NavLink></li>
                        <li> <NavLink to="/online-menu"> Menu</NavLink></li>
                        <li> <NavLink to="/about"> About</NavLink></li>
                    </ul>
                </nav>
            </div>

        </div >
    )
}

export default Header
