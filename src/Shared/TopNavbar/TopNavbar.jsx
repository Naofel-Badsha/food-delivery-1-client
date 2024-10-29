import React from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className=" py-3 px-6 container m-auto">
      <div className="flex gap-4 items-center justify-between flex-col lg:flex-row">
        {/*-----------Logo----------*/}
        <div className="">
          <img src="https://i.ibb.co/zQWFgXn/logo-ff.png" className="w-40" />
        </div>
        {/*-----------Searce----------*/}
        <div className="w-full">
          <label className="input bg-[#4d5b6f] text-xl text-white input-bordered flex items-center gap-2">
            <input type="search" className="grow w-full" placeholder="Search " />
            <i className="fa-solid fa-magnifying-glass text-2xl text-[#fa4604]"></i>
          </label>
        </div>
        {/*-----------Social----------*/}
        <div className="">
          <div className="flex gap-4">
            <Link to="https://www.facebook.com/">
              <i className="fa-brands fa-facebook text-3xl text-[#fa4604]"></i>
            </Link>
            <Link to="https://x.com">
              <i className="fa-brands fa-twitter text-3xl text-[#fa4604]"></i>
            </Link>
            <Link to="https://www.instagram.com/">
              <i className="fa-brands fa-instagram text-3xl text-[#fa4604]"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
