import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PollutedCities from '../containers/PollutedCities'
import Header from '../components/Header'
import Footer from '../components/Footer'

import {HEADER_TEXT, FOOTER_TEXT} from "../constants/Inscriptions";

const App = () => {
    return (
        <div>
            <Header inscription={HEADER_TEXT}/>
            <BrowserRouter>
                <Route component={PollutedCities} exact path="/"/>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
