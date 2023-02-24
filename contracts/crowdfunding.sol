// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    struct Campaign {
        address payable creator;
        string title;
        uint goal;
        uint raised;
        mapping(address => uint) contributions;
        bool complete;
    }
    
    uint numCampaigns;
    mapping (uint => Campaign) campaigns;
    
    function createCampaign(string memory _title, uint _goal) public {
        Campaign storage c = campaigns[numCampaigns++];
        c.creator = payable(msg.sender);
        c.title = _title;
        c.goal = _goal;
        c.raised = 0 ;
        c.complete = false;
        }
    
    function contribute(uint _campaignIndex) public payable {
        Campaign storage campaign = campaigns[_campaignIndex];
        require(!campaign.complete, "Campaign already complete.");
        campaign.contributions[msg.sender] += msg.value;
        campaign.raised += msg.value;
        if (campaign.raised >= campaign.goal) {
            campaign.complete = true;
            campaign.creator.transfer(campaign.raised);
        }
    }
    
    function withdraw(uint _campaignIndex) public {
        Campaign storage campaign = campaigns[_campaignIndex];
        require(campaign.complete == false, "Campaign already complete.");
        uint amount = campaign.contributions[msg.sender];
        require(amount > 0, "No contributions found.");
        campaign.contributions[msg.sender] = 0;
        campaign.raised -= amount;
        payable(msg.sender).transfer(amount);
    }
}