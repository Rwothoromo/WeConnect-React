import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/style.css';

import Header from './includes/header';
import Footer from './includes/footer';

const Main = () => (
    <main role="main" className="container-fluid home-bg">
        <br /><br /><br /><br />
        <div className="row col-md-12">
            <div className="row col-md-2"></div>
            <div className="row col-md-8">
                <p className="home-title">Welcome to WeConnect!</p>
                <p className="home-body">
                    WeConnect brings businesses and users together, and allows users to review businesses.
                </p>
            </div>
            <div className="row col-md-2"></div>
        </div>
    </main>
)

class Index extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
  }
}

export default Index;
