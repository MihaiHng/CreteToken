//Old deploy script

/*const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0x2225d9117e37329713884942992EE040B742D906");

  await faucet.deployed();

  console.log("Facuet contract deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});*/



// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.

const path = require("path");

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which " +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.provider.getBalance(deployer.address); 
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", accountBalance.toString());

  const Faucet = await ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0xBFBD191E0149920AC987aB159497b4F95CdC41eD");
  await faucet.waitForDeployment();

  console.log("Faucet address:", faucet.target);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(faucet);
}

function saveFrontendFiles(faucet) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "../..", "faucet-ui", "src", "ethereum", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "faucet-address.json"),
    JSON.stringify({ Faucet: faucet.target }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Faucet");

  fs.writeFileSync(
    path.join(contractsDir, "Faucet.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
