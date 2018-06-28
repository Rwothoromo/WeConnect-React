import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

import logo from '../../static/img/logo.PNG'
import UserTabs from './user_tabs';
import VisitorTabs from './visitor_tabs';
import { isLoggedIn } from '../../utils/helpers';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: isLoggedIn()
		}
	}

	render() {
		return (
			<header className="header">
				<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
					<a className="navbar-brand" href="">
						<img src={logo} alt="Logo" />
					</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						{
							this.state.loggedIn ? <UserTabs/> : <VisitorTabs/>
						}
					</div>
				</nav>
			</header>
		);
	}
}


export default Header;
