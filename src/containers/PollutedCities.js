import React, {useState, useEffect} from "react";
import {Layout} from 'antd';

import {ERROR, OPENAQ_FETCH_ERR_MESSAGE, OPENAQ_FETCH_ERR_TITLE} from "../constants/general";
import PollutionForm from '../components/PollutionForm/PollutionForm'
import Descriptions from '../components/PollutionDescription/PollutionDescription'
import PollutionList from '../components/PollutionList/PollutionList';
import {fetchPollutionData} from '../services/openAQ/openaqApi';
import {showNotification} from "../utils/general";
import '../styles/PollutedCieties.css'

const {Content} = Layout;

const PollutedCities = () => {
    const [formData, setFormData] = useState({country: '', parameter: ''});
    const [cities, setCities] = useState([]);

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
            <div className="pollution-top">
                <Descriptions/>
                <PollutionForm
                    setFormData={setFormData}
                />
            </div>
            {cities.length !== 0 && <PollutionList
                cities={cities}
            />}
        </Content>
    )
};

export default PollutedCities;