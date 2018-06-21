import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

class ShowBusiness extends Component {
	render() {
		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<div className="row weconnect-modal justify-content-md-center">
							<input type="submit" className="btn btn-default" id="add_review" name="add_review" defaultValue="Add review" />
						</div>
						<br />
						<div className="text-center text-white">
							<h1 className="display-4">Katwe Consultants</h1>
							<p className="lead">Your number one consultants on running businesses.</p>
							<p>
								<img className="rounded img-fluid" style={{width: 400, height: 'auto'}} src="../../../static/img/business.jpg" alt="Katwe Consultants" />
							</p>
							<br /><br />
							<h3>Expensive</h3>
							<p>Their services are too expensive</p>
							<p>
								<i>By: John Doe</i>
							</p>
							<br /><br />
							<h3>Amazing offers</h3>
							<p>The offers fitted exactly into our company budget</p>
							<p>
								<i>By: Jane Dinn</i>
							</p>
							<br /><br />
							<h3>Need for expansion</h3>
							<p>Management should consider expanding throughout Kampala</p>
							<p>
								<i>By: Semei Ndawula</i>
							</p>
						</div>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default ShowBusiness;
  