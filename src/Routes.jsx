  
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Brands from './components/Brands';
import Brand from './components/Brand';
import PrivateRoute from './components/PrivateRoute';

const Routes = ({ setToken }) => {
    return (
        <Switch>
            <PrivateRoute exact path="/brands">
                <Brands />
            </PrivateRoute>
            <PrivateRoute exact path="/brands/:handle">
                <Brand />
            </PrivateRoute>
            <Route exact path="/login">
                <Login setToken={setToken} />
            </Route>
            <Route exact path="/register">
                <Register setToken={setToken} />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;