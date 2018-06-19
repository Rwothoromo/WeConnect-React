import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/style.css';

import Header from './header';
import Footer from './footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;
  