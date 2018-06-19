import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

import Index from '../index';
import RegisterUser from '../users/register';
import LoginUser from '../users/login';

const Header = () => (
    <Router>
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="">
                        <img src="../../static/img/logo.PNG" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" component={Index}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/register" className="nav-link" component={RegisterUser}>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/login" className="nav-link" component={LoginUser}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    </Router>
);

export default Header;
