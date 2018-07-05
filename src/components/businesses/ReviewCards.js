import React, { Component } from 'react';

class ReviewCards extends Component {
  render() {
    const reviews_list = this.props.reviews_list;
    return (
      <div>
        <h1 className="display-6">&nbsp;&nbsp;Reviews ({reviews_list.length})</h1>
        {
          reviews_list.map((review, index) => 
            <div key={index} className="card" style={{width: 'auto', marginBottom: 10, marginLeft: 20, marginRight:20}} >
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
