import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

class UserTabs extends Component {
	render() {
		return (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a href="/" className="nav-link">Home</a>
				</li>
				<li className="nav-item">
					<a href="/businesses/index" className="nav-link">Businesses</a>
				</li>
				<li className="nav-item">
					<a href="/users/profile" className="nav-link">Profile</a>
				</li>
				<li className="nav-item">
					<a href="/users/logout" className="nav-link">Logout</a>
				</li>
			</ul>
		);
	}
}

export default UserTabs;
