import React from "react";
import {
    DESCRIPTION_1ST_ROW,
    DESCRIPTION_TITLE,
} from "../constants/general";
import '../styles/PollutionDescription.css'

const PollutionDescription = () => {
    return (
        <div className="pollution-description-container">
            <div className="pollution-description-top">
                {`${DESCRIPTION_TITLE}\n${DESCRIPTION_1ST_ROW}\n`}
            </div>
        </div>
    )
};

export default PollutionDescription;