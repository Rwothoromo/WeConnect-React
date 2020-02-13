import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generate a list of review cards for a business
 *
 * @param {object} props Contains list of business reviews
 *
 * ```html
 * <ReviewCards reviews_list={reviews_list} />
 * ```
 *
 * @returns {component} ReviewCards
 */
const ReviewCards = (props) => {
	const { reviews_list } = props;
	return (
		<div>
			<h1 className="display-6">&nbsp;&nbsp;Reviews ({reviews_list.length})</h1>
			{
				reviews_list.map(review =>
					<div key={review.id} className="card" style={{ width: 'auto', marginBottom: 10, marginLeft: 20, marginRight: 20 }} >
						<h5 className="card-header">{review.name}</h5>
						<div className="card-body weconnect-form">
							<p className="card-text">
								{review.description}<br />
								<b>By:</b> {review.author} <b>on</b> {review.created_at}<br />
							</p>
						</div>
					</div>
				)
			}
		</div>
	);
}

ReviewCards.propTypes = {
	reviews_list: PropTypes.array
};

export default ReviewCards;
