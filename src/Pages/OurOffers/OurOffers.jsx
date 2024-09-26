import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const OurOffers = () => {
    useEffect(() => {
        AOS.init({duration: "2000"}) 
      },[])
  return (
    <div className="container m-auto">
      {/*------------Text-------1--------*/}
      <div className="text-center py-28">
        <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight">
          Our Food{" "}
          <span className="text-[#fa4604]">Offers🥑</span>
        </h2>
      </div>

      <div className="px-6 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2 ">
        {/*--------Step--------1------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-right">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">Discount Coupons and Promo Codes</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">Percentage Off: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">A discount of a certain percentage on the total order amount, such as 10% or 20% off.</small></li>
                <li className="text-black font-bold text-xl list-none">Flat Discount: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">A fixed amount off the total order, such as $5 off on orders above $25.</small></li>
                <li className="text-black font-bold text-xl list-none">First-Time User Discounts: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Special discounts for new users placing their first order on the platform.</small></li>
                <li className="text-black font-bold text-xl list-none">Referral Discounts: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Discounts earned by referring friends or family to the platform. Both the referrer and the referred person typically receive a discount.</small></li>
            </div>
        </div>
        {/*--------Step--------2------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-left">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">Free Delivery</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">No Delivery Fee: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Orders placed above a certain amount qualify for free delivery.</small></li>
                <li className="text-black font-bold text-xl list-none">Limited-Time Free Delivery: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Temporary promotions offering free delivery on all orders or orders from specific restaurants.</small></li>
            </div>
        </div>
        {/*--------Step--------3------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-right">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">Cashback Offers</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">Instant Cashback: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">A portion of the order amount is refunded immediately or after a certain period.</small></li>
                <li className="text-black font-bold text-xl list-none">Wallet Cashback: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Cashback that is credited to the customer’s in-app wallet or linked payment account, which can be used for future orders.</small></li>
            </div>
        </div>
        {/*--------Step--------4------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-left">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">Limited-Time Offers</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">Flash Sales: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Short-duration sales offering significant discounts on specific items or restaurants.</small></li>
                <li className="text-black font-bold text-xl list-none">Seasonal Promotions: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Discounts and special offers tied to holidays, festivals, or events (e.g., Christmas, Halloween, Super Bowl).</small></li>
            </div>
        </div>
        {/*--------Step--------5------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-right">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">Partnered Offers</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">Bank and Payment Method Discounts: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Special discounts for using specific credit/debit cards, payment apps, or mobile wallets.</small></li>
                <li className="text-black font-bold text-xl list-none">Corporate Offers: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Discounts for employees of certain companies or members of particular organizations.</small></li>
            </div>
        </div>
        {/*--------Step--------6------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-left">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">Free Items</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">Complimentary Appetizers or Drinks: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Free items added to the order, often as part of a limited-time promotion or for meeting a minimum order amount.</small></li>
                <li className="text-black font-bold text-xl list-none">Surprise Gifts: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Occasional free items or discounts included in the order as a surprise bonus.</small></li>
            </div>
        </div>
        {/*--------Step--------7------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-right">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4" >Student Discounts</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">Student-Specific Offers: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Discounts available exclusively for students, usually requiring verification of student status.</small></li>
            </div>
        </div>
        {/*--------Step--------8------------*/}
        <div className="border-2 hover:border-[#fa4604] duration-150 p-3" data-aos="fade-left">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">Group Order Discounts</h2>
            <div>
                <li className="text-black font-bold text-xl list-none">Group Ordering: <small className="font-medium md:text-lg lg:text-lg text-slate-400 text-justify">Discounts or rewards for placing large group orders, often used for office or party orders.</small></li>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurOffers;
