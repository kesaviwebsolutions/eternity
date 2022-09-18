import React from "react";
import "./Main.css";
import Imagelogo from "../Components/Images/index.png";
import Imagelogo1 from "../Components/Images/index4.png";
import Imagelogo2 from "../Components/Images/index1.png";
import Imagelogo3 from "../Components/Images/index3.png";
import Imagelogo4 from "../Components/Images/index1.png";
import Imagelogo5 from "../Components/Images/index5.png";
import Imagelogo6 from "../Components/Images/index6.png";
import Imagelogo7 from "../Components/Images/index7.png";
import Imagelogo8 from "../Components/Images/logo.png";
import Nav from "react-bootstrap/Nav";

export default function Main() {
  return (
    <section>
      <div className="container">
        <div className="hh">
          <div className="container">
            <div>
              <div className="border-meta">
                <div className="col">
                  <div className="sc-1">
                    <div className="imag-1 d-flex">
                      <img src={Imagelogo} alt="" className="Image1" />
                      <div style={{borderRight:' 1px solid #fff', paddingRight:'50px'}}>
                        <p className="para1">$0.00</p>
                        <span className="span1">Liquidity Cap</span>
                      </div>
                      
                    </div>
                  </div>
                  <div className="sc-2">
                    <div className="imag-2 d-flex">
                      <img src={Imagelogo1} alt="" className="Image1" />
                      <div>
                        <p className="para1">0</p>
                        <span className="span1">Rewards Claimed</span>
                      </div>
                    </div>
                  </div>
                  <div className="sc-3">
                    <div className="imag-3 d-flex">
                      <img src={Imagelogo2} alt="" className="Image1" />
                      <div>
                        <p className="para1">0</p>
                        <span className="span1">Total Stake</span>
                      </div>
                    </div>
                  </div>
                  <div className="sc-4">
                    <div className="imag-4 d-flex">
                      <img src={Imagelogo3} alt="" className="Image1" />
                      <div>
                        <p className="para1">0</p>
                        <span className="span1">Reward Tokens</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid">
            <div className="row" style={{ width: "100%", margin: "2rem auto"}}>
              <div className="col-lg-8  col-md-8 col-sm-12 col-12">
                <div className="container">
                  <div style={{ width: "" }}>
                    <h2 style={{ color: "white" }}>Balances</h2>
                    <div className="border-meta1">
                      <div className="col">
                        <div className="sc-1">
                          <div className="imag-1 d-flex">
                            <img src={Imagelogo4} alt="" className="Image1" />
                            <div>
                              <p className="para1">$0.00</p>
                              <span className="span1">Staked Balance</span>
                            </div>
                          </div>
                        </div>
                        <div className="sc-2">
                          <div className="imag-2 d-flex">
                            <img src={Imagelogo5} alt="" className="Image1" />
                            <div>
                              <p className="para1">0</p>
                              <span className="span1">Tokens Stacked</span>
                            </div>
                          </div>
                        </div>
                        <div className="sc-3">
                          <div className="imag-3 d-flex">
                            <img src={Imagelogo6} alt="" className="Image1" />
                            <div>
                              <p className="para1">0</p>
                              <span className="span1">
                                Full Portfolio Value
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="sc-4">
                          <div className="imag-4 d-flex">
                            <img src={Imagelogo7} alt="" className="Image1" />
                            <div>
                              <p className="para1">0</p>
                              <span className="span1">Free Tokens</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="col-lg-4  col-md-4 col-sm-12 col-12">
                <div className="container">
                  <div className="">
                    <h2 style={{ color: "white" }}>Token Chart</h2>
                    <div >
                      </div>
                      <div className="">
                        </div>
                        <div className="row  border-132"  style={{borderImageSource:"linear-gradient(to left, #00C853,#B2FF590)"}}>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                          <div className="col ">
                            <div className="">
                              <div className="sc-1">
                                <div className="imag-1 ">
                                 
                                  <div className="token1">
                                    <p className="para1">0%</p>
                                    <p className="para1"> Tokens Liquid </p>
                                    <hr style={{width:'150px', color:'#A19D9F'}}/>
                                    <span className="span-new "></span>
                                  </div>
                                
                             </div>
                              </div>
                              <div className="sc-2">
                                <div className="imag-2">
                                  <div>
                                    <p className="para1">0%</p>
                                    <p className="para1"> Tokens Staked </p>
                                    
                                    <span className="span-new1"></span>
                                  </div>
                                </div>
                              </div>
                              </div>
                            </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-5" style={{ backgroundColor:'#191015'}}>
                           <div className="" style={{width:'100%'}}>
                           <div className="image-lg" >
                              <img
                                src={Imagelogo8}
                                alt=""
                                style={{ width: "100%", marginTop:'50px' }}
                                className="side-logo"
                              />
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
            <div>
              <h2 style={{ color: "white" }}>Stake</h2>
              <div className="border-meta">
                <div className="col">
                  <div className="input-group mb-3">
                    <div className="input112">
                    <input type='number' className="input-type">
                    </input>
                    

                    <button className="input1">10%</button>
                    <button className="input1">25%</button>
                    <button className="input1">50%</button>
                    <button className="input1">75%</button>
                    <button className="input1">MAX</button>
                    </div>
                  </div>
                  <div
                      className="d-flex "
                      style={{ justifyContent: "center" }}
                    >
                      <button className="button-stake">
                        <div className="button-stake1">
                          Stake Your $MetaWeb3Pad Tokens
                        </div>
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div style={{ paddingTop: "50px" }}className='border-metal'>
                <Nav
                  variant="pills"
                  defaultActiveKey="/home"
                  className="bottom1"
                >
                  <Nav.Item className="stak-button1">
                    <div className="d-flex">
                      <Nav.Link href="/home" style={{fontSize:'14px'}}>Active Stakes</Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" className="launch-1" style={{marginLeft:'150px', fontSize:'14px'}}>Post Stakes</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
