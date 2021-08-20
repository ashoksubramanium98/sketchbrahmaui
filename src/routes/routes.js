import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Home from '../components/Home';

const history = createBrowserHistory();

const Routes = () => (
    <BrowserRouter>
        <Switch history={history}>
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;