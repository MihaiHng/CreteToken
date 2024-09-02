import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import faucetContract from "./ethereum/faucet";
import SlideShow from "./components/SlideShow.js";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();
  const [fcContract, setFcContract] = useState();
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [transactionData, setTransactionData] = useState("");

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* get signer */
          setSigner(provider.getSigner());
          /* local contract instance */
          setFcContract(faucetContract(provider));
          /* set active wallet address */
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  const getOCTHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      const fcContractWithSigner = fcContract.connect(signer);
      const resp = await fcContractWithSigner.requestTokens();
      setWithdrawSuccess("Successful Operation - You have withdrawn 50 CRIT tokens!");
      setTransactionData(resp.hash);
    } catch (err) {
      setWithdrawError(err.message);
    }
  };

  return (
    <>
      <div className="navb">
        <div className="row">
          <div className="navcolumn left">
            <div className="horizontal">
              <h1 className="navb-item">Crete Token (CRIT)</h1>
              <h2>A tribute to the wonderful island of Crete</h2>
            </div>
          </div>
          <div className="navcolumn right">
            <div>
              <w3m-button />
            </div>
          </div>
        </div>
      </div>
      <hr class="hr"></hr>
      <div className="row">
        <div className="column right">
          <section className="hero is-fullheight">
            <div className="faucet-hero-body">
              <div className="container has-text-centered main-content">
                <h1 className="title is-1">CRIT Faucet</h1>
                <p>Daily limit: 50 CRIT</p>
                <div className="mt-5">
                  {withdrawError && (
                    <div className="withdraw-error">{withdrawError}</div>
                  )}
                  {withdrawSuccess && (
                    <div className="withdraw-success">{withdrawSuccess}</div>
                  )}{" "}
                </div>
                <div className="box address-box">
                  <div className="columns">
                    <div className="column is-three-fifths">
                      <input
                        className="input is-medium"
                        type="text"
                        placeholder="Enter your wallet address (0x...)"
                        defaultValue={walletAddress} />
                    </div>
                    <div className="column">
                      <button
                        className="button is-link is-medium"
                        onClick={getOCTHandler}
                        disabled={walletAddress ? false : true}
                      >
                        GET TOKENS
                      </button>
                    </div>
                  </div>
                  <article className="panel is-grey-darker">
                    <p className="panel-heading">Transaction Data</p>
                    <div className="panel-block">
                      <p>
                        {transactionData
                          ? `Transaction hash: ${transactionData}`
                          : "--"}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="column left">
          <SlideShow />
        </div>
      </div>
   </>
    
    
  );
}

export default App;
