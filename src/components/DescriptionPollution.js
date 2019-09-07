import React from "react";
import '../styles/DescriptionPollution.css'
import {string, array} from 'prop-types';


const DescriptionPollution = (props) => {
    return (
        <div>
            {props.inscription}
            {props.availableCountries}
        </div>
    )
};

DescriptionPollution.propTypes = {
    inscription: string.isRequired,
    availableCountries: array.isRequired
};

export default DescriptionPollution;