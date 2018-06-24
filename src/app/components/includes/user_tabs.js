import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../static/css/style.css';

class UserTabs extends Component {
	render() {
		return (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<a href="/" className="nav-link">Home</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="businessDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">
						Businesses
					</a>
					<div class="dropdown-menu" aria-labelledby="businessDropdown">
						<a class="dropdown-item" href="/businesses/index">View</a>
						<a class="dropdown-item" href="/businesses/register">Add</a>
					</div>
				</li>
				<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false">
								Account
						</a>
						<div class="dropdown-menu" aria-labelledby="userDropdown">
								<a class="dropdown-item" href="/users/profile">Profile</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="/users/logout">Logout</a>
						</div>
				</li>
			</ul>
		);
	}
}

export default UserTabs;
