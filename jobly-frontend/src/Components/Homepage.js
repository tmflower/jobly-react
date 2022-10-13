import React from "react";
import userContext from "./userContext";

const Homepage = () => {

    // provides current username
    const username = React.useContext(userContext);

    // displays welcome message;
    // if user is logged in, displays username and link to log out
    // if user is not logged in, displays prompt to log in or sign up with links for both
    return (
        <div>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            { username !== null ? <h3>Welcome back, {username}!</h3> : <h3>Log in or sign up today!</h3>}
        </div>
    )
}

export default Homepage;