import {fetchCityDetails} from "../wikipediaAPI";

describe('wikipediaAPI tests', () => {
    const city = 'Warsaw';

    describe('fetchCityDetails', () => {
        it('check status 200', (done) => {
            fetchCityDetails(city)
                .then((res)=> expect(res['status']).toBe(200))
                .then(()=>done())
        });
        it('check results', (done) => {
            fetchCityDetails(city)
                .then((res)=> expect(res['data']['query']['pages']['32908']['extract'].length).toBeGreaterThanOrEqual(1))
                .then(()=>done())
        });
    });
});