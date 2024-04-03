import { useState, useEffect } from "react";
import { contractAddress, abi } from "./contract";
import { ethers } from "ethers";
import { useContractWrite } from "wagmi";

// let ca
const getContract = async () => {
  if (window.ethereum) {
    const chainId = parseInt(window.ethereum.chainId);
    // ca =
    //   chainId in contractAddress ? contractAddress[chainId][0] : null;
    // console.log(address);
    const provider = new ethers.BrowserProvider(window.ethereum); // A connection to the Ethereum network
    const signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(contractAddress, abi, signer);
    return Contract;
  } else {
    // alert("No wallet detected");
  }
};

export async function getAddress() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const address = accounts[0];
      return address;
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      throw error;
    }
  } else {
    console.error(
      "Ethereum wallet not found. Please install MetaMask or another Ethereum wallet extension."
    );
    return null;
  }
}



function deploy(name, symbol, supply) {
  // try {
  //   const contract = await getContract();
  //   return await contract.deployERC20Token(name, symbol, supply);
  // } catch (error) {
  //   alert("Error deploying Token");
  //   console.log(error);
  // }
  write({ args: [name, symbol, supply] });
  console.log("called");

  if (isLoading) {
    return;
  }

  if (error) {
    alert("Error deploying Token");
  } else {
    alert("Token deployed Successfully");
  }
}
export async function getUserTokens(address) {
  try {
    const contract = await getContract();
    return await contract.GetUserTokens(address);
  } catch (error) {
    console.log(error);
    return "0";
  }
}
export async function deployedTokens() {
  try {
    const contract = await getContract();
    const responds = await contract.deployedTokens();
    console.log("here:", responds);
    return responds;
  } catch (error) {
    console.log(error);
    return "0";
  }
}
