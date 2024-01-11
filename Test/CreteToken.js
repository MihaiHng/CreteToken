// This is an example test file. Hardhat will run every *.js file in `test/`,
// so feel free to add new ones.

// Hardhat tests are normally written with Mocha and Chai.

// We import Chai to use its asserting functions here.
const { expect } = require("chai");

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage or Hardhat Network's snapshot functionality.
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

// `describe` is a Mocha function that allows you to organize your tests.
// Having your tests organized makes debugging them easier. All Mocha
// functions are available in the global scope.
//
// `describe` receives the name of a section of your test suite, and a
// callback. The callback must define the tests of that section. This callback
// can't be an async function.
describe("CreteToken contract", function () {
  // We define a fixture to reuse the same setup in every test. We use
  // loadFixture to run this setup once, snapshot that state, and reset Hardhat
  // Network to that snapshot in every test.
  async function deployCreteTokenFixture() {
    // Get the ContractFactory and Signers here.
    const CreteToken = await ethers.getContractFactory("CreteToken");
    const [owner, addr1, addr2] = await ethers.getSigners();

    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    const creteToken = await CreteToken.deploy(10000000, 50);

    await creteToken.waitForDeployment();

    // Fixtures can return anything you consider useful for your tests
    return { CreteToken, creteToken, owner, addr1, addr2 };
  }

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    // `it` is another Mocha function. This is the one you use to define your
    // tests. It receives the test name, and a callback function.
//
    // If the callback function is async, Mocha will `await` it.
    it("Should set the right owner", async function () {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const { creteToken, owner } = await loadFixture(deployCreteTokenFixture);

      // Expect receives a value and wraps it in an assertion object. These
      // objects have a lot of utility methods to assert values.

      // This test expects the owner variable stored in the contract to be
      // equal to our Signer's owner.
      expect(await creteToken.owner()).to.equal(owner.address);
    });

    it("Should assign half of the max supply of tokens to the owner", async function () {
      const { creteToken, owner } = await loadFixture(deployCreteTokenFixture);
      const ownerBalance = await creteToken.balanceOf(owner.address);
      expect(await (creteToken.cap())).to.equal(ownerBalance + ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      const { creteToken, owner, addr1, addr2 } = await loadFixture(deployCreteTokenFixture);

      //console.log(await creteToken.balanceOf((owner.address)));

      // Transfer 50 tokens from owner to addr1
      await expect(creteToken.transfer(addr1.address, 50))
        .to.changeTokenBalances(creteToken, [owner, addr1], [-50, 50]);

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(creteToken.connect(addr1).transfer(addr2.address, 50))
        .to.changeTokenBalances(creteToken, [addr1, addr2], [-50, 50]);
    });

    it("should emit Transfer events", async function () {
      const { creteToken, owner, addr1, addr2 } = await loadFixture(deployCreteTokenFixture);

      // Transfer 50 tokens from owner to addr1
      await expect(creteToken.transfer(addr1.address, 50))
        .to.emit(creteToken, "Transfer").withArgs(owner.address, addr1.address, 50)

      // Transfer 50 tokens from addr1 to addr2
      // We use .connect(signer) to send a transaction from another account
      await expect(creteToken.connect(addr1).transfer(addr2.address, 50))
        .to.emit(creteToken, "Transfer").withArgs(addr1.address, addr2.address, 50)
    });

    /*it("Should fail if sender doesn't have enough tokens", async function () {
      const { creteToken, owner, addr1 } = await loadFixture(deployCreteTokenFixture);
      const initialOwnerBalance = await creteToken.balanceOf(
        owner.address
      );

      console.log(await creteToken.balanceOf((owner.address)));

      // Try to send 1 token from addr1 (0 tokens) to owner (1000 tokens).
      // `require` will evaluate false and revert the transaction.
      await expect(
        creteToken.transfer(addr1.address, 5000001)
      ).to.be.revertedWith("Not enough tokens");
      
      // Owner balance shouldn't have changed.
      expect(await creteToken.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );*/
    });
  });

