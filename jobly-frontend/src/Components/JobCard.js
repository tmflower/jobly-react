import React from "react";

const JobCard = ({ title, salary, equity, company }) => {
    return (
        <div>
            <h3>{title}</h3>
            <h5>{company}</h5>
            <p>{salary}</p>
            <p>{equity}</p>
        </div>
    )
}

export default JobCard;