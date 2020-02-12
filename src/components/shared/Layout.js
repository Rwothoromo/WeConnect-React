import React from 'react';

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
const Layout = (props) => {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}

export default Layout;
