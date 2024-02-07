import React from 'react'
import MenuCards from './MenuCards'
import "./Menu.css"
function Menu() {
    return (
        <div className='menu'>
            <section className='menu__header'>
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </section>
            <section className='menu__items'>
                {/*menu cards */}
                <MenuCards />
                <MenuCards />
                <MenuCards />
                <MenuCards />
            </section>

        </div>
    )
}

export default Menu
