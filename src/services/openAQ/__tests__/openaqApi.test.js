import {fetchPollutionData} from "../openaqApi";

describe('openaqAPI tests', () => {
    const country = 'PL';
    const parameter = 'pm25';

    describe('fetchPollutionData', () => {
        it('check status 200', (done) => {
            fetchPollutionData(country, parameter)
                .then((res)=> expect(res['status']).toBe(200))
                .then(()=>done())
        });
        it('check results', (done) => {
            fetchPollutionData(country, parameter)
                .then((res)=> expect(res['data']['results'].length).toBeGreaterThanOrEqual(1))
                .then(()=>done())
        });
    });
});