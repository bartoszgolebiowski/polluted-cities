import React from 'react';
import {shallow} from 'enzyme'
import PollutionDescription from "../PollutionDescription";


describe('PollutionDescription component test', () => {
    let wrapper;
    it('render div with classname pollution-description-container', () => {
        wrapper = shallow(<PollutionDescription/>);
        expect(wrapper.find('div.pollution-description-container').length).toBe(1)
    });

    it('render one <Footer>', () => {
        wrapper = shallow(<PollutionDescription/>);
        expect(wrapper.find('div.pollution-description-container').children().length).toBe(1)
    });
});
