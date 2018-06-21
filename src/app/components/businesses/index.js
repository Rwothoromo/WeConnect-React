import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

class BusinessesList extends Component {
	render() {
		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<div className="row weconnect-modal justify-content-md-center">
							<input type="submit" className="btn btn-default" id="add_new" name="add_new" defaultValue="Add new" />
						</div>
						<br />
						<div className="table-responsive">
							<table className="table table-striped table-bordered table-hover table-condensed">
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Category</th>
										<th>Location</th>
										<th>View</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Buyondo Hardware</td>
										<td>One stop center for building materials...</td>
										<td>Construction</td>
										<td>Kabale</td>
										<td align="center">
											<a href="">View
											</a>
										</td>
									</tr>
									<tr>
										<td>Tours</td>
										<td>Quality imported furniture for all your needs</td>
										<td>Furniture</td>
										<td>Kampala</td>
										<td align="center">
											<a href="">View
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default BusinessesList;
