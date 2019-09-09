import React from 'react';
import {shallow} from 'enzyme'
import PollutionCard from "../PollutionCard";

const setFormData = () => {
};
describe('PollutionCard component test', () => {
    let wrapper;
    it('render div with classname pollution-card-container', () => {
        wrapper = shallow(<PollutionCard setFormData={setFormData}/>);
        expect(wrapper.find('div.pollution-card-container').length).toBe(1)
    });

    it('render one <Footer>', () => {
        wrapper = shallow(<PollutionCard setFormData={setFormData}/>);
        expect(wrapper.find('div.pollution-card-container').children().length).toBe(1)
    });
});
