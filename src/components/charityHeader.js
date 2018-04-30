import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {logoutUser} from "../actions/authActions";

class CharityHeader extends Component {

    logout(){
        this.props.dispatch(logoutUser());
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <strong> Vacuum Master </strong>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <br/>
                        <br/>
                        <LinkContainer to="/charityList">
                            <NavItem eventKey={1} disabled={!this.props.loggedIn}>Charity List </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/Charity/Get/'+ (this.props.selectedCharity ? this.props.selectedCharity._id: '')}>
                            <NavItem eventKey={2} disabled={!this.props.loggedIn}>Charity Detail</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/productList">
                            <NavItem eventKey={3} disabled={!this.props.loggedIn}>Product List </NavItem>
                        </LinkContainer>
                        <LinkContainer to={'/Product/GetAll'+ (this.props.selectedProduct ? this.props.selectedProduct._id: '')}>
                            <NavItem eventKey={4} disabled={!this.props.loggedIn}>Product Detail</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/Transaction/Save">
                            <NavItem eventKey={5} disabled={!this.props.loggedIn}> Transaction </NavItem>
                        </LinkContainer>
                        <LinkContainer to="/signin">
                            <NavItem eventKey={6}>{this.props.loggedIn ? <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <header className="App-header">
                    <h1 className="App-title">{(this.props.selectedCharitie ? this.props.selectedCharitie.Name : '')}</h1>
                </header>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        username: state.auth.username,
        selectedCharity: state.charity.selectedCharity,
        selectedProduct: state.product.selectedProduct
    }
}

export default withRouter(connect(mapStateToProps)(CharityHeader));