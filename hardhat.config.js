require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
//require("./tasks/faucet");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  //defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: process.env.INFURA_SEPOLIA_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: process.env.INFURA_GOERLI_API_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  }  
};
