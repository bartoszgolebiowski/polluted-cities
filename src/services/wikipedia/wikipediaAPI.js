import axios from 'axios'
import {createQueryParams} from "../utils";
import {WIKIPEDIA_URL} from "../../constants/APIAdresses";

const defaultParams = {
    format: 'json',
    action: 'query',
    prop: 'extracts',
    redirects: 1,
    explaintext: ''
};

export const fetchCityDetails = (titles) => {
    const queryParams = Object.assign({}, defaultParams, {titles});
    const params = createQueryParams(queryParams);
    return axios.get(`${WIKIPEDIA_URL}&${params}`);
};

