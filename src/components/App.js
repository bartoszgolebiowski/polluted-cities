import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PollutedCities from '../containers/PollutedCities'
import HeaderPollution from './HeaderPollution'
import FooterPollution from './FooterPollution'

import {HEADER_TEXT, FOOTER_TEXT} from "../constants/general";


const App = () => {
    return (
        <div>
            <HeaderPollution inscription={HEADER_TEXT}/>
            <BrowserRouter>
                <Route component={PollutedCities} exact path="/"/>
            </BrowserRouter>
            <FooterPollution inscription={FOOTER_TEXT}/>
        </div>
    );
};

export default App;
