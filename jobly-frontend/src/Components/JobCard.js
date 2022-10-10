import React, { useEffect, useState } from "react";
import { userContext } from "./userContext";
import JoblyApi from "../api";

// displays info about an individual job
const JobCard = ({ id, title, salary, equity, company }) => {

    const username = React.useContext(userContext);
    
    const [currentUser, setCurrentUser] = useState();
    const [currentJob, setCurrentJob] = useState();

    async function getUserData() {
        const userData = await JoblyApi.getUser(username);        
        console.log(userData);
        setCurrentUser(userData);
        console.log(currentUser);
    }

    async function getJob() {
        const job = await JoblyApi.getJob(id);
        console.log("**********************************")
        console.log(job);
        setCurrentJob(job);
        console.log(currentJob);
    }

    async function addJob(username, id) {
        const jobToAdd = await JoblyApi.addToAppliedJobs(username, id);
        console.log("added job:", jobToAdd)
    }

    // sets default values for apply button for each job
    const [color, setColor] = useState('green');
    const [message, setMessage] = useState('Apply Now');
    const [applied, setApplied] = useState(false);

    // changes values when user clicks to apply for selected job
    const markApplied = () => {
        if (applied === false) {
            setColor('orange');
            setMessage("You've applied!");
            addJob();
            setApplied(true);
        }
        else {
            alert("You've already applied for this job.");
        }
    }

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