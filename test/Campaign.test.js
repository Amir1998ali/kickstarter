// one single test for both contracts
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send( { from: accounts[0], gas: '1000000' });

    // make an instance using factory
    // we use string 
    // you are making a transaction and you pay gas
    // to pay the node to run this for you 
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    // get the first element and assign it to that
    //[] means get the first element of the array returned
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();// get back the addresses
    // we wanna tell the web3 where this is after deployment, so I provide address
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );

        await campaign.methods.contribute().send({
            from : accounts[0], 
            value: web3.utils.toWei('10', 'ether')
        });

});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allows people to contrbute money and marks them as approvers', async() => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        // .call() when we just wanna access a variable =
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });

    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '5',
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it("allows a manager to make a payment request", async () => {
        await campaign.methods
          .createRequest("Buy batteries", "100", accounts[1])
          .send({
            from: accounts[0],
            gas: "1000000",
          });
        const request = await campaign.methods.requests(0).call();
        assert.equal("Buy batteries", request.description);
      });

    it('processes request', async () => {
        // await campaign.methods.contribute().send({
        //     from : accounts[0], 
        //     value: web3.utils.toWei('10', 'ether')
        // });

        await campaign.methods
            .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({
                from:accounts[0],
                gas: '1000000'
            });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        assert(balance > 104);
    });
});
