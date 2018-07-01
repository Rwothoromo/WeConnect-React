import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Index from './components/Index';
import RegisterUser from './components/auth/RegisterUser';
import LoginUser from './components/auth/LoginUser';
import ProfileUser from './components/auth/ProfileUser';
import Layout from './components/shared/Layout';
import RegisterBusiness from './components/businesses/RegisterBusiness';
import BusinessesList from './components/businesses/BusinessesList';
import ShowBusiness from './components/businesses/ShowBusiness';
import UpdateBusiness from './components/businesses/UpdateBusiness';
import LogoutUser from './components/auth/LogoutUser';
import DeleteBusiness from './components/businesses/DeleteBusiness';
import ReviewBusiness from './components/businesses/ReviewBusiness';

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
