import React from 'react'
import './TestimonialCard.css'
import Avatar from '@mui/material/Avatar';

function TestimonialCard({ name, comment }) {
    return (
        <div className='testimonialcard'>
            <Avatar alt="Avatar" src="/path/to/avatar.jpg" />
            <h5>{name}</h5>
            <p>
                {comment}
            </p>
        </div>

    )
}

export default TestimonialCard
