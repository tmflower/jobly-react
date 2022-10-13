import React from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

// renders navigation links to allow user to move easily from feature to feature
const Navbar = ({logout}) => {
    const username = React.useContext(userContext);
    return (
        <div>
            {/* remember to get rid of inline style properties */}
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/">Home</NavLink>
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/companies">Companies</NavLink>
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/jobs">Jobs</NavLink>
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/profile">Profile</NavLink>
            { username === null ?
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/signup">Sign up</NavLink> : null}            
            { username === null ? 
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/login">Log in</NavLink>
            :
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/" onClick={logout}>Logout, {username}</NavLink>}
        </div>
    )
}

export default Navbar;