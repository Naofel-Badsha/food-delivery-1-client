import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomerSupport = () => {
  return (
    <div className="px-4">
      {/*---------Heading---------*/}
      <h2 className="text-2xl font-bold text-black py-2">
        Customer <span className="text-[#ff2200]">Support</span>
      </h2>

      {/*--------Help Center or FAQ---And---Multiple Contact Options-------*/}
      <div className="flex gap-10  flex-col lg:flex-row">
        {/*----------Help Center or FAQ----------*/}
        <div className="flex-1">
          <h2 className="text-2xl text-black">Help Center or FAQ</h2>
          <h4 className="text-xl text-slate-800 mb-4">
            Detailed Knowledge Base: A self-service hub containing answers to
            frequently asked questions, guides, and troubleshooting tips
          </h4>
          <div className="join join-vertical w-full">
            {/*--------Question------1------*/}
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl text-black font-medium">
                It covers common topics like order placement....?
              </div>
              <div className="collapse-content">
                <p className="text-slate-700">
                  Order placement support helps customers with selecting menu
                  items, customizing orders, and completing payment securely. It
                  also covers order confirmation, tracking, and options for
                  modifications or cancellations.
                </p>
              </div>
            </div>
            {/*--------Question------2------*/}
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl text-black font-medium">
                Payment issues....?
              </div>
              <div className="collapse-content">
                <p className="text-slate-700">
                  Payment issues support assists with problems related to
                  transaction failures, declined cards, or incorrect charges. It
                  also guides users on updating payment methods, applying
                  discounts, and checking refund status.
                </p>
              </div>
            </div>
            {/*--------Question------3------*/}
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl text-black font-medium">
                Food delivery times....?
              </div>
              <div className="collapse-content">
                <p className="text-slate-700">
                  Food delivery times support provides estimated delivery
                  windows based on location, restaurant, and traffic. It also
                  helps with tracking orders in real-time and managing delays or
                  updates.
                </p>
              </div>
            </div>
            {/*--------Question------4------*/}
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl text-black font-medium">
                Refunds, and More....?
              </div>
              <div className="collapse-content">
                <p className="text-slate-700">
                  Refunds support covers eligibility criteria, processing times,
                  and how to request a refund for issues like missing items or
                  incorrect orders. It also provides details on cancellation
                  fees and refund methods, including app wallet credits or
                  original payment reversal.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*----------Multiple Contact Options----------*/}
        <div>
          <h2 className="text-2xl text-black py-2">Multiple Contact Options</h2>
          <div>
            <div className="flex gap-2 items-center">
              <FaPhone className="text-3xl text-[#ff2200]"></FaPhone>
              <p className="text-xl text-black">01732816962</p>
            </div>
            <div className="flex gap-2 items-center mt-3">
              <FaEnvelope className="text-3xl text-[#ff2200]"></FaEnvelope>
              <p className="text-xl text-black">feastly@gmail.com</p>
            </div>
          </div>

          <div className="py-5">
            <Link to="https://www.facebook.com/">
              <FaFacebook className="text-3xl text-[#ff2200] "></FaFacebook>
            </Link>
            <Link to="https://x.com/">
              <FaTwitter className="text-3xl text-[#ff2200] mt-3"></FaTwitter>
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram className="text-3xl text-[#ff2200] mt-3"></FaInstagram>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
