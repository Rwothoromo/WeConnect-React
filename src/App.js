import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Index from './components/Index';
import RegisterUser from './components/auth/RegisterUser';
import LoginUser from './components/auth/LoginUser';
import ProfileUser from './components/auth/ProfileUser';
import Layout from './components/shared/Layout';
import BusinessesList from './components/businesses/BusinessesList';
import LogoutUser from './components/auth/LogoutUser';

export const apiUrl = process.env.REACT_APP_BACKEND_HOST || 'http://127.0.0.1:5000/api/v2'

/**
 * All routes used in the application
 * 
 * ```html
 * <Routes />
 * ```
 */
const Routes = () => (
	<Router>
		<div>
			<Route exact strict path={"/"} component={Index}/>
			<Route exact strict path={"/auth/register"} component={RegisterUser}/>
			<Route exact strict path={"/auth/login"} component={LoginUser}/>
			<Route exact strict path={"/auth/profile"} component={ProfileUser}/>
			<Route exact strict path={"/auth/logout"} component={LogoutUser}/>
			<Route exact strict path={"/businesses"} component={BusinessesList}/>
		</div>
	</Router>
)

/**
 * Application entry point.
 * Places all content within the `Layout`
 * 
 * ```html
 * <App />
 * ```
 */
class App extends Component {
	render() {
		return (
			<Layout>
				<Routes/>
				<NotificationContainer/>
			</Layout>
		);
	}
}

export default App;
