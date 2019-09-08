import React from "react";
import {DESCRIPTION, COUNTRIES} from "../constants/general";


const PollutionDescription = (props) => {
    return (
        <div>
            {DESCRIPTION}
            {COUNTRIES}
        </div>
    )
};

export default PollutionDescription;