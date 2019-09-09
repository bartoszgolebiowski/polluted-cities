import React from 'react';
import {shallow} from 'enzyme'
import PollutionFooter from "../PollutionFooter";
import {Layout} from 'antd';
const {Footer} = Layout;

describe('PollutionFooter component test', () => {
    let wrapper;
    it('render one <Footer>', () => {
        wrapper = shallow(<PollutionFooter/>);
        expect(wrapper.find(Footer).length).toBe(1)
    })
});
