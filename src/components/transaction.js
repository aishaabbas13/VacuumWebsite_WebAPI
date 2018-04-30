import React, { Component} from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import {submitTransactionDonate} from "../actions/TransactionActions";
import {submitTransaction} from "../actions/TransactionActions";
import { connect } from 'react-redux';
//import DropdownInput from 'react-dropdown-input';
import Select from 'react-select';
import {withRouter} from "react-router-dom";

class Transaction extends Component {

    constructor(){
        super();

        this.updateDetails = this.updateDetails.bind(this);
        this.transaction = this.transaction.bind(this);
        this.transactionDonate = this.transactionDonate.bind(this);
        this.state = {
            details:{
                Name: '',
                Date: Date,
                Total: 0,
                CreditCard: '',
                ExpirationDate: '',
                DonationAmount: '',
                CharityName: ''

            },
            toggleDonate: false
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

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    updateValue (newValue) {
        this.setState({
            selectValue: newValue
        });
    }

    render(){

        var options = this.state.charities;



        const Donate = () => {
            return (

                <Select
                    ref={(ref) => { this.select = ref; }}
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                    autoFocus
                    options={options}
                    simpleValue
                    clearable
                    name="selected-state"
                    disabled={this.state.disabled}
                    value={this.state.selectValue}
                    onChange={this.updateValue}
                    rtl={this.state.rtl}
                    searchable={this.state.searchable}
                />
            );
        };


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
                        <FormControl onChange={this.updateDetails} value={this.state.details.ExpirationDate} type="text" placeholder="ExpDate" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="Charity">
                    <button onClick={this.showDonate.bind(this)}>Donate</button>
                    { this.state.toggleDonate ? <Donate charities={this.props.charities}/> : " " }
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        { this.state.toggleDonate ? <Button onClick={this.transactionDonate}>Submit</Button> : <Button onClick={this.transaction}>Submit</Button> }

                    </Col>
                </FormGroup>

            </Form>
        );

}


    const mapStateToProps = state => {
    return {
        charities: state.charity.charities
    }
}

    export default withRouter(connect(mapStateToProps)(Transaction));