
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
class Header extends Component {
    render() {
        return(
        <React.Fragment> 
            <Navbar dark color="primary">
             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </Navbar>

            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cusines, and create a unique fusion experience. Our lipsmacking creations will tricle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
        );
    }

}

export default Header;