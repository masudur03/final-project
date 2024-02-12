import React from 'react'
import './About.css'
function About() {
    return (
        <div className='about'>
            <article>
                <h1 >Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.

                    The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.

                    The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.

                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.

                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.

                    Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region.</p>
            </article>
            <div className="about__images">
                <img src="https://mohamed-safouen.github.io/Little-Limon-Restaurant/static/media/Mario_and_Adrian_B.d933878ea314d41fca77.jpg" alt="" />
                <img src="https://littlelemonre.up.railway.app/static/img/head_chef.jpg" alt="" />
            </div>
            <p>Little Lemon owners Mario and Adrian.</p>

        </div>
    )
}

export default About
