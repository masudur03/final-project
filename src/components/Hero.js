import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'
function Hero() {
    return (
        <div className='hero'>
            <section>
                <article className='hero__left'>
                    <h1 className='tittle'>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Welcome to Little Lemon - A culinary journey through the vibrant flavors of the Mediterranean. Nestled in the heart of Chicago, our restaurant invites you to experience the essence of Mediterranean cuisine in every bite. </p>
                    <div class="reserve_button">
                        <button>
                            <NavLink to="/reserve" className='nav-link'>
                                Reserve a table
                            </NavLink>
                        </button>
                    </div>
                </article>
                <article className='hero__right'>
                    <img src="https://cdn.pixabay.com/photo/2019/06/18/10/46/platting-food-4282017_640.jpg" alt="" />
                </article>
            </section>
        </div>
    )
}

export default Hero
