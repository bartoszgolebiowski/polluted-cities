import React from 'react';
import {shallow} from 'enzyme'
import {Layout} from 'antd';
import PollutedCities from "../PollutedCities";
import PollutionDescriptions from '../../components/PollutionCard/PollutionCard'
import PollutionList from '../../components/PollutionList/PollutionList'
import {mockResponse} from '../../mocks/mockResponse'

const {Content} = Layout;
const cities = mockResponse['results'];
describe('PollutedCities component test', () => {
    let wrapper;
    it('render one Content', ()=>{
        wrapper = shallow(<PollutedCities/>);
        expect(wrapper.find(Content).length).toBe(1)
    });
    it('render one PollutionDescriptions', ()=>{
        wrapper = shallow(<PollutedCities/>);
        expect(wrapper.find(PollutionDescriptions).length).toBe(1)
    });
    it('render PollutionList', ()=>{
        wrapper = shallow(<PollutedCities cities={cities}/>);
        expect(wrapper.find(PollutionList).length).toBe(1)
    });
    it('do not render PollutionList', ()=>{
        wrapper = shallow(<PollutedCities/>);
        expect(wrapper.find(PollutionList).length).toBe(0)
    });
});
