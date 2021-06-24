import React from 'react'
import {Router, Route, IndexRoute, hasHistory} from 'react-router';

import Home from '../views/Home';
import Detail from '../views/Detail';

const routes = (
    <Router history={hasHistory}>
        <Route path="/" component={Home}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
    </Router>
);

export default routes;