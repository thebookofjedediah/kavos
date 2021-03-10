  
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

const Routes = ({ setToken }) => {
    return (
        <Switch>
            <Route exact path="/login">
                <Login setToken={setToken} />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;