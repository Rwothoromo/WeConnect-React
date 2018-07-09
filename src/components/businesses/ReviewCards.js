import React, { Component } from 'react';

/**
 * Generate a list of review cards for a business
 * 
 * @param {object} props Component props
 * @param {object} props.reviews_list Contains list of businesses
 * 
 * ```html
 * <ReviewCards reviews_list={this.props.reviews_list} />
 * ```
 */
class ReviewCards extends Component {
	render() {
		const reviews_list = this.props.reviews_list;
		return (
			<div>
				<h1 className="display-6">&nbsp;&nbsp;Reviews ({reviews_list.length})</h1>
				{
					reviews_list.map(review => 
						<div key={review.id} className="card" style={{width: 'auto', marginBottom: 10, marginLeft: 20, marginRight:20}} >
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
}

export default ReviewCards;
