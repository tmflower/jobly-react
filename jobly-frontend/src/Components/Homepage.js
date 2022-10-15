import React from "react";
import userContext from "./userContext";

const Homepage = () => {

    // retrieves username for new user who has just signed up
    const newUsername = window.localStorage.getItem("newUsername") || null;

    // retrieves current username if one exists
    const username = React.useContext(userContext) || null;

    // provides custom greetings for users based on status
    const notLoggedIn = "Log in or sign up today!"
    const firstTimeUser = `Welcome, ${newUsername}!`
    const returningUser = `Welcome back, ${username}!`

    let greeting;
    if (newUsername) {
        greeting = firstTimeUser;
    }
    else if (username && !newUsername) {
        greeting = returningUser;
    }
    else {
        greeting = notLoggedIn;
    }

    return (
        <div>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <h2>{greeting}</h2>
        </div>
    )
}

export default Homepage;