import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

import Index from '../index';
import RegisterUser from '../users/register';
import LoginUser from '../users/login';

const Footer = () => (
    <Router>
        <footer className="footer">
            <div className="container">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/" className="nav-link" component={Index}>Home</Link>
                    </li>
                    <li className="list-inline-item footer-menu-divider">⋅</li>
                    <li className="list-inline-item">
                        <Link to="/user/register" className="nav-link" component={RegisterUser}>Register</Link>
                    </li>
                    <li className="list-inline-item footer-menu-divider">⋅</li>
                    <li className="list-inline-item">
                        <Link to="/user/login" className="nav-link" component={LoginUser}>Login</Link>
                    </li>
                    <li className="list-inline-item footer-menu-divider">⋅</li>
                    <li className="copyright text-muted small" style={{float: 'right'}}>
                        Copyright © 2018. All Rights Reserved
                    </li>
                </ul>
            </div>
        </footer>
    </Router>
);

export default Footer;
