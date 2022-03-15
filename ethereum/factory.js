// set ourself for creating the instance
import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json'
// connet to the existing network
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xe3d63A4425FA1222B9bCdf4c18080621DAd5BaAB'
);

export default instance;