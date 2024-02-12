import React from 'react'
import './MenuCards.css'

function MenuCards({ name, price, description, image }) {
    return (
        <div className='menucards'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h4 className='price'>{price}</h4>
            <p>{description}
            </p>
            <h4 className='order'>Order a delivery ♨️</h4>
        </div>
    )
}

export default MenuCards