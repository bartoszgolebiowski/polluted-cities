import React, {useState, useEffect} from "react";
import {Layout} from 'antd';

import {ERROR, OPENAQ_FETCH_ERR_MESSAGE, OPENAQ_FETCH_ERR_TITLE} from "../constants/general";
import PollutionDescriptions from '../components/PollutionCard/PollutionCard'
import PollutionList from '../components/PollutionList/PollutionList';
import {fetchPollutionData} from '../services/openAQ/openaqApi';
import {showNotification} from "../utils/general";
import './PollutedCities.css'

const {Content} = Layout;

const PollutedCities = (props) => {
    const formDataInit = props.formData ? props.formData : {country: '', parameter: ''};
    const citiesInit = props.cities ? props.cities : [];

    const [formData, setFormData] = useState(formDataInit);
    const [cities, setCities] = useState(citiesInit);

    useEffect(() => {
        const {country, parameter} = formData;

        country && parameter &&
        fetchPollutionData(country, parameter)
            .then(res => setCities(res.data.results))
            .catch(() => showNotification(ERROR, OPENAQ_FETCH_ERR_TITLE, OPENAQ_FETCH_ERR_MESSAGE))
            .finally(() => setFormData({country: '', parameter: ''}));
    }, [formData]);

    return (
        <Content className="pollution-layout">
            <PollutionDescriptions setFormData={setFormData}/>
            {cities.length !== 0 && <PollutionList
                cities={cities}
            />}
        </Content>
    )
};

export default PollutedCities;