import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-slate-100">
      <footer className="footer py-10 px-6 text-base-content container m-auto">
        <aside>
          <img src="https://i.ibb.co/zQWFgXn/logo-ff.png" className="w-40" />
          <p className="md:w-44 text-black text-xl">
            Savor the artistry where every dish is a culinary master price
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-black text-xl">UseFull Links</h6>
          <Link to="/menu" className="link text-black link-hover text-[18px]">
            About Us
          </Link>
          <Link to="/" className="link text-black link-hover text-[18px]">
            Services
          </Link>
          <Link to="/offer" className="link text-black link-hover text-[18px]">
            Offer
          </Link>
          <Link to="/contactUs" className="link text-black link-hover text-[18px]">
            Contact Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-black text-xl">Contact</h6>
          <div className="link link-hover flex gap-2 items-center">
            <FaPhoneAlt className="text-xl text-black" />
            <p className="text-xl text-black">01722 338899</p>
          </div>
          <div className="link link-hover flex gap-2">
            <MdEmail className="text-xl text-black" />
            <p className="text-xl text-black">foodfeastly@gmail.com</p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-black text-xl">Social</h6>
          <div className="flex gap-4">
            <Link>
              <i className="fa-brands fa-facebook text-4xl text-black"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-youtube text-4xl text-black"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-twitter text-4xl text-black"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-instagram text-4xl text-black"></i>
            </Link>
          </div>
        </nav>
      </footer>

      <div className="bg-slate-100">
        <footer className="footer justify-center  items-center py-6 px-5 container m-auto">
          <aside className="grid-flow-col items-center text-black">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p className="text-black text-xl">Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
