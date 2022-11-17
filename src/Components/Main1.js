import React, { useEffect, useState } from "react";
import "./Main1.css";
import Imagelogo from "../Components/Images/liquiditystake1.png";
import Imagelogo1 from "../Components/Images/reward.png";
import Imagelogo2 from "../Components/Images/totalstak.png";
import Imagelogo3 from "../Components/Images/rewardtokens.png";
import Imagelogo4 from "../Components/Images/tokenstake.png";
import Imagelogo5 from "../Components/Images/stakebalance.png";
import Imagelogo6 from "../Components/Images/portfolio.png";
import Imagelogo7 from "../Components/Images/rewardtokens.png";
import Mainlogo from "../Components/Images/logo.png";
import Nav from "react-bootstrap/Nav";
import {
  StakeBalace,
  tokenBalance,
  totalstakedinContract,
  tokenpending,
  tokenDistribute,
  Stake,
  Contracttokenbalace
} from "./../Web3/Wallets";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const notify = (msg) => toast.success(msg);
const warning = (msg) => toast.error(msg);

const time = new Date().getTime();

export default function Main1({ account, price }) {
  const [apy, setAPY] = useState();
  const [duration, setDuration] = useState(0);
  const [userstake, setUserState] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [stakeTotal, setStakeTotal] = useState(0);
  const [pending, setPending] = useState(0);
  const [disturbute, setDisturbute] = useState(0);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);
  const [tokenlivepri, setTokenlivepri] = useState(0)
  const [contrac, setContract] = useState()
  

  console.log(price)
  React.useEffect(() => {
    const init = async () => {
      const stake = await StakeBalace();
      setUserState(stake);
      const bal = await tokenBalance();
      setBalance(bal);
      const data = await totalstakedinContract();
      setStakeTotal(data);
      const pend = await tokenpending();
      setPending(pend);
      const dis = await tokenDistribute();
      setDisturbute(dis);
      const contbal = await Contracttokenbalace()
      setContract(contbal)
    };
    init();

    setInterval(async()=>{
      const data = await totalstakedinContract();
      setStakeTotal(data);
      const pend = await tokenpending();
      setPending(pend);
      const dis = await tokenDistribute();
      setDisturbute(dis);
    },10000)
  }, [account]);

  const StakeAmount = async () => {
    const data = await Stake(duration, count);
    if (data.status) {
      notify("Staked Successfully");
      const data = await totalstakedinContract();
      setStakeTotal(data);
      const bal = await tokenBalance();
      setBalance(bal);
      const stake = await StakeBalace();
      setUserState(stake);
    }
  };

  useEffect(()=>{

    setInterval(()=>{
     axios.get('https://api.pancakeswap.info/api/v2/tokens/0x475D9dCd1f6c6E015A499F9BF675FCFCc9C1349E').then((res)=>{
      
       setTokenlivepri(res.data.data.price*10**18)
     }).catch(console.error)
    },5000)
 
   },[])

  return (
    <section>
      <div className="container">
        <div className="border-meta">
          <div className="row total ">
            <div
              className="col-lg-3 col-md-3 col-sm-12 col-12  section1a"
              style={{}}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                  <img
                    src={Imagelogo}
                    alt=""
                    className="Image1"
                    style={{ float: "right", marginTop: "10px", width: "30px" }}
                  />
                </div>
                <div
                  className="col-lg-8 col-md-8 col-sm-8 col-6"
                  // style={{ fontFamily: "roboto" }}
                >
                  <span style={{ color: "white", fontSize: "18px" }}>
                    ${Number(contrac * tokenlivepri).toFixed(3)}
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Total Value Locked(USD)
                  </span>
                </div>
              </div>
            </div>
            <hr style={{ color: "white", marginTop: "1rem" }} />
            <div
              className="col-lg-3 col-md-3 col-sm-12 col-12 section1a"
              style={{}}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                  <img
                    src={Imagelogo1}
                    alt=""
                    className="Image1"
                    style={{ float: "right", marginTop: "10px", width: "30px" }}
                  />
                </div>
                <div
                  className="col-lg-8 col-md-8 col-sm-8 col-6"
                  style={{ fontFamily: "roboto" }}
                >
                  <span
                    className="span-pp"
                    style={{ color: "white", fontSize: "18px" }}
                  >
                    {Number(stakeTotal).toFixed(3)}
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Total Token Staked
                  </span>
                </div>
              </div>
            </div>
            <hr style={{ color: "white", marginTop: "1rem" }} />
            <div
              className="col-lg-3 col-md-3 col-sm-12 col-12 section1a"
              style={{}}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                  <img
                    src={Imagelogo2}
                    alt=""
                    className="Image1"
                    style={{ float: "right", marginTop: "10px", width: "30px" }}
                  />
                </div>
                <div
                  className="col-lg-8 col-md-8 col-sm-8 col-6"
                  style={{ fontFamily: "roboto" }}
                >
                  <span
                    className="span-pp"
                    style={{ color: "white", fontSize: "18px" }}
                  >
                    {Number(pending).toFixed(3)}
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Total Pending Rewards
                  </span>
                </div>
              </div>
            </div>
            <hr style={{ color: "white", marginTop: "1rem" }} />
            <div className="col-lg-3 col-md-3 col-sm-12 col-12 ">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                  <img
                    src={Imagelogo3}
                    alt=""
                    className="Image1"
                    style={{ float: "right", marginTop: "10px", width: "30px" }}
                  />
                </div>
                <div
                  className="col-lg-8 col-md-8 col-sm-8 col-6"
                  style={{ fontFamily: "roboto" }}
                >
                  <span
                    className="span-pp"
                    style={{ color: "white", fontSize: "18px" }}
                  >
                    {Number(disturbute).toFixed(2)}
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Total Rewards Distributed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="heading-2">Balances</h2>
        <div className="">
          <div className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="border-meta">
                <div
                  className="row total"
                  style={{
                    marginRight: "1rem",
                    background: "#191015",
                    borderRadius: "10px",
                    padding: "2rem 3rem",
                    margin: "0.01rem",
                  }}
                >
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 section1a">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo5}
                          alt=""
                          className="Image1"
                          style={{ float: "right", marginTop: "10px" }}
                        />
                      </div>
                      <div
                        className="col-lg-8 col-md-8 col-sm-8 col-6"
                        style={{ fontFamily: "roboto" }}
                      >
                        <span className="span-pp" style={{ color: "white" }}>
                          ${Number(userstake * tokenlivepri).toFixed(3)}
                        </span>
                        <br />
                        <span
                          className="span-pp"
                          style={{
                            color: "#A39FA1",
                            fontSize: "14px",
                          }}
                        >
                          Staked Balance(USD)
                        </span>
                        <hr style={{ color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 section1a">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo4}
                          alt=""
                          className="Image1"
                          style={{
                            float: "right",
                            marginTop: "10px",
                            width: "30px",
                          }}
                        />
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                        <span style={{ color: "white", fontSize: "18px" }}>
                          {Number(userstake).toFixed(3)}
                        </span>
                        <br />
                        <span
                          className="span-pp"
                          style={{
                            color: "#A39FA1",
                            fontSize: "14px",
                            // marginLeft: "2rem",
                            // fontFamily: "roboto",
                          }}
                        >
                          Tokens Staked
                        </span>
                        <hr style={{ color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 section1a">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo6}
                          alt=""
                          className="Image1"
                          style={{
                            float: "right",
                            marginTop: "10px",
                            width: "30px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-8 col-md-8 col-sm-8 col-6"
                        style={{ fontFamily: "roboto" }}
                      >
                        <span
                          className="span-pp"
                          style={{ color: "white", fontSize: "18px" }}
                        >
                          ${Number((balance + userstake)  * tokenlivepri).toFixed(3)}
                        </span>
                        <br />
                        <span
                          className="span-pp"
                          style={{
                            color: "#A39FA1",
                            fontSize: "14px",
                            // marginLeft: "2rem",
                          }}
                        >
                          Full Portfolio Value
                        </span>
                        <hr style={{ color: "white" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                        <img
                          src={Imagelogo7}
                          alt=""
                          className="Image1"
                          style={{
                            float: "right",
                            marginTop: "10px",
                            width: "30px",
                          }}
                        />
                      </div>
                      <div
                        className="col-lg-8 col-md-8 col-sm-8 col-6"
                        style={{ fontFamily: "roboto" }}
                      >
                        <span
                          className="span-pp"
                          style={{ color: "white", fontSize: "18px" }}
                        >
                          {Number(balance).toFixed(3)}
                        </span>
                        <br />
                        <span
                          className="span-pp"
                          style={{ color: "#A39FA1", fontSize: "14px" }}
                        >
                          Tokens Balance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="heading-2">Secure</h2>
        <div className="row ">
          <div
            className=" col-lg-6 col-md-6 col-sm-12 col-12"
            onClick={() => {
              setDuration(7);
              setAPY(150);
            }}
          >
            <div className="border-meta2">
              <div className="total">
              <div className={`card background ${active===1 ? "select" :"" }`} onClick={()=>setActive(1)}>
                  <span
                    className="span-pp"
                    style={{
                      color: "rgb(163, 159, 161)",
                      fontSize: "30px",
                      paddingBottom: "24px",
                      fontFamily: "roboto",
                    }}
                  >
                    7 Days
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "white", fontFamily: "roboto" }}
                  >
                    150% APY
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" col-lg-6 col-md-6 col-sm-12 col-12"
            onClick={() => {
              setDuration(30);
              setAPY(300);
            }}
          >
            <div className="border-meta2">
              <div className="total">
                <div className={`card background ${active===2 ? "select" :"" }`} onClick={()=>setActive(2)}>
                  <span
                    className="span-pp"
                    style={{
                      color: "rgb(163, 159, 161)",
                      fontSize: "30px",
                      fontFamily: "roboto",
                    }}
                  >
                    30 Days
                  </span>
                  <br />
                  <br />
                  <span className="span-pp" style={{ color: "white" }}>
                    300% APY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="heading-2">Stake</h2>
        <div className="border-meta2">
          <div className="row total1">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12 ccm">
              <input
                type="number"
                className="input-type"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                placeholder="Amount to stake (min.1000)"
                style={{ height: "4rem", width: "45rem" }}
              ></input>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 input12">
              <button
                className="input1"
                onClick={() => setCount((balance * 10) / 100)}
              >
                10%
              </button>
              <button
                className="input1"
                onClick={() => setCount((balance * 25) / 100)}
              >
                25%
              </button>
              <button
                className="input1"
                onClick={() => setCount((balance * 50) / 100)}
              >
                50%
              </button>
              <button
                className="input1"
                onClick={() => setCount((balance * 75) / 100)}
              >
                75%
              </button>
              <button className="input1 max" onClick={() => setCount(balance)}>
                MAX
              </button>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <button
                className="border-meta3"
                style={{ width: "100%", background: "#191015", border: "none" }}
              >
                <div className="button-stake1" onClick={() => StakeAmount()}>
                  Stake "$ETRNTY Tokens"
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ color: "white" }}>
        <div className="stake-head">
          <h2 className="heading-table">Your Balance :{Number(balance).toFixed(3)} $ETRNTY</h2>
        </div>
        <div className="stake-head3">
          <h3 className="heading-staking">Staking Details</h3>
        </div>
        <div className="summary-content">
          <p className="p">Duration</p>
          <p className="quotation">:</p>
          <p className="sc">{duration} Days</p>
        </div>
        <div className="summary-content">
          <p className="p">APY</p>
          <p className="quotation1">:</p>
          <p className="sc">{apy} % </p>
        </div>
        <div className="summary-content">
          <p className="p">Staked Amount</p>
          <p className="quotation2">:</p>
          <p className="sc">{count} ETRNTY</p>
        </div>
        <div className="summary-content">
          <p className="p">Estimated Return</p>
          <p className="quotation3">:</p>
          <p className="sc">
            {duration == 7
              ? `${(count * 1.028767123287671).toFixed(2)}`
              : `${(count * 1.246575342465753).toFixed(2)}`}{" "}
            ETRNTY
          </p>
        </div>
        <div className="summary-content">
          <p className="p">Start Date</p>
          <p className="quotation4">:</p>
          <p className="sc">{new Date().toLocaleString()}</p>
        </div>
        <div className="summary-content">
          <p className="p">End Date</p>
          <p className="quotation">:</p>
          <p className="sc">
            {new Date(time + duration * 86400000).toLocaleString()}
          </p>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
