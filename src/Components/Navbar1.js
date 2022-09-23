import React, { useState } from "react";
import Logo from "../Components/Images/logo.png";
// import logo2 from "../Components/Images/active2.png";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
// import logo1 from "../Components/Images/stake.png";

export default function Navbar1() {
  const [activeColor, setActiveColor] = useState(1);

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="image">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="" className="logo1" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="nav-background">
              <Nav variant="pills" >
                <div className="active-border">
                  <Nav.Item
                    className={`${activeColor === 1 ? "active" : ""}`}
                    onClick={() => setActiveColor(1)}
                  >
                    <Link
                      to="/"
                      className="nav-text"
                      // style={{
                      //   fontFamily: "roboto",
                      //   color: "#fff",
                      //   padding: "15px",
                      //   textDecoration: "none",
                      // }}
                    >
                      Staking
                    </Link>
                  </Nav.Item>
                </div>
                <Nav.Item
                  className={`${activeColor === 2 ? "active" : ""}`}
                  onClick={() => setActiveColor(2)}
                >
                  <Link
                    eventKey="link-1"
                    to="/active-stake"
                    className="nav-text"
                    // style={{ fontFamily: "roboto" }}
                  >
                    Active Stake
                  </Link>
                </Nav.Item>
                <Nav.Item
                // className={`${activeColor === 3 ? "active" : ""}`}
                // onClick={() => setActiveColor(3)}
                >
                  <Link
                    eventKey="disabled"
                    disabled
                    // style={{ fontFamily: "roboto" }}
                    className="nav-text"
                  >
                    Soon
                  </Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <form className="connect-wallet1" role="search">
              <button
                className="btn"
                type="submit"
                id="connect1"
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontFamily: "roboto",
                }}
              >
                Connect Wallet
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
