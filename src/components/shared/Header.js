import React, { Component } from 'react';
import logo from '../../static/img/logo.PNG'
import UserTabs from './UserTabs';
import VisitorTabs from './VisitorTabs';
import { isLoggedIn } from '../utils/Helpers';
import Button from 'react-bootstrap/Button';

/**
 * Header
 *
 * ```html
 * <Header />
 * ```
 *
 * @returns {component} Header
 */
class Header extends Component {
	constructor() {
		super();
		this.state = {
			loggedIn: isLoggedIn()
		}
	}

	render() {
		return (
			<header className="header">
				<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
					<a className="navbar-brand" href="#!">
						<img src={logo} alt="Logo" />
					</a>
					<Button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</Button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						{
							this.state.loggedIn ? <UserTabs /> : <VisitorTabs />
						}
					</div>
				</nav>
			</header>
		);
	}
}


export default Header;
