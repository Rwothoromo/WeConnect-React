import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

/**
 * Generate `Prev` and `Next` buttons for a paginated list
 *
 * @param {object} props Component props
 *
 * ```html
 * <Paginator prev_page={1} next_page={2} handlePageChange={handlePageChange} />
 * ```
 *
 * @returns {component} Paginator
 */
const Paginator = (props) => {
	const { prev_page, next_page, handlePageChange } = props;
	const prev = [];
	const next = [];

	if (prev_page) {
		prev.push(
			<li style={{ marginLeft: 20 }} key={prev_page} className="page-item">
				<Button className="page-link" id="prev_page"
					onClick={(event) => { handlePageChange(event, prev_page); }}>
					Prev
				</Button>
			</li>
		);
	} else {
		prev.push(
			<li key={null} style={{ marginLeft: 20 }} className="page-item disabled">
				<Button className="page-link">Prev</Button>
			</li>
		);
	}

	if (next_page) {
		next.push(
			<li key={next_page} className="page-item">
				<Button className="page-link" id="next_page"
					onClick={(event) => { handlePageChange(event, next_page); }}>
					Next
				</Button>
			</li>
		);
	} else {
		next.push(
			<li key={null} className="page-item disabled">
				<Button className="page-link">Next</Button>
			</li>
		);
	}

	return (
		<div>
			<ul className="pagination">
				{prev}&nbsp;{next}
			</ul>
		</div>
	);
};

Paginator.propTypes = {
	prev_page: PropTypes.integer.isRequired,
	next_page: PropTypes.integer.isRequired,
	handlePageChange: PropTypes.function.isRequired
};

export default Paginator;
