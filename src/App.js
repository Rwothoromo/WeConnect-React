import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Index from './components/Index';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import Layout from './components/shared/Layout';
import BusinessesList from './components/businesses/BusinessesList';
import Logout from './components/auth/Logout';

export const apiUrl = process.env.REACT_APP_BACKEND_HOST || 'http://127.0.0.1:5000/api/v2'

/**
 * All routes used in the application
 *
 * ```html
 * <Routes />
 * ```
 *
 * @returns {component} Router
 */
export const Routes = () => (
	<Router>
		<div>
			<Route exact strict path={"/"} component={Index} />
			<Route exact strict path={"/auth/register"} component={Register} />
			<Route exact strict path={"/auth/login"} component={Login} />
			<Route exact strict path={"/auth/profile"} component={Profile} />
			<Route exact strict path={"/auth/logout"} component={Logout} />
			<Route exact strict path={"/businesses"} component={BusinessesList} />
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
 *
 *  @returns {component} App
 */
const App = () => {
	return (
		<Layout>
			<Routes />
			<NotificationContainer />
		</Layout>
	);
}

export default App;
