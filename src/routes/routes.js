import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Home from '../components/Home';
import ApiIntegration from '../components/Api';
import Dashboard from '../components/Dashboard';

const history = createBrowserHistory();

const Routes = () => (
    <BrowserRouter>
        <Switch history={history}>
            <Route exact path="/" component={Home} />
            <Route exact path="/api-integration" component={ApiIntegration} />
            <Route exact path="/ui-task" component={Dashboard} />
        </Switch>
    </BrowserRouter>
);

export default Routes;