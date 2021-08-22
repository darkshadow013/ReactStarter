import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/Store/store'
import {Provider} from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from './Components/HomePage/homePage';
import AddPassword from './Components/HomePage/addPassword';
import Header from './Components/Header/header';
const routing = (
    <Router>
        <div style={{minHeight: "100vh", display:"flex", flexDirection:"column"}}>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/addPass" component={AddPassword} exact />
                <Route path="*" component={<div>HI</div>}/>
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
