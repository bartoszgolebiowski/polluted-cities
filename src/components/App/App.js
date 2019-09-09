import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PollutedCities from '../../containers/PollutedCities'
import PollutionHeader from '../PollutionHeader/PollutionHeader'
import PollutionFooter from '../PollutionFooter/PollutionFooter'
import './App.css'

const App = () => {
    return (
        <div>
            <PollutionHeader/>
            <BrowserRouter>
                <Route component={PollutedCities} exact path="/"/>
            </BrowserRouter>
            <PollutionFooter/>
        </div>
    );
};

export default App;
