import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api";

// still need to fix so that user can go back to seeing all companies when clicking on NavLink for companies

const CompaniesList = () => {

    // sets initial state for companies and search term to empty/blank
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // requests data from api on all the companies and saves in state
    useEffect(function getAllCompanies() {
        async function getCompanies() {
        let allCompanies = await JoblyApi.getCompanies();
        setCompanies(allCompanies);
        }
        getCompanies();
    }, []);

    // when search terms are entered, requests data from api on companies that contain the terms and saves in state
    async function searchCompanies(searchTerm) {
            let selectedCompanies = await JoblyApi.getCompanies(searchTerm);
            setCompanies(selectedCompanies);
            setSearchTerm('');
    }

    // gets the user's search terms from the form and saves in state
    const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
    }

    // when search terms are entered and button is clicked, this calls the function to get the filtered results
    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchCompanies(searchTerm);        
    }

    // displays a list containing names and descriptions of all companies on initial load; updates to show filtered results when search terms are entered
    // displays a search bar allowing user to filter companies by name
    return (
        <div>
            <h1>Companies</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchTerm">
                <input id="searchTerm" type="text" placeholder="Enter search terms" name="searchTerm" value={searchTerm} onChange={handleChange}/></label>
                <button>Submit</button> 
            </form>            
                {companies.map(c => (<NavLink to={`/companies/${c.handle}`} key={c.handle}><CompanyCard name={c.name} description={c.description} key={c.handle} /></NavLink>))}                                                      
        </div>
    )
}

export default CompaniesList;