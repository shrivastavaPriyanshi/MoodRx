import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../abi/RewardTokenABI.json';

const contractAddress = "0xA69252bE72F43aBff456999FF87bcd59F3A064e8"; 

const TokenApp = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    if (window.ethereum) {
      const [acc] = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(acc);
      await getBalance(acc);
    } else {
      alert("Please install MetaMask");
    }
  };

  const getBalance = async (userAddress) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const rawBalance = await contract.balanceOf(userAddress);
    setBalance(ethers.utils.formatUnits(rawBalance, 18));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎗️ Mental Health Token (MHT)</h2>
      {account ? (
        <>
          <p>Connected Wallet: {account}</p>
          <p>Token Balance: {balance} MHT</p>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default TokenApp;
