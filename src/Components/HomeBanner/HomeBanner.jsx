import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const HomeBanner = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <section className="bg-gradient-to-r from-[#fafafa] form-0% to-[#fcfcfc] to-100%">
      <div className="py-24 px-6 container m-auto flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/*------------img-------1--------*/}
        <div className="md:w-1/2 overflow-hidden" data-aos="fade-right">
          <img src="https://i.ibb.co/nR4t9MH/fbb-1.png" className="w-full" />

          <div className="flex items-center justify-center -mt-10 ">
            <div className="flex items-center bg-slate-200 py-2 px-5 shadow-lg rounded-xl gap-3 w-72">
              <img
                src="https://i.ibb.co/nRVmZV0/b-food1.png"
                className=" rounded-md"
              />
              <div className="space-y-1">
                <h5 className="font-medium">Special Noodles</h5>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-black">$18.00</p>
              </div>
            </div>
          </div>
        </div>
        {/*------------Text-------1--------*/}
        <div className="md:w-1/2 overflow-hidden" data-aos="fade-left">
          <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight">
            Drive into Delights of Delectable{" "}
            <span className="text-[#fa4604]">Food🥦🌰</span>
          </h2>
          <p className="text-xl text-[#4a4a4a] py-4">
            Where Each Plant Weaves a story of Culinary Mastary and Passionte
            Craftsmanship
          </p>
          <div className="py-4">
            <Link to="/menu">
              <btton className="btn border-0 bg-[#fa4604] text-xl text-white">
                Order Now
              </btton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
