import React from "react";
import userContext from "./userContext";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = ({userDetails, setUserDetails}) => {

    // provides current username if one exists
    const username = React.useContext(userContext);

    // displays user's current details and a form to update details
    return (
        <div>
            <div>
                <h1>Profile</h1>
                <p>Username: {username}</p>
                <p>First name: {userDetails.firstName}</p>
                <p>Last name: {userDetails.lastName}</p>
                <p>email: {userDetails.email}</p>
                    <ProfileUpdateForm userDetails={userDetails} setUserDetails={setUserDetails} />
            </div>
        </div>
    )
}

export default Profile;