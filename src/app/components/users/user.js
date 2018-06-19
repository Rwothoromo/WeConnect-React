import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

class User extends Component {
  render() {
    return (
      <div className="User home-bg">
        <div className="row col-md-12">
            <div className="home-title">WeConnect</div>
            <p className="home-body">
                <br /> Welcome to WeConnect!
                <br />
                <br /> WeConnect brings businesses
                <br /> and users together, and allows
                <br /> users to review businesses.
            </p>
        </div>
        <div className="row col-md-12">
            <div className="col-md-6">
                <form className="form-signin weconnect-form" action="#">
                    <div className="form-group">
                        <label className="control-label col-md-12" htmlFor style={{textAlign: 'center'}}>Login</label>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required autofocus id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-default weconnect-btn" id="login" name="login" defaultValue="Login" />
                    </div>
                </form>
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
      </div>
    );
  }
}

export default User;
