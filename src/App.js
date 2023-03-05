import './App.css';
import React, { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { loadContract } from './utils/load-contract';
import Web3 from 'web3';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateCampaign from './pages/CreateCampaign';
import Home from './pages/Home';
import Navbar from './Components/Navbar';



function App() {
   const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null
  })

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider()
      const contract = await loadContract("crowdfunding", provider)

      if(provider){
        setWeb3Api(
          {
            provider:provider,
            web3: new Web3(provider),
            contract: contract
          }
        )
      }
      else {
        console.log("Please install MetaMask")
      }
    }
    loadProvider()
  }, []);

  //צריך:
  // const handleFormFieldChange = (fieldName, e) => {
  //   setForm({ ...form, [fieldName]: e.target.value })
  // }

  // async function handleCreateCampaign(e) {
  //   e.preventDefault();
  //   let addData = {
  //     title: form.title, 
  //     description: form.description, 
  //     goal: form.goal, 
  //     image: form.image}
  //   setCampaigns([...campaigns, addData])
  //   const {contract, web3} = web3Api

  return (
    <div className="App">
      <Router>
    <Navbar />
    <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route path='/CreateCampaign' element={<CreateCampaign/>} />
    </Routes>
    </Router>
    
      

    </div>
  );
}

export default App;