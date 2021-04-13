import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/Store/store'
import {Provider} from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './Components/HomePage/homePage';
import Header from './Components/Header/header';
const routing = (
    <Router>
        <div style={{minHeight: "100vh", display:"flex", flexDirection:"column"}}>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="*" component={"NOT FOUND"}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>,
    document.getElementById('root')
);
