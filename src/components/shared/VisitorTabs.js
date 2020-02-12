import React from 'react';

/**
 * Navigation menu options for a visitor to the site
 *
 * ```html
 * <VisitorTabs />
 * ```
 */
const VisitorTabs = () => {
	return (
		<ul className="navbar-nav mr-auto">
			<li className="nav-item">
				<a href="/" className="nav-link">Home</a>
			</li>
			<li className="nav-item">
				<a href="/auth/register" className="nav-link">Register</a>
			</li>
			<li className="nav-item">
				<a href="/auth/login" className="nav-link">Login</a>
			</li>
		</ul>
	);
}

export default VisitorTabs;
