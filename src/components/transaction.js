import React, { Component} from 'react';
import { submitRegister } from '../actions/authActions';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import {submitTransactionDonate} from "../actions/TransactionActions";

class Transaction extends Component {

    constructor(){
        super();

        this.updateDetails = this.updateDetails.bind(this);
        this.transaction = this.transaction.bind(this);
        this.state = {
            details:{
                Name: '',
                Date: Date,
                Total: Number,
                CrediCard: String,
                ExpirationDate: String,
                DonationAmount: Number,
                CharityName: String,
                toggleDonate: false
            }
        };
    }

    updateDetails(event){
        let updateDetails = Object.assign({}, this.state.details);

        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    transaction(){
        const {dispatch} = this.props;
        dispatch(submitTransaction(this.state.details));
    }

    transactionDonate(){
        const {dispatch} = this.props;
        dispatch(submitTransactionDonate(this.state.details));
    }

    showDonate() {

        if (this.state.toggleDonate === true) {
            this.setState({
                toggleDonate: false
            });
        }
        else {
            this.setState({
                toggleDonate: true
            });
        }
    }

    render(){
        return (

            <Form horizontal>
                <FormGroup controlId="Name">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name:
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.name} type="text" placeholder="Name" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="CreditCard">
                    <Col componentClass={ControlLabel} sm={2}>
                        CreditCard:
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.CreditCard} type="text" placeholder="CreditCard" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="ExpirationDate">
                    <Col componentClass={ControlLabel} sm={2}>
                        Exp:
                    </Col>
                    <Col sm={10}>
                        <FormControl onChange={this.updateDetails} value={this.state.details.password} type="text" placeholder="ExpDate" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <button onClick={this.showLogin.bind(this)}>Login</button><button onClick={this.showReg.bind(this)}>Register</button>
                    { this.state.toggleReg ? <Register /> : <Login /> }
                </FormGroup>


                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick={this.register}>Transaction</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Transaction);