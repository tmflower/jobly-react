import React from "react";
import { NavLink } from "react-router-dom";

// renders navigation links to allow user to move easily from feature to feature
const Navbar = () => {
    return (
        <div>
            {/* remember to get rid of inline style properties */}
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/">Home</NavLink>
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/companies">Companies</NavLink>
            {/* <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/companies/:company">Company</NavLink> */}
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/jobs">Jobs</NavLink>
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/login">Log in</NavLink>
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/signup">Sign up</NavLink>
            <NavLink style={{ display: "inline-block", margin: "1rem"}} to="/profile">Profile</NavLink>
        </div>
    )
}

export default Navbar;