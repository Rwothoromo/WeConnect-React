import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Index from './app/components/index';
import RegisterUser from './app/components/users/register';
import LoginUser from './app/components/users/login';
import ProfileUser from './app/components/users/profile';
import UpdateUser from './app/components/users/update';
import Layout from './app/components/includes/layout';
import RegisterBusiness from './app/components/businesses/register';
import BusinessesList from './app/components/businesses';
import ShowBusiness from './app/components/businesses/show';
import UpdateBusiness from './app/components/businesses/update';
import LogoutUser from './app/components/users/logout';

export const apiUrl = process.env.REACT_APP_BACKEND_HOST || 'http://127.0.0.1:5000/api/v2'

const Routes = () => (
	<Router>
		<div>
			<Route exact strict path={"/"} component={Index}/>
			<Route exact strict path={"/users/register"} component={RegisterUser}/>
			<Route exact strict path={"/users/login"} component={LoginUser}/>
			<Route exact strict path={"/users/profile"} component={ProfileUser}/>
			<Route exact strict path={"/users/update"} component={UpdateUser}/>
			<Route exact strict path={"/users/logout"} component={LogoutUser}/>
			<Route exact strict path={"/businesses/register"} component={RegisterBusiness}/>
			<Route exact strict path={"/businesses/index"} component={BusinessesList}/>
			<Route exact strict path={"/businesses/:id"} component={ShowBusiness}/>
			<Route exact strict path={"/businesses/update"} component={UpdateBusiness}/>
		</div>
	</Router>
)

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
