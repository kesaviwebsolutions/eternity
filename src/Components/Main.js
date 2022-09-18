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

export default function Main() {
  return (
    <section>
      <div className="container">
        <div>
          <div className="border-meta">
            <div className="col">
              <div className="sc-1">
                <div className="imag-1 d-flex">
                  <img src={Imagelogo} alt="" className="Image1" />
                  <div>
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
        <div className="container">
          <div style={{width:'60%'}}>
            <h2>Balances</h2>
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
                      <span className="span1">Full Portfolio Value</span>
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
        <div className="container">
          <div>
            <h2>Token Chart</h2>
            <div className="border-meta">
             <div className="d-flex">
             <div className="col d-grid">
                <div className="sc-1">
                  <div className="imag-1 ">
                    {/* <img src={Imagelogo} alt="" className="Image1" /> */}
                    <div>
                      <p className="para1">0%</p>
                      <p className="para1"> Tokens Liquid </p>
                      <span ></span>
                    </div>
                  </div>
                </div>
                <div className="sc-2">
                  <div className="imag-2">
                    {/* <img src={Imagelogo1} alt="" className="Image1" /> */}
                    <div>
                      <p className="para1">0%</p>
                      <p className="para1"> Tokens Staked </p>
                      <span></span>
                    </div>
                  </div>
                </div>
               
              </div>
              <div>
                <img src={Imagelogo8} alt="" style={{width:'30%'}}/>
              </div>
             </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
