import React from "react";
import "./Main1.css";
import Imagelogo from "../Components/Images/index.png";
import Imagelogo1 from "../Components/Images/index4.png";
import Imagelogo2 from "../Components/Images/index1.png";
import Imagelogo3 from "../Components/Images/index3.png";
import Imagelogo4 from "../Components/Images/index5.png";
import Imagelogo5 from "../Components/Images/index1.png";
import Imagelogo6 from "../Components/Images/index6.png";
import Imagelogo7 from "../Components/Images/index7.png";
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
                    style={{ float: "right", marginTop:'10px' }}
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                  <span style={{ color: "white", fontSize: "18px" }}>
                    $0.00
                  </span>
                  <br />
                  <span style={{ color: "#A39FA1", fontSize: "14px" }}>
                    Liquidity Cap
                  </span>
                </div>
              </div>
            </div>
            <hr style={{color:"white",marginTop:"1rem"}}/>
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
                    style={{ float: "right", marginTop:'10px' }}
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                  <span style={{ color: "white", fontSize: "18px" }}>0</span>
                  <br />
                  <span style={{ color: "#A39FA1", fontSize: "14px" }}>
                    Rewards Claimed
                  </span>
                </div>
              </div>
            </div>
            <hr style={{color:"white",marginTop:"1rem"}}/>
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
                    style={{ float: "right", marginTop:'10px' }}
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                  <span style={{ color: "white", fontSize: "18px" }}>0</span>
                  <br />
                  <span style={{ color: "#A39FA1", fontSize: "14px" }}>
                    Total Staked
                  </span>
                </div>
              </div>
            </div>
            <hr style={{color:"white",marginTop:"1rem"}}/>
            <div
              className="col-lg-3 col-md-3 col-sm-12 col-12 "
              //   style={{  }}
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                  <img
                    src={Imagelogo3}
                    alt=""
                    className="Image1"
                    style={{ float: "right",marginTop:'10px' }}
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-6">
                  <span style={{ color: "white", fontSize: "18px" }}>0</span>
                  <br />
                  <span style={{ color: "#A39FA1", fontSize: "14px" }}>
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
          <div
            className="row"
            //   style={{
            //     background: "#191015",
            //     borderRadius: "10px",
            //     padding: "2rem 3rem",
            //     margin: "0.01rem",
            //   }}
          >
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="border-meta">
                <div
                  className="row"
                  style={{
                    marginRight: "1rem",
                    background: "#191015",
                    borderRadius: "10px",
                    padding: "1rem 3rem",
                    margin: "0.01rem",
                  }}
                >
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                  <img
                      src={Imagelogo5}
                      alt=""
                      className="Image1"
                      // style={{ background:'red' }}
                    />
                    <span
                      className="p"
                      style={{ color: "white"}}
                    >
                      $0.00
                    </span>
                    <br />
                    <span style={{ color: "#A39FA1", fontSize: "14px",marginLeft:"2rem"}}>
                      Staked Balance
                    </span>
                    <hr style={{color:"white"}}/>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <img
                      src={Imagelogo4}
                      alt=""
                      className="Image1"
                      style={{ }}
                    />
                    <span style={{ color: "white", fontSize: "18px" }}>0</span>
                    <br />
                    <span style={{ color: "#A39FA1", fontSize: "14px",marginLeft:"2rem" }}>
                      Tokens Staked
                    </span>
                    <hr style={{color:"white"}}/>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                    <img
                      src={Imagelogo6}
                      alt=""
                      className="Image1"
                      style={{ }}
                    />
                    <span style={{ color: "white", fontSize: "18px" }}>
                      $0.00
                    </span>
                    <br />
                    <span style={{ color: "#A39FA1", fontSize: "14px",marginLeft:"2rem" }}>
                      Full Portfolio Value
                    </span>
                    <hr style={{color:"white"}}/>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                    <img
                      src={Imagelogo7}
                      alt=""
                      className="Image1"
                      style={{ }}
                    />
                    <span style={{ color: "white", fontSize: "18px" }}>0</span>
                    <br />
                    <span style={{ color: "#A39FA1", fontSize: "14px" }}>
                      Free Tokens
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="border-meta">
                <div
                  className="row"
                  style={{
                    marginRight: "1rem",
                    background: "#191015",
                    borderRadius: "10px",
                    padding:"0.5rem",
                    margin: "0.01rem",
                  }}
                >
                  <div className="col-lg-8 col-md-8 col-sm-8 col-8">
                    <div style={{borderBottom:"0.1rem solid #2F272B",width:"84%"}}>
                    <div style={{marginTop:"2rem",marginBottom:"1rem"}}>
                      <span style={{ color: "white", fontSize: "18px", }}>
                        0%
                      </span>
                      <br />
                      <span
                        style={{
                          color: "#A39FA1",
                          
                        }}
                      >
                        Tokens Liquid{" "}
                      </span>
                    </div>
                    </div>

                    {/* <hr style={{color:"white"}} /> */}

                    <div style={{ paddingTop: "24px" }}>
                      <span style={{ color: "white", fontSize: "18px" }}>
                        0%
                      </span>
                      <br />
                      <span style={{ color: "#A39FA1" }}>Tokens Staked </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                    <img src={Mainlogo} alt="" className="Image11" style={{width:"160%",marginTop:"14%"}} />
                  </div>
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
                style={{ height:"4rem",width:"45rem"}}
              ></input></div>
              <div className="col-lg-5 col-md-12 col-sm-12 col-12 input12" >
              <button className="input1">10%</button>
              <button className="input1">25%</button>
              <button className="input1">50%</button>
              <button className="input1">75%</button>
              <button className="input1 max" >MAX</button>
              </div>
          
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <button className="border-meta3">
                <div className="button-stake1">
                  Stake Your $EternityProtocol Tokens
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
              
              <div style={{ paddingTop: "50px", width:'300px' }}className='border-metal'>
              <div className="border-meta-bullet"> 
                <Nav
                  variant="pills"
                  defaultActiveKey="/home"
                  className="bottom1"
                  style={{width:'350px',height:"3rem"}}
                >
                  <Nav.Item className="stak-button1">
                    <div className="d-flex">
                      <Nav.Link href="/home" className="launch-1" style={{fontSize:'14px', color:'white'}}>Active Stakes</Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" className="launch-1" style={{marginLeft:'150px', fontSize:'14px',marginTop: "-10px", color:'white'}}>Post Stakes</Nav.Link>
                  </Nav.Item>
                </Nav>
                </div>
              </div>
              
            </div>
    </section>
  );
}
