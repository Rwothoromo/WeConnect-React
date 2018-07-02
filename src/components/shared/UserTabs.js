import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../static/css/style.css';

class UserTabs extends Component {
	render() {
		return (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item"><a href="/" className="nav-link">Home</a></li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="" id="businessDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">Businesses</a>
					<div className="dropdown-menu" aria-labelledby="businessDropdown">
						<a className="dropdown-item" href="/businesses">View</a>
						<a className="dropdown-item" href="/businesses/register">Add</a>
					</div>
				</li>
				<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false">Account</a>
						<div className="dropdown-menu" aria-labelledby="userDropdown">
								<a className="dropdown-item" href="/auth/profile">Profile</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="/auth/logout">Logout</a>
						</div>
				</li>
			</ul>
		);
	}
}

export default UserTabs;
