import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Index from './components/index';
import RegisterUser from './components/auth/register';
import LoginUser from './components/auth/login';
import ProfileUser from './components/auth/profile';
import Layout from './components/shared/layout';
import RegisterBusiness from './components/businesses/register';
import BusinessesList from './components/businesses';
import ShowBusiness from './components/businesses/show';
import UpdateBusiness from './components/businesses/update';
import LogoutUser from './components/auth/logout';
import DeleteBusiness from './components/businesses/delete';
import ReviewBusiness from './components/businesses/review';

export const apiUrl = process.env.REACT_APP_BACKEND_HOST || 'http://127.0.0.1:5000/api/v2'

const Routes = () => (
	<Router>
		<div>
			<Route exact strict path={"/"} component={Index}/>
			<Route exact strict path={"/auth/register"} component={RegisterUser}/>
			<Route exact strict path={"/auth/login"} component={LoginUser}/>
			<Route exact strict path={"/auth/profile"} component={ProfileUser}/>
			<Route exact strict path={"/auth/logout"} component={LogoutUser}/>
			<Route exact strict path={"/businesses/register"} component={RegisterBusiness}/>
			<Route exact strict path={"/businesses/index"} component={BusinessesList}/>
			<Route exact strict path={"/businesses/show/:id"} component={ShowBusiness}/>
			<Route exact strict path={"/businesses/edit/:id"} component={UpdateBusiness}/>
			<Route exact strict path={"/businesses/delete/:id"} component={DeleteBusiness}/>
			<Route exact strict path={"/businesses/review/:id"} component={ReviewBusiness}/>
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
