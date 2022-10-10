import React, { useState } from "react";

// displays a form allowing user to change their profile data
const ProfileUpdateForm = ({getDetailsForUpdate, userDetails}) => {

    console.log('*******************');
    console.log(userDetails)
    // sets the intial value of each form field to the user's current data
    const [formData, setFormData] = useState({
        firstName: userDetails.firstName,
        lastName:  userDetails.lastName,
        email: userDetails.email,
        password: ''
    });

    // creates a variable for each field in the form
    const { firstName, lastName, email, password } = formData;

    // changes the value of each field for which data is entered
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({ ...formData, [name]: value}));
    }

    // creates an object containing the data entered by the user
    // calls the function from the Profile component that makes the API call to update the data in the db
    // clears the form data
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const updatedUserData = { firstName, lastName, email, password }  
        getDetailsForUpdate(updatedUserData); 
        setFormData({
            firstName: '',
            lastName:  '',
            email: '',
            password: ''
        });
    }

    return (
        <div>
            <label htmlFor="firstName">First name:
            <input type="text" name="firstName" value={firstName} id="firstName" placeholder={userDetails.firstName} onChange={handleChange}></input></label>
            <label htmlFor="lastName">Last name:
            <input type="text" name="lastName" value={lastName} id="lastName" placeholder={userDetails.lastName}onChange={handleChange}></input></label>
            <label htmlFor="email">Email:
            <input type="text" name="email" value={email} id="email" placeholder={userDetails.email}onChange={handleChange}></input></label>
            <label htmlFor="password">Confirm password to make changes:
            <input type="text" name="password" value={password} id="password" onChange={handleChange}></input></label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ProfileUpdateForm;