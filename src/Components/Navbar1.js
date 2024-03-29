import React, { useState } from "react";
import Logo from "../Components/Images/logo.png";
// import logo2 from "../Components/Images/active2.png";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
// import logo1 from "../Components/Images/stake.png";
import { BiLogIn } from "react-icons/bi";
import Modal from "react-bootstrap/Modal";

import meta from "./Images/meta.png";
import walletconnect from "./Images/connect.dc871f60434bd877387be88f4a3192d6.svg";

export default function Navbar1({ account, Dissconnect, Metamask, walletConnectlogin }) {
  const [activeColor, setActiveColor] = useState(1);

  const slice = (address) => {
    const first = address.slice(0, 4);
    const second = address.slice(38);
    return first + "..." + second;
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="image">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="" className="logo1" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="nav-background">
              <Nav variant="pills">
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
                {/* <Nav.Item
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
                </Nav.Item> */}
              </Nav>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="connect-wallet1" role="search">
              {/* <button
                className="btn"
                id="connect1"
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontFamily: "roboto",
                }}
                onClick={() => {
                  if (account) {
                    Dissconnect();
                  } else {
                    Metamask();
                  }
                }}
              >
                {account ? slice(account) : "Connect"}{" "}
                {account ? <BiLogIn size={20} /> : ""}
              </button> */}

              <button
                className="btn"
                id="connect1"
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontFamily: "roboto",
                }}
                onClick={() => {
                  if (account) {
                    Dissconnect();
                    return;
                  }
                  handleShow();
                }}
              >
                <span>
                    {account ? slice(account) : "Connect wallet"}{" "}
                    {account ? <BiLogIn size={20} /> : ""}
                  </span>
              </button>
            </div>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title className="ms-auto">
                Please Connect Your Wallet
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex align-items-center justify-content-around">
                <img
                  src={meta}
                  width='90'
                  onClick={() => {
                    setShow(false);
                    Metamask();
                  }}
                  alt=""
                  className="connectimg"
                />
                <img
                  src={walletconnect}
                  alt=""
                  width='80'
                  className="connectimg2"
                  onClick={() => {
                    setShow(false);
                    console.log("RUNNING");
                    walletConnectlogin();
                  }}
                />
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </section>
  );
}
