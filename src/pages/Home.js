import React from 'react'
import Bottom from '../components/Bottom';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonial from '../components/Testimonial';

function Home() {
    return (
        <div>
            <main>
                <section className='reserve_section'>
                    <Hero />
                </section>
                <section className='menu_section'>
                    <Menu />
                </section>
                <section className='testimonianl_section'>
                    <Testimonial />
                </section>
            </main>

        </div>
    )
}

export default Home
