import axios from 'axios'
import {createQueryParams} from "../utils";

const LIMIT = 1000;
const LATEST = '/latest';
const baseURL = 'https://api.openaq.org/v1';

const defaultParams = {
    limit: LIMIT
};

export const fetchPollutionData = (country, parameter) => {
    const queryParams = Object.assign({}, defaultParams, {country, parameter});
    const params = createQueryParams(queryParams);
    return axios.get(`${baseURL}${LATEST}?${params}`);
};

