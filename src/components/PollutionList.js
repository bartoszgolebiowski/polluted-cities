import React, {useState} from "react";
import {Collapse} from 'antd';
import {array} from "prop-types";
import {fetchCityDetails} from "../services/wikipedia/wikipediaAPI";
import {showNotification} from "../utils/general";
import {ERROR, WIKIPEDIA_FETCH_ERR_MESSAGE, WIKIPEDIA_FETCH_ERR_TITLE} from "../constants/general";

const {Panel} = Collapse;

export const removeDuplicates = (cities) => {
    const citiesWithoutDuplicates = [];
    const citiesNames = new Set(cities.map(o1 => o1['city']));
    for (const cityName of citiesNames) {
        const duplicatedCities = cities
            .filter(o1 => o1['city'] === cityName)
            .map(o1 => {
                const maxValue = Math.max(...o1['measurements'].map(o1 => o1['value']));
                return {
                    location: o1['location'],
                    value: maxValue,
                }
            });
        const maxValue = Math.max(...duplicatedCities.map(o1 => o1['value']));
        const cityObject = duplicatedCities.find(o1 => o1['value'] === maxValue);
        const city = cities.find(o1 => o1['location'] === cityObject.location);
        citiesWithoutDuplicates.push(city);
    }
    return citiesWithoutDuplicates;
};
export const mostPollutedCities = (cities) => {
    return removeDuplicates(cities)
        .sort((a, b) => a['measurements'][0]['value'] - b['measurements'][0]['value'])
        .slice(0, 10);
};
export const displayCityDescription = async (panel, selected, setSelected, wikiDescription, setWikiDescription) => {
    if (!selected.includes(panel[panel.length - 1])) {
        await fetchCityDetails(panel[panel.length - 1])
            .then(res => {
                const {pages} = res['data']['query'];
                const keys = Object.keys(pages);
                return pages[keys[0]]['extract']
            })
            .then(extract => {
                const newWikiDescription = new Map(wikiDescription);
                newWikiDescription.set(panel[panel.length - 1], extract);
                setWikiDescription(newWikiDescription)
            })
            .catch(() => showNotification(ERROR, WIKIPEDIA_FETCH_ERR_TITLE, WIKIPEDIA_FETCH_ERR_MESSAGE))
            .finally(() => setSelected(panel))
    }
};

const PollutionList = (props) => {
    const [selected, setSelected] = useState([]);
    const [wikiDescription, setWikiDescription] = useState(new Map());

    return (
        <div>
            <Collapse
                onChange={(panel) => displayCityDescription(panel, selected, setSelected, wikiDescription, setWikiDescription)}>
                {mostPollutedCities(props.cities).map((o1, index) =>
                    <Panel header={o1['city']} key={o1['city']} onClick={() => setSelected(index)}>
                        {selected.includes(o1['city']) && wikiDescription.get(o1['city'])}
                    </Panel>
                )}
            </Collapse>
        </div>
    )
};

PollutionList.propTypes = {
    cities: array.isRequired
};

export default PollutionList;