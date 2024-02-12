import React, { useState } from 'react'
import './Reserve.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Reserve() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        date: '',
        guestsNumber: '',
        time: '',
        occasion: '',
        mobileNumber: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Save the form data (you can send it to a server or store it in state)

        // Navigate to a new page (you need to define the route and component for displaying the information)
        navigate('/reserve-complete', { state: { formData: formData } });
    };

    return (
        <div className='reserve'>
            <h1>When would you like to eat at Little Lemon Mediterian Restaurant?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </label>
                <label>
                    Pick a Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label>
                    Guests Number:
                    <input type="number" name="guestsNumber" value={formData.guestsNumber} onChange={handleChange} required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </label>
                <label>
                    Occasion:
                    <input type="text" name="occasion" value={formData.occasion} onChange={handleChange} required />
                </label>
                <label>
                    Mobile Number:
                    <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Reserve
