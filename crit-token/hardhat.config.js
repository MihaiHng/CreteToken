require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  //defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: process.env.INFURA_SEPOLIA_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  }  
};
