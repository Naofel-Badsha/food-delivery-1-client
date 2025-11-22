import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <section className="container m-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12  ">
        {/*--------------1--------------*/}
        <div className="md:w-1/2" data-aos="fade-right">
          <div className="text-left">
            <h5 className="subTitle">Our Story & Services</h5>
            <h1 className="title md:w-[380px] lg:md:w-[520px]">
              Our Culinary Journey And Services
            </h1>
            <p className="text-xl text-slate-500 py-4">
              Rooted in passion, we curent unforgattable during exprience and
              offer exceptional services, blending culinary artistry with warm
              hospaitality.
            </p>
            <btton className="btn border-0 bg-[#fa4604] text-xl text-white">
              Expoler More
            </btton>
          </div>
        </div>

        {/*--------------2--------------*/}
        <div className="md:w-1/2" data-aos="fade-left">
          <div className="grid  lg:grid-cols-2  gap-8 items-center">
            {/*----------Cart---------1------*/}
            <div className="text-center shadow-md rounded-sm py-5 px-4 cursor-pointer border-2 hover:border-[#fa4604] transition-all duration-200">
              <i className="fa-solid fa-bowl-rice text-5xl text-[#fa4604]"></i>
              <h5 className="font-semibold text-[#fa4604] text-xl py-3">
                Catering
              </h5>
              <p className="text-[#713d2a]">
                Deligght your guests width our flavors and presntation
              </p>
            </div>
            {/*----------Cart---------2------*/}
            <div className="text-center shadow-md rounded-sm py-5 px-4 cursor-pointer border-2 hover:border-[#fa4604] transition-all duration-200">
              <i className="fa-solid fa-clock-rotate-left text-5xl text-[#fa4604]"></i>
              <h5 className="font-semibold text-[#fa4604] text-xl py-3">
                First delivery
              </h5>
              <p className="text-[#713d2a]">
                We deliver your order promptly to your door
              </p>
            </div>
            {/*----------Cart---------3------*/}
            <div className="text-center shadow-md rounded-sm py-5 px-4 cursor-pointer border-2 hover:border-[#fa4604] transition-all duration-200">
              <i className="fa-solid fa-cart-shopping text-5xl text-[#fa4604]"></i>
              <h5 className="font-semibold text-[#fa4604] text-xl py-3">
                Online ordering
              </h5>
              <p className="text-[#713d2a]">
                Explore menu & order with case using our online ordering
              </p>
            </div>
            {/*----------Cart---------4------*/}
            <div className="text-center shadow-md rounded-sm py-5 px-4 cursor-pointer border-2 hover:border-[#fa4604] transition-all duration-200">
              <i className="fa-solid fa-gift text-5xl text-[#fa4604]"></i>
              <h5 className="font-semibold text-[#fa4604] text-xl py-3">
                Gift Cards
              </h5>
              <p className="text-[#713d2a]">
                Give the gift of accept Sonal dining with food gift cards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
