import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Index from './app/components/index';
import RegisterUser from './app/components/auth/register';
import LoginUser from './app/components/auth/login';
import ProfileUser from './app/components/auth/profile';
import UpdateUser from './app/components/auth/update';
import Layout from './app/components/includes/layout';
import RegisterBusiness from './app/components/businesses/register';
import BusinessesList from './app/components/businesses';
import ShowBusiness from './app/components/businesses/show';
import UpdateBusiness from './app/components/businesses/update';
import LogoutUser from './app/components/auth/logout';
import DeleteBusiness from './app/components/businesses/delete';
import ReviewBusiness from './app/components/businesses/review';

export const apiUrl = process.env.REACT_APP_BACKEND_HOST || 'http://127.0.0.1:5000/api/v2'

const Routes = () => (
	<Router>
		<div>
			<Route exact strict path={"/"} component={Index}/>
			<Route exact strict path={"/auth/register"} component={RegisterUser}/>
			<Route exact strict path={"/auth/login"} component={LoginUser}/>
			<Route exact strict path={"/auth/profile"} component={ProfileUser}/>
			<Route exact strict path={"/auth/update"} component={UpdateUser}/>
			<Route exact strict path={"/auth/logout"} component={LogoutUser}/>
			{/* <Route exact strict path={"/auth/reset-password"} component={ResetPassword}/> */}
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
