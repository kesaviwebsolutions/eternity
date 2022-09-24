import React from "react";
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

export default function Main1() {
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
                    $0.00
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Liquidity Cap
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
                    0
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Rewards Claimed
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
                    0
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Total Staked
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
                    0
                  </span>
                  <br />
                  <span
                    className="span-pp"
                    style={{ color: "#A39FA1", fontSize: "14px" }}
                  >
                    Rewards Tokens
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
                          $0.00
                        </span>
                        <br />
                        <span
                          className="span-pp"
                          style={{
                            color: "#A39FA1",
                            fontSize: "14px",
                          }}
                        >
                          Staked Balance
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
                          0
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
                          $0.00
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
                          0
                        </span>
                        <br />
                        <span
                          className="span-pp"
                          style={{ color: "#A39FA1", fontSize: "14px" }}
                        >
                          Free Tokens
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
          <div className=" col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="border-meta2">
              <div className="total">
                <div
                  className=" card"
                  style={{
                    marginRight: "1rem",
                    background: "#191015",
                    borderRadius: "10px",
                    padding: "0.5rem",
                    margin: "0.01rem",
                    textAlign: "center",
                    border: "2px solid #F1B80B",
                  }}
                >
                  <span
                    className="span-pp"
                    style={{
                      color: "rgb(163, 159, 161)",
                      fontSize: "30px",
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

          <div className=" col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="border-meta2">
              <div className="total">
                <div
                  className=""
                  style={{
                    marginRight: "1rem",
                    background: "#191015",
                    borderRadius: "10px",
                    padding: "0.5rem",
                    margin: "0.01rem",
                    textAlign: "center",
                    border: "2px solid #F1B80B",
                  }}
                >
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
                placeholder="Amount to stake (min.1000)"
                style={{ height: "4rem", width: "45rem" }}
              ></input>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12 input12">
              <button className="input1">10%</button>
              <button className="input1">25%</button>
              <button className="input1">50%</button>
              <button className="input1">75%</button>
              <button className="input1 max">MAX</button>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <button
                className="border-meta3"
                style={{ width: "100%", background: "#191015", border: "none" }}
              >
                <div className="button-stake1">Stake "$ETRNTY Tokens"</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ color: "white" }}>
        <div className="stake-head">
          <h2 className="heading-table">Your Balance : $ETRNTY</h2>
        </div>
        <div className="stake-head3">
          <h3 className="heading-staking">Staking Details</h3>
        </div>
        <div className="summary-content">
          <p className="p">Duration</p>
          <p className="quotation">:</p>
          <p className="sc">90 Days</p>
        </div>
        <div className="summary-content">
          <p className="p">APY</p>
          <p className="quotation1">:</p>
          <p className="sc">50 % </p>
        </div>
        <div className="summary-content">
          <p className="p">Staked Amount</p>
          <p className="quotation2">:</p>
          <p className="sc">$GENESIS</p>
        </div>
        <div className="summary-content">
          <p className="p">Estimated Return</p>
          <p className="quotation3">:</p>
          <p className="sc">0 $GENESIS</p>
        </div>
        <div className="summary-content">
          <p className="p">Start Date</p>
          <p className="quotation4">:</p>
          <p className="sc">9/24/2022, 1:37:17 PM</p>
        </div>
        <div className="summary-content">
          <p className="p">End Date</p>
          <p className="quotation">:</p>
          <p className="sc">12/23/2022, 1:37:11 PM</p>
        </div>
      </div>
    </section>
  );
}
