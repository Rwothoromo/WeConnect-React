import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

class UpdateUser extends Component {
  render() {
	return (
		<main role="main" className="container-fluid home-bg">
			<br /><br /><br /><br />
			<div className="row col-md-12">
				<div className="col-md-2" />
				<div className="col-md-8">
					<form className="weconnect-form">
						<div className="form-group">
							<label className="control-label col-md-12" htmlFor style={{textAlign: 'center'}}>Update profile</label>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="First name" id="first_name" name="first_name" required />
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Last name" id="last_name" name="last_name" required />
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Password" id="password" name="password" required />
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="Confirm password" id="confirm_password" name="confirm_password" required />
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

export default UpdateUser;
