import React from 'react'
import MenuCards from './MenuCards'
import "./Menu.css"
import { NavLink } from 'react-router-dom'
function Menu() {
    return (
        <div className='menu'>
            <section className='menu__header'>
                <h1>This weeks specials!</h1>
                <button type='button'>
                    <NavLink to="/online-menu" className='nav-link'>
                        Online Menu
                    </NavLink>
                </button>
            </section>
            <section className='menu__items'>
                {/*menu cards */}
                <MenuCards
                    name="Greek salad"
                    price="$10.99"
                    description="Fresh and delicious Greek salad with tomatoes, cucumbers, olives, feta cheese, and Greek dressing."
                    image="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-6-1.jpg"
                />
                <MenuCards
                    name="Pasta"
                    price="$12.99"
                    description="Delicious pasta with your choice of sauce, served with garlic bread."
                    image="https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg"
                />

                <MenuCards
                    name="Grilled Fish"
                    price="$14.99"
                    description="Freshly grilled fish seasoned to perfection, served with steamed vegetables."
                    image="https://img.taste.com.au/BU7jqjpF/w720-h480-cfill-q80/taste/2016/11/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg"
                />

                <MenuCards
                    name="Lemon Dessert"
                    price="$8.99"
                    description="Zesty lemon dessert topped with whipped cream and lemon zest."
                    image="https://www.loveandoliveoil.com/wp-content/uploads/2023/03/pistachio-lemon-mousse-cakes-FEAT-1200x800.jpg"
                />
            </section>

        </div>
    )
}

export default Menu
