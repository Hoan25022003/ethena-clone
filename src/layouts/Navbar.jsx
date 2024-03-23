// import React, { useState } from 'react';
import PropTypes from "prop-types";
// import { FaGithub, FaDiscord } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { RiNotionFill } from "react-icons/ri";

const NavBarItem = ({ title, className }) => {
  return <li className={`mx-4 cursor-pointer ${className}`}>{title}</li>;
};

const Navbar = () => {
  return (
    <nav className="sm:mx-6 mx-4 flex justify-between items-center py-3 sm:px-5 px-3 bg-overlayColor bg-opacity-30 rounded-xxl backdrop-blur-[1.5px] border border-borderColor">
      <a href={"*"} className="flex items-center justify-start ml-2 gap-x-2">
        <img className="w-10 sm:w-8" src="/ic_etherna.png" alt="" />
        <span className="ml-[2px] text-lg sm:text-2xl sm:ml-1 hidden sm:block">
          Securebrid
        </span>
      </a>
      <div className="flex items-center gap-x-5">
        <div className="flex items-center gap-x-2">
          <div className="hidden sm:flex lg:hidden xl:flex items-center gap-x-2 stat py-[2px] px-[10px] rounded-[4px]">
            <img src="usde.svg" className="w-6" alt="USDE" />
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] leading-[10px]">TRANSACTION</span>
              <span className="font-bold leading-5 text-primaryColor">
                1.32M
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-x-2 stat py-[2px] px-[10px] rounded-[4px]">
            <img src="sUSDe.svg" className="w-6" alt="USDE" />
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] leading-[10px]">VOLUME</span>
              <span className="font-bold leading-5 text-primaryColor">
                $1.32B
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-2 stat py-[2px] px-[10px] rounded-[4px]">
            <img src="ethena.svg" className="w-6" alt="USDE" />
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[10px] leading-[10px]">Users</span>
              <span className="font-bold leading-5 text-primaryColor">
                34.19K
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center px-[14px] py-2 rounded-md cursor-pointer gap-x-2 bg-grayColor2">
        <img
          src="binance-smart-chain-bsc-logo.png"
          className="w-[22px]"
          alt=""
        />
        <span className="font-bold">BSC</span>
      </div>
    </nav>
  );
};

NavBarItem.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;
