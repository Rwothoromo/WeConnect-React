import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import Index from './app/components/index';
import RegisterUser from './app/components/users/register';
import LoginUser from './app/components/users/login';
import ProfileUser from './app/components/users/profile';
import UpdateUser from './app/components/users/update';
import Layout from './app/components/includes/layout';

const Routes = () => (
	<Router>
		<div>
			<Route exact strict path={"/"} component={Index}/>
			<Route exact strict path={"/users/register"} component={RegisterUser}/>
			<Route exact strict path={"/users/login"} component={LoginUser}/>
			<Route exact strict path={"/users/profile"} component={ProfileUser}/>
			<Route exact strict path={"/users/update"} component={UpdateUser}/>
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
