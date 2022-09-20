import React from "react";
import Logo from "../Components/Images/logo.png";
import Nav from "react-bootstrap/Nav";
import logo1 from "../Components/Images/index1.png";
import logo2 from "../Components/Images/index2.png";

export default function Navbar() {
  return (
    <section>
      <div className="container">
        <div className="row navstyle">
          <nav className="navbar navbar-expand-lg bg-transparent">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="" className="logo1" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ borderRadius: "100px" }}
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <Nav variant="pills" defaultActiveKey="/home" className="stak1">
                  <Nav.Item className="stak-button">
                    <div className="d-flex" style={{ padding: "0px 20px" }}>
                      <Nav.Link
                        href="/home"
                        className="nav-link1"
                        style={{
                          borderRadius: "100px 100px 100px 100px",
                          padding: "5px 5px",
                        }}
                      >
                        <img src={logo1} alt="" />
                        Staking
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">
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
              <form className="d-flex" role="search">
                <button
                  className="btn"
                  type="submit"
                  style={{ fontWeight: "700", color: "white" }}
                >
                  Connect Wallet
                </button>
              </form>
            </div>
          </nav>
        </div>
        <hr style={{ color: "white", width: "100%" }} />
      </div>
    </section>
  );
}
