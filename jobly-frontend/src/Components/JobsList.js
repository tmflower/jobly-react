import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";
import { userContext } from "./userContext";
import { useNavigate } from "react-router-dom";

const JobsList = () => {

    // provides current username
    const username = React.useContext(userContext);

    // sets initial state of jobs to empty array; will be filled with data from api;
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // requests data for all jobs from api and saves in state
    useEffect(function getAllJobs() {
        async function getJobs() {
            let allJobs = await JoblyApi.getJobs();
            setJobs(allJobs);
        }
        getJobs();
    }, []);

    // when search terms are entered, requests data from api on jobs that contain the terms and saves in state
    async function searchJobs(searchTerm) {
        let selectedJobs = await JoblyApi.getJobs(searchTerm);
        setJobs(selectedJobs);
        setSearchTerm('');
}

    // gets the user's search terms from the form and saves in state
    const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
    }

    // when search terms are entered and button is clicked, this calls the function to get the filtered results
    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchJobs(searchTerm);        
    }

    // provides onClick function for button that redirects user to log in, if not logged in already
    const navigate = useNavigate();
    const forceLogin = () => {
        navigate("/login", { replace: true });
    }

    // if no logged-in user, jobs are hidden and user is prompted to login
    // if user is logged in:
    // displays a list of all the jobs displaying the title, company, salary, and equity for each job
    // displays a search bar allowing user to filter jobs by job title
    return (
        <div>
            <h1>Jobs</h1>
            { username === null ? <div><h3>You must log in to see our jobs.</h3><button onClick={forceLogin}>Log In</button></div> :
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="searchTerm">
                    <input 
                        id="searchTerm" 
                        type="text" 
                        placeholder="Enter search terms" 
                        name="searchTerm" 
                        value={searchTerm} 
                        onChange={handleChange}/></label>
                    <button>Submit</button> 
                </form> 
                <JobCard />
                {jobs.map(job => (<JobCard 
                                    id={job.id}
                                    title={job.title} 
                                    company={job.companyName} 
                                    salary={job.salary} 
                                    equity={job.equity} 
                                    key={job.id}/>))}
            </div>
            }
        </div>
    )
}

export default JobsList;