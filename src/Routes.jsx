  
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'

const Routes = ({ setToken }) => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;