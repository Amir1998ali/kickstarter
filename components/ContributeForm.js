import React, { Component } from 'react';
import {Form, Input, Message, Button }from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import {Router} from '../routes';
// balance reported is in ether! because we want them to pay in ether
// instead of 10^5 ether
class ContributeForm extends Component {
    // get the address from the url and communicate it down with ContributeForm
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };

    // event is an object used to call the function
    onSubmit = async event => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        this.setState({loading:true, errorMessage:''})
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            
            //without user getting back and see the same page
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        // spin stops
        this.setState({ loading: false, value: ''})
    };
    render () {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                        <Input 
                            value={this.state.value}
                            onChange={event=>this.setState({ value: event.target.value })}
                            label="ether" 
                            labelPosition='right'
                        />
                </Form.Field>
                <Message error header={"Oops!"} content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>
                    Contribute!
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;