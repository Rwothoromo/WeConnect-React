import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

class RegisterUser extends Component {
  render() {
    return (
        <main role="main" className="container-fluid home-bg">
            <br /><br /><br /><br />
            <div className="row col-md-12">
                <div className="col-md-6">
                    <p className="home-title">WeConnect</p>
                    <p className="home-body">
                    <br /> Welcome to WeConnect!
                    <br />
                    <br /> WeConnect brings businesses
                    <br /> and users together, and allows
                    <br /> users to review businesses.
                    </p>
                </div>
                <div className="col-md-6">
                    <form className="form-signin weconnect-form" action="#">
                        <div className="form-group">
                            <label className="control-label col-md-12" htmlFor style={{textAlign: 'center'}}>Register</label>
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
                            <input type="submit" className="btn btn-default weconnect-btn" id="register" name="register" defaultValue="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
  }
}

export default RegisterUser;