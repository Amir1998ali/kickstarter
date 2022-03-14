//server

//first page we show when the address is called
//it looks for pages and index.js to start with
import React, {Component} from 'react';
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

    render() {
        // after that send to browser
        return <div>{this.props.campaigns[0]}</div>
        // then translated by next to HTML for the browser
    }
}

// react has to see the export
export default CampaignIndex;       