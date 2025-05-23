require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20", // or 0.8.28 if you want latest
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/12ed9561055541e09f30bcb1c329a055",
      accounts: ["1db844386ca05124102f71eedaf553bf865f7c157e441f0684a3ea74d9bb0167"],
    },
  },
};





