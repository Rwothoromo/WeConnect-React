import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

import logo from '../../static/img/logo.PNG'

const Header = () => (
    <header className="header">
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="">
                <img src={logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/users/register" className="nav-link">Register</a>
                    </li>
                    <li className="nav-item">
                        <a href="/users/login" className="nav-link">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;
