import React, {useState, useEffect} from "react";
import {Layout} from 'antd';

import {ERROR, OPENAQ_FETCH_ERR_MESSAGE, OPENAQ_FETCH_ERR_TITLE} from "../constants/general";
import PollutionForm from '../components/PollutionForm'
import Descriptions from '../components/PollutionDescription'
import PollutionList from '../components/PollutionList';
import {fetchPollutionData} from '../services/openAQ/openaqApi';
import {showNotification} from "../utils/general";
import '../styles/PollutedCieties.css'

const {Content} = Layout;

const PollutedCities = () => {
    const [formData, setFormData] = useState({country: '', parameter: ''});
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const {country, parameter} = formData;
        country && parameter
        && fetchPollutionData(country, parameter)
            .then(res => setCities(res.data.results))
            .catch(() => showNotification(ERROR, OPENAQ_FETCH_ERR_TITLE, OPENAQ_FETCH_ERR_MESSAGE))
            .finally(() => setFormData({country: '', parameter: ''}));
    }, [formData]);

    return (
        <Content className="pollution-layout">
            <Descriptions/>
            <PollutionForm
                setFormData={setFormData}
            />
            {cities.length !== 0 && <PollutionList
                cities={cities}
            />}
        </Content>
    )
};

export default PollutedCities;