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

  const CreteToken = await ethers.getContractFactory("CreteToken");
  const creteToken = await CreteToken.deploy(10000000, 50, { gasLimit: 1600000 });
  await creteToken.waitForDeployment();

  console.log("CreteToken address:", creteToken.target);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(creteToken);
}

function saveFrontendFiles(creteToken) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "../..", "faucet-ui", "src", "ethereum", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "CreteToken-address.json"),
    JSON.stringify({ CreteToken: creteToken.target }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("CreteToken");

  fs.writeFileSync(
    path.join(contractsDir, "CreteToken.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
