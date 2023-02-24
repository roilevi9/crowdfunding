import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import _crowdfunding_migration from '../migrations/1_crowdfunding_migration';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';


function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null
  })

  useEffect(()=>{
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()
      if(provider){
        setWeb3Api(
          {
            provider:provider,
            web3: new Web3(provider),
            contract:null
          }
        )
      }
      else {
        console.log("Pleas install MetaMask")
      }
    }
    loadProvider()
  },[])


  // const [campaigns, setCampaigns] = useState([]);
  // const [title, setTitle] = useState('');
  // const [goal, setGoal] = useState('');
  // const [selectedCampaign, setSelectedCampaign] = useState(null);
  // const [contributionAmount, setContributionAmount] = useState('');

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const signer = provider.getSigner();
  //       const contractAddress = "CONTRACT_ADDRESS_HERE"; // Replace with the address of your deployed contract
  //       const contract = new ethers.Contract(contractAddress, CrowdfundingContract.abi, signer);
  //       const campaigns = await contract.campaigns();
  //       setCampaigns(campaigns);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // async function createCampaign() {
  //   try {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contractAddress = "CONTRACT_ADDRESS_HERE"; // Replace with the address of your deployed contract
  //     const contract = new ethers.Contract(contractAddress, CrowdfundingContract.abi, signer);
  //     const tx = await contract.createCampaign(title, goal);
  //     await tx.wait();
  //     const campaigns = await contract.campaigns();
  //     setCampaigns(campaigns);
  //     setTitle('');
  //     setGoal('');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function contribute() {
  //   try {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contractAddress = "CONTRACT_ADDRESS_HERE"; // Replace with the address of your deployed contract
  //     const contract = new ethers.Contract(contractAddress, CrowdfundingContract.abi, signer);
  //     const tx = await contract.contribute(selectedCampaign, { value: contributionAmount });
  //     await tx.wait();
  //     setSelectedCampaign(null);
  //     setContributionAmount('');
  //     const campaigns = await contract.campaigns();
  //     setCampaigns(campaigns);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="App">
      <h1>Crowdfunding Platform</h1>
      {/* <div className="create-campaign">
        <h2>Create a new campaign</h2>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <label>Goal:</label>
        <input type="number" value={goal} onChange={e => setGoal(e.target.value)} />
        <button onClick={createCampaign}>Create</button>
      </div>   */}
      <button onClick={async () =>{const accounts = await window.ethereum.request(({method:"eth_requestAccounts"}))
      console.log(accounts)
        }}
>Connect to Metamask</button>
    </div>
  );
}

export default App;






      // <div className="campaigns">
      //   <h2>Current campaigns</h2>
      //   <ul>
      //     {campaigns.map((campaign, index) => (
      //       <li key={index}>
      //         <p><strong>{campaign.title}</strong></p>
      //         <p>Goal: {campaign.goal} ETH</p>
      //         <p>Raised: {campaign.raised} ETH</p>
      //         {!campaign.complete &&
      //           <>
      //             <label>Contribute:</label>
      //             <input type="number" value={selectedCampaign === index ? contributionAmount : ''} onChange={e => setContributionAmount(e.target.value)} />
      //             <button disabled={!selected 
