import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

/**
 * The `Layout` for the entire application.
 * All content is placed between the `Header` and `Footer`
 *
 * @param {object} props
 *
 * ```html
 * <Layout />
 * ```
 *
 * @returns {component} Layout
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

Layout.propTypes = {
	children: PropTypes.array
};

export default Layout;
