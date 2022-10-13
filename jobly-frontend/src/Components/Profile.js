import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import userContext from "./userContext";
import ProfileUpdateForm from "./ProfileUpdateForm";

const Profile = ({userDetails, setUserDetails}) => {

    // provides current username
    const username = React.useContext(userContext);

    // sets value of current user data and any new data from the form to an empty object
    // const [userDetails, setUserDetails] = useState({});
    // const [newDetails, setNewDetails] = useState({});

    // gets data about current user from db and saves in state
    // useEffect(() => {
    //     async function getUser() {
    //         const details = await JoblyApi.getUser(username);
    //         setUserDetails({...details});
    //     }
    //     getUser();
    // }, []);


    // this function is called when user enters new profile data in the ProfileUpdateForm
    // saves this new data in state
    // const getDetailsForUpdate = (updatedUserData) => {
    //     setNewDetails({...updatedUserData });
    //     console.log('NEW DETAILS:', newDetails);
    // }

    // applies the new user data via the api into the db
    // updates the user data in state to include the new data for this user

    // useEffect(() => {
    //     async function updateUserDetails() {
    //         // const details = await JoblyApi.getUser(username);
    //         // setUserDetails({...details});
    //         // console.log('NEW DETAILS:', newDetails);
    //         if (newDetails === {}) {
    //             alert('no new details')
    //             const updatedUser = await JoblyApi.updateUser(username, newDetails);
    //             setUserDetails({ username, ...updatedUser }) 
    //         }          
    //     }
    //     updateUserDetails();
    // }, [newDetails]);


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