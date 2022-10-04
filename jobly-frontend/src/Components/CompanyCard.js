import React from "react";

// renders a card with name and description for a single company
const CompanyCard = ({name, description}) => {

    return (
        <div>
            <h2>{ name }</h2>
            <p>{ description }</p>
        </div>
    )
}

export default CompanyCard;