import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

class UpdateBusiness extends Component {
	render() {
		return (
			<main role="main" className="container-fluid other-bg">
				<br /><br /><br /><br />
				<div className="row col-md-12">
					<div className="col-md-2" />
					<div className="col-md-8 weconnect-div">
						<form className="form-signin weconnect-form">
							<div className="form-group">
								<label className="control-label col-md-12" style={{textAlign: 'center'}}>Update business</label>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Business name" id="business_name" name="business_name" required />
							</div>
							<div className="form-group">
								<textarea className="col-md-12" placeholder="Description" id="description" name="description" cols={28} rows={3} defaultValue={""} />
							</div>
							<div className="form-group">
								<select className="col-md-12" id="category" name="category">
									<option value selected>--select category--</option>
									<option value={1}>Construction</option>
									<option value={2}>Furniture</option>
								</select>
							</div>
							<div className="form-group">
								<select className="col-md-12" id="location" name="location">
									<option value selected>--select location--</option>
									<option value={1}>Kabale</option>
									<option value={2}>Kampala</option>
								</select>
							</div>
							<div className="form-group">
								<input type="submit" className="btn btn-default weconnect-btn" id="update" name="update" defaultValue="Update" />
							</div>
						</form>
					</div>
					<div className="col-md-2" />
				</div>
			</main>
		);
	}
}

export default UpdateBusiness;
  