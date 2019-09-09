import React from 'react';
import {shallow} from 'enzyme'
import PollutionHeader from "../PollutionHeader";
import {Layout} from 'antd';
const {Header} = Layout;

describe('PollutionHeader component test', () => {
    let wrapper;
    it('render one <Header>', () => {
        wrapper = shallow(<PollutionHeader/>);
        expect(wrapper.find(Header).length).toBe(1)
    })
});
