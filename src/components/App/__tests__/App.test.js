import React from 'react';
import {shallow} from 'enzyme'
import App from "../App";
import {BrowserRouter, Route} from 'react-router-dom';
import PollutedCities from '../../../containers/PollutedCities'
import PollutionHeader from '../../PollutionHeader/PollutionHeader'
import PollutionFooter from '../../PollutionFooter/PollutionFooter'

describe('App component test', () => {
    let wrapper;

    it('render one div',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find('div').length).toBe(1)
    });

    it('render PollutionHeader',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find(PollutionHeader).length).toBe(1)
    });

    it('render BrowserRouter',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find(BrowserRouter).length).toBe(1)
    });

    it('render Route',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find(BrowserRouter).find(Route).length).toBe(1)
    });

    it('render Route component prop',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find(BrowserRouter).find(Route).props()['component']).toBe(PollutedCities)
    });

    it('render Route exact prop',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find(BrowserRouter).find(Route).props()['exact']).toBe(true)
    });

    it('render Route path prop',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find(BrowserRouter).find(Route).props()['path']).toStrictEqual("/")
    });
    it('render PollutionFooter',()=>{
        wrapper = shallow(<App/>);
        expect(wrapper.find(PollutionFooter).length).toBe(1)
    });

});
