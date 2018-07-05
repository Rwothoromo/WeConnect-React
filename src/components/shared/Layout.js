import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

/**
 * The `Layout` for the entire application.
 * All content is placed between the `Header` and `Footer`
 * 
 * ```html
 * <Layout />
 * ```
 */
class Layout extends Component {
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		);
	}
}

export default Layout;
