import React, { useEffect, useState } from "react";
import userContext from "./userContext";
import JoblyApi from "../api";

// displays info about an individual job
const JobCard = ({ id, title, salary, equity, company, userDetails }) => {

    // retrieves current username
    const username = React.useContext(userContext);
    
    // saves the current user's applications in state
    const [applications, setApplications] = useState(userDetails.applications);

    // sets default values for a job to display on button
    // user will see a different color and button message depending on whether they have already applied for this job or not
    const [color, setColor] = useState('green');
    const [message, setMessage] = useState('Apply now!');
    const [applied, setApplied] = useState(false);

    // saves the user's list of applications submitted in state
    window.localStorage.setItem('applications', applications);

    // changes the values to display for a job if the user has already applied
    // runs on initial load and anytime a new application is submitted
    useEffect(() => {
        async function getJobStatus() {            
            const myApplications = window.localStorage.getItem('applications');
            if (myApplications.includes(id)) {
                setApplied(true);
                setColor('orange');
                setMessage("You've applied!");
            }
        }
        getJobStatus();
    }, [applications, id]);

    // adds the selected job to the user's array of applications
    async function addJob(username, id) {
        const newJob = await JoblyApi.addToAppliedJobs(username, id);
        setApplications({...applications, newJob});   
        setApplied(true);     
    }

    // gives user feedback if they've already applied for this job
    // otherwise, adds the job and changes the values in the button display
    // user should easily see which jobs they have applied for and which they have not
    const markApplied = () => {
        if (applied === true) {
            alert("You've already applied for this job.")
        }
        else {
            addJob(username, id);
            setColor('orange');
            setMessage("You've applied!");
        }
    }

    // displays details about a company and a button that indicates whether the user can apply for the job or already did so
    return (
        <div>
            <h3>{title}</h3>
            <h5>{company}</h5>
            <p>{salary}</p>
            <p>{equity}</p>
            <button onClick={markApplied} style={{backgroundColor: color}}>{message}</button>         
        </div>
    )
}

export default JobCard;