import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AuthNav from "./AuthNav"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="header-img">
        <Navbar id="navbar" variant="dark" className="bg-blue-200 xl:h-20">
          <Navbar.Brand>
            &nbsp;
          
            &nbsp;
            <Link to="/">
              Numerology
            </Link>
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-28 top-4 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-40 top-4 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-52 top-4 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-64 top-4 z-30" />
          </Navbar.Brand>
          <Nav>
           <AuthNav />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Header;