import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Home from '../components/Home';
import Breweries from '../components/Breweries';
import IndividualBrewery from '../components/Breweries/individualBrewery';
import SearchBreweries from '../components/Breweries/search';
import Dashboard from '../components/Dashboard';

const history = createBrowserHistory();

const Routes = () => (
    <BrowserRouter>
        <Switch history={history}>
            <Route exact path="/" component={Home} />
            <Route exact path="/breweries" component={Breweries} />
            <Route exact path="/breweries/:breweryID" component={IndividualBrewery} />
            <Route exact path="/breweries/search" component={SearchBreweries} />
            <Route exact path="/ui-task" component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;