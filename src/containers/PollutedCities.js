import React, {useState, useEffect} from "react";
import {Layout} from 'antd';

import {PollutionForm} from '../components/PollutionForm'
import Descriptions from '../components/DescriptionPollution'
import {COUNTRIES, DESCRIPTION} from '../constants/general'
import {fetchPollutionData} from "../services/openAQ/openaqApi";
import '../styles/PollutedCieties.css'


const PollutedCities = () => {
    const [formData, setFormData] = useState({country: '', parameter: ''});

    useEffect(() => {
        const {country, parameter} = formData;
        if(country !== '' && parameter !== ''){
            fetchPollutionData(country,parameter)
                .then(o1=>console.log(o1));
        }
    }, [formData]);

    return (
        <Layout.Content className="pollution-layout">
            <Descriptions
                inscription={DESCRIPTION}
                availableCountries={COUNTRIES}
            />
            <PollutionForm
                setFormData={setFormData}
            />
        </Layout.Content>
    )
};

export default PollutedCities;