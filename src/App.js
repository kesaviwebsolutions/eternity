import "./App.css";
import Footer from "./Components/Footer";

import Navbar1 from "./Components/Navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activestake from "./Components/Activestake";
import Home from "./Components/pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";
import { DissconnectWallet, getUserAddress, GetChainId, WalletConnect, MetaMasklogin, WalletConnectlogin } from "./Web3/Wallets";

function App() {
  const [account, setAccount] = useState("");
  const [price, setPrice] = useState(0)

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

  useEffect(()=>{

   setInterval(()=>{
    axios.get('https://api.pancakeswap.info/api/v2/tokens/0x475D9dCd1f6c6E015A499F9BF675FCFCc9C1349E').then((res)=>{
      // console.log(res.data.data.price*10**18)
      setPrice(res.data.data.price*10**18)
    }).catch(console.error)
   },5000)

  },[])


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
  const walletConnectlogin = async () => {
    await WalletConnectlogin();
    const add = await getUserAddress();
    setAccount(add);
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
        <Navbar1 account={account} Dissconnect={Dissconnect} Metamask={Metamask} walletConnectlogin={walletConnectlogin}/>
        <Routes>
          <Route exact path="/" element={<Home account={account} price={price}/>} />
          <Route exact path="/active-stake" element={<Activestake account={account} price={price}/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
