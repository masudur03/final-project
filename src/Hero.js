import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div className='hero'>
            <section>
                <article className='hero__left'>
                    <h1 className='tittle'>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>fsdafsdf sdsdfsdsdfsdsdfsdsdfsdsdfsdsdfsdsdfsdsdfsdsdf fsdf
                        sdf sdf sdf d sdf sdf sdddddd fdfsdf dfd fdsfsdfsd fsdf sdf sdf sdfsdfsdfsdfsdf</p>
                    <div class="reserve_button">
                        <button href="">Reserve a table</button>
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
