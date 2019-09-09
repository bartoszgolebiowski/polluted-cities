import React, {useState} from "react";
import {Collapse, Typography} from 'antd';
import PropTypes from "prop-types";
import {fetchCityDetails} from "../../services/wikipedia/wikipediaAPI";
import {showNotification} from "../../utils/general";
import {ERROR, WIKIPEDIA_FETCH_ERR_MESSAGE, WIKIPEDIA_FETCH_ERR_TITLE} from "../../constants/general";
import './PollutionList.css'

const {Panel} = Collapse;
const {Title} = Typography;
export const extractValuesAndCityNames = (cities, cityName) => {
    if (cities === undefined || cities.length === 0 || cityName === '' || cityName === undefined)
        return [];

    return cities
        .filter(city => city['city'] === cityName)
        .map(city => {
            const maxValue = Math.max(...city['measurements'].map(measurement => measurement['value']));
            return {
                location: city['location'],
                value: maxValue,
            }
        });
};

export const findCityWithHighestMeasurementValue = (cities, duplicatedCities) => {
    if (cities === undefined || duplicatedCities === undefined || cities.length === 0 || duplicatedCities.length === 0)
        return {};

    const maxValue = Math.max(...duplicatedCities.map(measurement => measurement['value']));
    const cityObject = duplicatedCities.find(measurement => measurement['value'] === maxValue);
    return cities.find(city => city['location'] === cityObject.location);
};

export const removeDuplicates = (cities) => {
    if (cities === undefined || cities.length === 0)
        return [];

    const citiesWithoutDuplicates = [];
    const citiesNames = new Set(cities.map(city => city['city']));
    for (const cityName of citiesNames) {
        const duplicatedCities = extractValuesAndCityNames(cities, cityName);
        const city = findCityWithHighestMeasurementValue(cities, duplicatedCities);
        citiesWithoutDuplicates.push(city);
    }
    return citiesWithoutDuplicates;
};

export const mostPollutedCities = (cities) => {
    if (cities === undefined || cities.length === 0)
        return [];

    return removeDuplicates(cities)
        .sort((a, b) => b['measurements'][0]['value'] - a['measurements'][0]['value'])
        .slice(0, 10);
};

export const displayCityDescription = async (panel, selected, setSelected, wikiDescription, setWikiDescription) => {
    const selectedPanel = panel[panel.length - 1];

    if (!selected.includes(selectedPanel) && selectedPanel !== undefined) {
        await fetchCityDetails(selectedPanel)
            .then(res => {
                const {pages} = res['data']['query'];
                const keys = Object.keys(pages);
                return pages[keys[0]]['extract']
            })
            .then(extract => {
                const newWikiDescription = new Map(wikiDescription);
                newWikiDescription.set(selectedPanel, extract);
                setWikiDescription(newWikiDescription)
            })
            .catch(() => showNotification(ERROR, WIKIPEDIA_FETCH_ERR_TITLE, WIKIPEDIA_FETCH_ERR_MESSAGE))
            .finally(() => setSelected(selected.concat(selectedPanel)))
    }
};

export const generateHeader = (city, ranking) => {
    if(city === undefined || city.length === 0 )
        return "";

    const cityName = city['city'];
    const parameterValue = Math.max(...city['measurements'].map(measurement => measurement['value']));
    const unit = city['measurements'][0]['unit'];
    return `${ranking + 1}. ${cityName} ${parameterValue} ${unit}`;
};

const PollutionList = (props) => {
    const [selected, setSelected] = useState([]);
    const [wikiDescription, setWikiDescription] = useState(new Map());

    return (
        <div>
            <Title className="pollution-collapse-header">Top 10 most polluted cities</Title>
            <Collapse
                onChange={(panel) => displayCityDescription(panel, selected, setSelected, wikiDescription, setWikiDescription)}>
                {mostPollutedCities(props.cities).map((city, index) =>
                    <Panel header={generateHeader(city, index)} key={city['city']}>
                        {selected.includes(city['city']) && wikiDescription.get(city['city'])}
                    </Panel>
                )}
            </Collapse>
        </div>
    )
};

PollutionList.propTypes = {
    cities: PropTypes.array.isRequired
};

export default PollutionList;