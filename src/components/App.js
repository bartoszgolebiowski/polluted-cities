import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PollutedCities from '../containers/PollutedCities'
import PollutionHeader from './PollutionHeader'
import PollutionFooter from './PollutionFooter'
import '../styles/App.css'

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
