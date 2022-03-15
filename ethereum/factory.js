// set ourself for creating the instance
import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json'
// connet to the existing network
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xD77962e6322176fE24d8b2993E522C530c7a472D'
);

export default instance;