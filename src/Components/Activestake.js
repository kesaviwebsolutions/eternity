import React from 'react'
import './Activestake.css'
import Imagelogo from "../Components/Images/index.png";
import Imagelogo1 from "../Components/Images/index4.png";
import Imagelogo2 from "../Components/Images/index1.png";
import Imagelogo3 from "../Components/Images/index3.png";


export default function Activestake() {
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
    </section>
  )
}
