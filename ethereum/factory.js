// set ourself for creating the instance
import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json'
// connet to the existing network
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x94129A9f230F7f31925Af501cCe6FA463DC19E1E'
);

export default instance;