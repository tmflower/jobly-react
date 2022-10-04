import React, { useState } from "react";

const Login = () => {

    const initial_state = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(initial_state);

    const { username, password } = formData;

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        // console.log(name);
        // console.log(value);
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                <input type="text" name="username" value={username} id="username" onChange={handleChange}></input>Username:</label>
                <label htmlFor="password">
                <input type="text" name="password" value={password} id="password" onChange={handleChange}></input>Password:</label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;