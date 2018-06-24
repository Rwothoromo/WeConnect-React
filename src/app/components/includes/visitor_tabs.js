import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../static/css/style.css';

class VisitorTabs extends Component {
	render() {
		return (
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
		);
	}
}

export default VisitorTabs;
