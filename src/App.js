import "./App.css";
import Footer from "./Components/Footer";

import Navbar1 from "./Components/Navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activestake from "./Components/Activestake";
import Home from "./Components/pages/Home";
import { useEffect, useState } from "react";
import { DissconnectWallet, getUserAddress, GetChainId, WalletConnect, MetaMasklogin } from "./Web3/Wallets";

function App() {
  const [account, setAccount] = useState("");

  useEffect(() => {
    const init = async () => {
      const wallet = window.localStorage.getItem("wallet");
      if (wallet) {
        await Metamask();
      }
      const id = await GetChainId();
      console.log("Chain ID ", id);
      if (Number(id) != 56) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }], // chainId must be in hexadecimal numbers
        });
      }
    };

    init();
  }, [account]);


  const Metamask = async () => {
    await MetaMasklogin();
    const add = await getUserAddress();
    window.localStorage.setItem("wallet", "wallet");
    setAccount(add);
   
  };
  const Dissconnect = async () => {
    await DissconnectWallet();
    setAccount(undefined);
    window.localStorage.removeItem("wallet");
  };

  try {
    window.ethereum.on("accountsChanged", function (accounts) {
      setAccount(accounts[0]);
    });
  } catch (error) {}

  try {
    window.ethereum.on("chainChanged", function (accounts) {
      window.location.reload();
    });
  } catch (error) {}

  return (
    <div className="App">
      <Router>
        <Navbar1 account={account} Dissconnect={Dissconnect} Metamask={Metamask}/>
        <Routes>
          <Route exact path="/" element={<Home account={account}/>} />
          <Route exact path="/active-stake" element={<Activestake account={account}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
