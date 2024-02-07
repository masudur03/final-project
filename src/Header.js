import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://littlelemonre.up.railway.app/static/img/logo.png" alt="" />
            </div>

            <div className="header__right">
                <nav>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Menu</h3>
                    <h3>Reservations</h3>
                    <h3>Order</h3>
                    <h3>Login</h3>
                </nav>
            </div>

        </div >
    )
}

export default Header
