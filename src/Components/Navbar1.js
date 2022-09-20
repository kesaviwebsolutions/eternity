import React from "react";
import Logo from "../Components/Images/logo.png";
import logo2 from "../Components/Images/index2.png";
import Nav from "react-bootstrap/Nav";
import logo1 from "../Components/Images/index1.png";

export default function Navbar1() {
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="image">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="" className="logo1" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div>
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Nav
                    variant="pills"
                    defaultActiveKey="/home"
                    className="stak1"
                  >
                    <Nav.Item className="stak-button">
                      <div className="d-flex">
                        <Nav.Link
                          href="/home"
                          className="nav-link1"
                          style={{
                            borderRadius: "100px 100px 100px 100px",
                            // padding: "5px 5px",
                          }}
                        >
                          <img src={logo1} alt="" className="img-logo"/>
                          Staking
                        </Nav.Link>
                      </div>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link 
                      className="text-center"
                      eventKey="link-1" style={{color:'white'}}>
                        <img src={logo2} alt="" />
                        Launchpad
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="disabled" disabled>
                        Soon
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <form className="gapping d-flex" role="search">
              <button
                className="btn"
                type="submit"
                style={{ fontWeight: "700", color: "white"}}
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
