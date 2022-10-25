import React, { useState } from "react";
import JoblyApi from "../../api.js";
import userContext from "./userContext";
import "./Profile.css";

// displays a form allowing user to change their profile data
const ProfileUpdateForm = ({ userDetails, setUserDetails}) => {

    const username = React.useContext(userContext);

    const initial_state = ({
        firstName: userDetails.firstName,
        lastName:  userDetails.lastName,
        email: userDetails.email,
        password: ''
    });

    // sets the intial value of each form field to the user's current data
    const [formData, setFormData] = useState(initial_state);

    // creates a variable for each field in the form
    const { firstName, lastName, email, password } = formData;

    // changes the value of each field for which data is entered
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    // creates an object containing the data entered by the user
    // calls the function from the Profile component that makes the API call to update the data in the db
    // updates the form fields with the new user details
    async function handleSubmit (evt) {
        evt.preventDefault();
        const updatedUserData = { firstName, lastName, email, password };
        const updatedUser = await JoblyApi.updateUser(username, updatedUserData);
        setUserDetails({ username, ...updatedUser });
        setFormData(initial_state);
    }

    return (
        <div>
            <form className="profile-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name:</label>
                <input
                    type="text" 
                    name="firstName" 
                    value={firstName} 
                    id="firstName" 
                    placeholder={firstName} 
                    onChange={handleChange} />
                <label htmlFor="lastName">Last name:</label>
                <input 
                    type="text" 
                    name="lastName" 
                    value={lastName} 
                    id="lastName" 
                    onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email" 
                    value={email} 
                    id="email" 
                    onChange={handleChange} />
                <label htmlFor="password">Confirm password to make changes:</label>
                <input 
                    type="text" 
                    name="password" 
                    value={password} 
                    id="password" 
                    onChange={handleChange} />
                <button className="profile-button">Submit</button>
            </form>
        </div>
    )
}

export default ProfileUpdateForm;