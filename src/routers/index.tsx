import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/detail/:id" component={Detail}></Route>
        </Route>
    </Router>
);

export default routes;