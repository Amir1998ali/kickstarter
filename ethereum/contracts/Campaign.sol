pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
//hge
    function createCampaign(uint minimum) public  {
        // deploy new instance of campain
        // the msg.sender is going to be this one, which is going to be the user
        // not the factory 
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }

}
contract Campaign {
    //difference in struct, is a struct definition
    //it is a type, it is a definiton
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    // Created by the manager
    function Campaign(uint minimum, address creator) public {
        // who is attempting to create the contract
        manager = creator;
        minimumContribution = minimum;
    }
// hug
    function contribute() public payable {
        require(msg.value > minimumContribution);
        // That person gets approved by the contract
        approvers[msg.sender] = true;
        approversCount ++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        // not recommended bc the order matters: Request(description, value, recipient, false)
        // we want memory because it is local and brand new
        require(approvers[msg.sender]); // only the manager can create the request
        // whenever you are creating an object like the object below
        // you acttually have to add the memory keyword.
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        // since you already have the request in the storage
        // you are not accessing the memory to obtain the variable
        Request storage request = requests[index]; 
        require(approvers[msg.sender]);
        // To ensure that the voter has not already voted!
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount ++;
    }

    // add comment
    // add comment 2
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        // play around with the complete variable
        require(request.approvalCount > (approversCount /2));
        require(!request.complete);
        // send it to recipient
        request.recipient.transfer(request.value);
        request.complete = true;
    }
}
