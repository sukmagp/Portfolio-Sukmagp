import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  const showdate = new Date();
  const dt = showdate.toDateString();
  return (
    <header className="pt-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <img src="logoQ.svg" alt="" className="h-[40px]" />
          <a
            className="text-lg text-[#dfdcc3] font-semibold font-tertiary "
            href="https://www.timeanddate.com/calendar/"
          >
            {dt}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
