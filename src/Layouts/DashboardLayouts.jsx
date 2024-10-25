import { Link, Outlet } from "react-router-dom";
//---------Icons-------
import { MdDashboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDashboardCustomize } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

const DashboardLayouts = () => {
  const { user } = useContext(AuthContext);
  const sharedLinks = (
    <>
      <li>
        <Link to="/">
          <IoHome/> Home
        </Link>
      </li>
      <li>
        <Link to="/menu">
          <FaShoppingCart />
          Menu
        </Link>
      </li>

      <li>
        <Link to="/">
          <FaLocationArrow /> Orders Tracking
        </Link>
      </li>
      <li>
        <Link to="/customerSupport">
          <FaQuestionCircle />
          Customer Support
        </Link>
      </li>
    </>
  );

  // const isAdmin = false;
  return (
    <div>
      {/* {
        isAdmin ? <></> :<></>
      } */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Page content here */}
          <div className="flex items-center justify-between gap-6 py-4 px-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <span className="text-xl text-white">
                <MdDashboardCustomize />
              </span>
            </label>
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-sky-950 min-h-full text-xl text-white w-56 md:w-80 lg:w-80 p-4 gap-6">
            {/* Sidebar content here */}
            <div>
              <Link to="updateProfile">
                <div className="flex items-center justify-center gap-5">
                  <img
                    src={user.photoURL}
                    className="w-24 h-24 rounded-full object-cover "
                  />
                  <span className="px-3 rounded-full bg-[#fa4604] text-white text-center border-0">
                    Admin
                  </span>
                </div>
              </Link>
              <h2 className="text-center py-4">{user.displayName}</h2>
              <hr />
            </div>

            <li>
              <Link to="/dashboard">
                <MdDashboard /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/manageBooking">
                <FaShoppingBasket /> Manage Booking
              </Link>
            </li>
            {/*--------Done----1-----*/}
            <li>
              <Link to="/addMenu">
                <FaPlusCircle /> Add Menu
              </Link>
            </li>
            {/*--------Done----2-----*/}
            <li>
              <Link to="/manageItems">
                <FaEdit /> Manage Items
              </Link>
            </li>
            {/*--------Done----3-----*/}
            <li>
              <Link to="users">
                <FaUsers /> All Users
              </Link>
            </li>
            <hr />
            {/*--------Shared------Links-------*/}
            {sharedLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
