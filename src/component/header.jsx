import React from "react";
import Logo from "../assets/logo.svg";
// link
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="pt-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <Link to="contact" smooth={true} spy={true}>
            <button className="btn btn-sm">Get in touch</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
