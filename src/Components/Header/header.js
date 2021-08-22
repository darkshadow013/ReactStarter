import React from 'react';
import "./header.css"
import {Button} from "react-bootstrap";
import {store} from '../../Redux/Store/store';
class Header extends React.Component {

    render() {
        const curr = window.location.pathname;
        const activeClassName  = "nav-item nav-link active";
        const className = "nav-item nav-link";
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a href="/" className="navbar-brand"><i className="fa fa-cube"/>Doc<b>Filter</b></a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"/>
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start" style={{fontWeight: "lighter"}}>
                <div className="navbar-nav ml-auto button-arrange">
                    <a href="/" className={curr === '/'? activeClassName:className}>Home</a>
                    <a href="/addPass" className={curr === '/addPass'? activeClassName:className}>Add Password</a>
                </div>
            </div>
        </nav>
        )
    }
}

export default Header;
