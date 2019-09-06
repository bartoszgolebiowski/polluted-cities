import axios from 'axios'
import {createQueryParams} from "../utils";

const baseURL = 'https://en.wikipedia.org/w/api.php?origin=*';

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
    return axios.get(`${baseURL}&${params}`);
};

