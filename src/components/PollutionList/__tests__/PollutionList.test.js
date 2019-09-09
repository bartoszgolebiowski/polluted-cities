import React from 'react';
import {Collapse} from "antd";
import {shallow} from 'enzyme'
import PollutionList from "../PollutionList";
import {
    extractValuesAndCityNames,
    findCityWithHighestMeasurementValue,
    removeDuplicates,
    mostPollutedCities,
    generateHeader,
} from '../PollutionList'
import {mockResponse, mockDuplicate, mockTop10Cities, mockTwoMasurementsCity} from '../../../mocks/mockResponse'

const {Panel} = Collapse;
const CITY_NAME = 'Bayern';
const DUPLICATED_CITY_NAME = 'Heinz Ott';
const ACCORDIAN_HEADER = '2. Manfred Lotz 21.7 µg/m³';

describe('PollutionList unit tests', () => {
    describe('extractValuesAndCityNames', () => {
        const extractValuesAndCityNamesResult = extractValuesAndCityNames(mockResponse.results, CITY_NAME);
        const extractValuesAndCityNamesResult2 = extractValuesAndCityNames(mockResponse.results, '');
        const extractValuesAndCityNamesResult3 = extractValuesAndCityNames([], CITY_NAME);
        const extractValuesAndCityNamesResult4 = extractValuesAndCityNames(mockTwoMasurementsCity.results, CITY_NAME);

        it('find all duplicates', () => {
            const quantity = mockResponse.results.filter(city => city['city'] === CITY_NAME).length;
            expect(extractValuesAndCityNamesResult.length).toBe(quantity)
        });
        it('empty city name', () => {
            expect(extractValuesAndCityNamesResult2.length).toBe(0)
        });
        it('empty cities array', () => {
            expect(extractValuesAndCityNamesResult3.length).toBe(0)
        });
        it('find highest value in measurments array', () => {
            expect(extractValuesAndCityNamesResult4[0]['value']).toBe(10)
        })
    });
    describe('findCityWithHighestMeasurementValue', () => {
        const findCityWithHighestMeasurementValueResult = findCityWithHighestMeasurementValue(mockResponse.results, mockDuplicate);
        const findCityWithHighestMeasurementValueResult2 = findCityWithHighestMeasurementValue([], mockDuplicate);
        const findCityWithHighestMeasurementValueResult3 = findCityWithHighestMeasurementValue(mockResponse.results, []);

        it('find city with highest measurement value', () => {
            expect(typeof findCityWithHighestMeasurementValueResult).toBe('object')
        });
        it('get correct highest measurement value', () => {
            expect(findCityWithHighestMeasurementValueResult['measurements'][0]['value']).toBe(35.19)
        });
        it('get correct city name', () => {
            expect(findCityWithHighestMeasurementValueResult['city']).toBe(DUPLICATED_CITY_NAME)
        });
        it('empty city array', () => {
            expect(findCityWithHighestMeasurementValueResult2).toStrictEqual({})
        });
        it('empty duplicate city array', () => {
            expect(findCityWithHighestMeasurementValueResult3).toStrictEqual({})
        });
    });
    describe('removeDuplicates', () => {
        const removeDuplicatesResult = removeDuplicates(mockResponse.results);
        const removeDuplicatesResult2 = removeDuplicates([]);
        it('remove duplicated city', () => {
            expect(removeDuplicatesResult.length).not.toBe(mockResponse.results.length)
        });
        it('check unique city names', () => {
            const cityNamesFromMock = Array.from(new Set(mockResponse.results.map(city => city['city'])));
            const cityNamesFromFunction = Array.from(new Set(removeDuplicatesResult.map(city => city['city'])));
            expect(cityNamesFromFunction).toEqual(expect.arrayContaining(cityNamesFromMock));
        });
        it('empty city array', () => {
            expect(removeDuplicatesResult2.length).toBe(0);
        });
    });
    describe('mostPollutedCities', () => {
        const mostPollutedCitiesResult = mostPollutedCities(mockResponse.results);
        const mostPollutedCitiesResult2 = mostPollutedCities([]);

        it('10 results', () => {
            expect(mostPollutedCitiesResult.length).toBe(10);
        });
        it('from highest to lowest measurement value', () => {
            expect(mostPollutedCitiesResult[0]['measurements'][0]['value'])
                .toBeGreaterThanOrEqual(mostPollutedCitiesResult[1]['measurements'][0]['value'])
        });

        it('empty city array', () => {
            expect(mostPollutedCitiesResult2.length).toBe(0);
        });
    });
    describe('generateHeader', () => {
        const generateHeaderResult = generateHeader(mockTop10Cities, 1);
        const generateHeaderResult2 = generateHeader([], 1);

        it('generate correct input', () => {
            expect(generateHeaderResult).toStrictEqual(ACCORDIAN_HEADER)
        })
        it('empty top10 array', () => {
            expect(generateHeaderResult2).toStrictEqual('')
        })
    });
});
describe('PollutionList component test', () => {
    let wrapper;
    describe('render one <Collapse>', () => {
        wrapper = shallow(<PollutionList cities={mockResponse.results}/>);
        expect(wrapper.find(Collapse).length).toBe(1)
    })
    describe('render 10 <Panel>s', () => {
        wrapper = shallow(<PollutionList cities={mockResponse.results}/>);
        expect(wrapper.find(Panel).length).toBe(10)
    })
});
