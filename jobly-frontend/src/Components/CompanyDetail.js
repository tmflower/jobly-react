import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "./JobCard";

const CompanyDetail = () => {

    // gets the company handle from URL params;
    const params = useParams();
    const handle = params.company;

    // sets initial value of company in state as null;
    const [company, setCompany] = useState(null);

    // requests data from the api for the company with the handle from the params and saves in state;
    useEffect(function getCompInfo() {
      async function getCompany() {
        let selected_company = await JoblyApi.getCompany(handle);
        setCompany(selected_company);        
      }  
      getCompany();     
    }, [handle]);

    // displays message to user if it takes time to retrieve data
    // this also prevents an error from displaying if render fails
    if (!company) return <h2>Please wait while we get your company information...</h2>
    

    return (
        <div>
            <h1>Company Detail Component</h1>
            <h2>{ company.name }</h2>
            <p>{ company.description }</p>  
            <h2>List of jobs at this company(i.e. JobCards):</h2> 
            {/* {company.jobs.map(job => (<JobCard title={job.title} company={job.companyName} salary={job.salary} equity={job.equity} key={job.id}/>))} */}
            {company.jobs.map(job => (<JobCard key={job.id} {...job}/>))}              
        </div>
    )
}

export default CompanyDetail;