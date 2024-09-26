import React from "react";

const CartBanner = () => {
  return (
    <div className="container m-auto py-36 px-6 flex flex-col justify-center items-center">
      {/*------------Text-------1--------*/}
      <div className="text-center">
        <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight">
          Items Added to The <span className="text-[#fa4604]">Cart🥑</span>
        </h2>
      </div>
    </div>
  );
};

export default CartBanner;
