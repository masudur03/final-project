import React from 'react'
import Menu from '../components/Menu'
import './ReserveComplete.css'
import { useLocation } from 'react-router-dom'

function ReserveComplete() {
    const location = useLocation();
    const formData = location.state?.formData;

    return (
        <div className='reserve-complete'>
            <h1>Reservation Confirmed</h1>
            <p>See you soon at Little Lemon!</p>
            <section>
                <h2>Reservation Details</h2>
                <p>First Name: {formData?.firstName}</p>
                <p>Last Name: {formData?.lastName}</p>
                <p>Date: {formData?.date}</p>
                <p>Time: {formData?.time}</p>
                <p>Guests: {formData?.guestsNumber}</p>
                <p>Mobile Number: {formData?.mobileNumber}</p>
            </section>
            <h3>Check Out Our Menu</h3>
            <section>
                <Menu />
            </section>
        </div>
    )
}

export default ReserveComplete
