import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthNav from "./AuthNav";

const AuthHeader = () => {
  return (
    <>
      <div id="header-img">
        <Navbar fluid_id="navbar" variant="dark" className="text-black xl:h-20 bg-blue-200 ">
          <Navbar.Brand>
            &nbsp;
       
            &nbsp;
            <Link to="/" className="no-underline text-black bold absolute top-5" >
              Numerology | Life Path Calculator
            </Link>
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-28 top-4 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-40 top-4 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-52 top-4 z-30" />
            <img src="https://i.ibb.co/hf5FJch/lotus.png" alt="lotus" className="logo w-10 absolute right-64 top-4 z-30" />
          </Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Link to="/Profiles" className="nav-link absolute ml-40 left-96 top-4 text-black">
                Profiles
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/LifePaths" className="nav-link absolute top-4 ml-44  left-40 text-black">
                Life Paths
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/CreateProfile" className="nav-link absolute ml-48 top-4  left-60 text-black">
               Add A Profile
              </Link>
            </Nav.Item>
            <AuthNav />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default AuthHeader;