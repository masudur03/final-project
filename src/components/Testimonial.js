import React from 'react'
import TestimonialCard from './TestimonialCard'
import './Testimonial.css'

function Testimonial() {
    return (
        <div className='testimonial'>
            <section className='testimonial__tittle'>
                <h1>Testimonials</h1>

            </section>
            <section className='testimonial__cards'>
                <TestimonialCard name="John Smith" rating="⭐️⭐️⭐️⭐️⭐️" comment="Absolutely loved the Grilled Fish at Little Lemon! The seasoning was perfect, and it was cooked just right. Paired it with their Lemon Dessert, and it was a match made in culinary heaven!" />
                <TestimonialCard name="Sarah Johnson" rating="⭐️⭐️⭐️⭐️⭐️" comment="Little Lemon is a hidden gem in the heart of the city! From the moment you walk in, you're greeted with warmth and hospitality. The ambiance is cozy and inviting, perfect for a romantic dinner or a casual get-together with friends." />
                <TestimonialCard name="David Martinez" rating="⭐️⭐️⭐️⭐️⭐️" comment="Little Lemon is my go-to spot for Mediterranean cuisine! The quality of the food is top-notch, with fresh ingredients and authentic flavors in every dish." />
                <TestimonialCard name="Jennifer Wilson" rating="⭐️⭐️⭐️⭐️⭐️" comment="Little Lemon Mediterranean Restaurant is a true culinary delight! The menu offers a fantastic variety of dishes, from traditional favorites to modern twists on Mediterranean classics" />
            </section>
        </div>
    )
}

export default Testimonial
