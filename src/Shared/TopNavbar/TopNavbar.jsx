import React from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <div className="px-3 container m-auto">
      <div className="flex gap-4 py-3 items-center justify-between flex-col lg:flex-row">
        {/*-----------Logo----------*/}
        <div className="">
          <h1 className="text-xl font-bold">
            <span className="text-[#FA4604] text-4xl font-bold rotate-3">G</span>ood
            <span className="text-[#FA4604] text-4xl font-bold rotate-3">F</span>ood
          </h1>
        </div>
        {/*-----------Searce----------*/}
        <div className="">
          <label className="input bg-gray-100 text-xl text-white input-bordered flex items-center">
            <input
              type="search"
              className="grow w-full text-black text-[16px]"
              placeholder="Search "
            />
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
