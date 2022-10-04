import React, { useState } from "react";

const Signup = () => {
        
    const initial_state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }
    const [formData, setFormData] = useState(initial_state);

    const { username, password, firstName, lastName, email } = formData;

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value}));
        console.log(formData);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleChange();
        setFormData(initial_state);
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                <input type="text" name="username" value={username} id="username" onChange={handleChange}></input>Username:</label>
                <label htmlFor="password">
                <input type="text" name="password" value={password} id="password" onChange={handleChange}></input>Password:</label>
                <label htmlFor="firstName">
                <input type="text" name="firstName" value={firstName} id="firstName" onChange={handleChange}></input>First name:</label>
                <label htmlFor="lastName">
                <input type="text" name="lastName" value={lastName} id="lastName" onChange={handleChange}></input>Last name:</label>
                <label htmlFor="email">
                <input type="text" name="email" value={email} id="email" onChange={handleChange}></input>Email:</label>
            </form>
            <button>Submit</button>
        </div>        
    )
}

export default Signup;