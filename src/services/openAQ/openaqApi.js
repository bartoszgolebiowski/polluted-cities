import axios from 'axios'
import {createQueryParams} from "../utils";
import {OPENAQ_URL} from "../../constants/APIAdresses";

const LIMIT = 1000;
const LATEST = '/latest';

const defaultParams = {
    limit: LIMIT
};

export const fetchPollutionData = (country, parameter) => {
    const queryParams = Object.assign({}, defaultParams, {country, parameter});
    const params = createQueryParams(queryParams);
    return axios.get(`${OPENAQ_URL}${LATEST}?${params}`);
};

