const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
// hd wallet has to be installed 
const provider = new HDWalletProvider(
  'spoon museum client pause stay choice video obey march collect immune empty',
  // remember to change this to your own phrase!
  'https://rinkeby.infura.io/v3/7e636f9416b449cfad1d5d3704244f0b'
  // remember to change this to your own endpoint!
);
//provider connects to the 
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  // lottery contract has no arguments passed to the constructor function
  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
