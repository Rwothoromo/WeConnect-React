import React, { Component } from 'react';

/**
 * Navigation menu options for a logged in user
 * 
 * ```html
 * <UserTabs />
 * ```
 */
class UserTabs extends Component {
	render() {
		return (
			<ul className="navbar-nav mr-auto">
				<li className="nav-item"><a href="/" className="nav-link">Home</a></li>
				<li className="nav-item"><a href="/businesses" className="nav-link">Businesses</a></li>
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
