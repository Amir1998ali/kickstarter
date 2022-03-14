//server
//first page we show when the address is called
//it looks for pages and index.js to start with
import React, {Component} from 'react';
import { Card, Button  } from 'semantic-ui-react';
import factory from '../ethereum/factory'

class CampaignIndex extends Component {
    //next use this to fetch in server side
    // before everything is done
    // show on browser - so if js is turned off on the browser
    //we can again fetch the data from the server
    // because all the js stuff is happening in the server not the browser like before
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        // pass a func, 
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });
        return <Card.Group items={items}/>
    }

    render() {
        // after that send to browser
        return <div>
              <link async rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"/>
            <h3>Open Campaigns</h3>
            {this.renderCampaigns()}
            <Button
                content="Create Campaign"
                icon="add circle"
                primary={true}
            />
            </div>
        // then translated by next to HTML for the browser
    }
}

// react has to see the export
export default CampaignIndex;       