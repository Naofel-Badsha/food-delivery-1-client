import { Link} from "react-router-dom";
import TopNavbar from "../TopNavbar/TopNavbar";
import LoginModal from "../../Pages/LoginModal/LoginModal";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Profile from "../Profile/Profile";
import useCart from "../../Hooks/useCart";



const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  //------Addto------Card-----Items-----
  const [cart, refetch] = useCart([]);
  // console.log(cart);
      refetch()
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/*-----------Dropdown-------1-------*/}
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-white shadow-lg shadow-black rounded-md ">
            <li>
              <Link to="/menu">All</Link>
            </li>
          </ul>
        </details>
      </li>
      {/*-----------Dropdown-------2-------*/}
      <li>
      <Link to="/customerServices">Services</Link>
      </li>
      <li>
        <Link to="/offer">Offers</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact Us</Link>
      </li>
    </>
  );
  return (
    <>
      <TopNavbar></TopNavbar>
      <div className="bg-white container sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30  px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 ">
        <div className="navbar container  m-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="hover:text-[#fa4604] lg:hidden"
              >
                <i className="fa-solid fa-bars text-3xl"></i>
              </div>
              <ul
                tabIndex={0}
                className="menu text-xl dropdown-content bg-white rounded-box z-[1] w-52 shadow-md gap-6 border-2 border-orange-500 font-primary"
              >
                {/*-------------memu---items------------*/}
                {navItems}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  font-primary text-xl gap-6">
              {/*-------------memu---items------------*/}
              {navItems}
            </ul>
          </div>
          <div className="navbar-end ">
            <div className="flex items-center justify-end">
              {/*----------Cart-----Button-------*/}
              <Link to="/cartPage">
                <label
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost bg-slate-300 btn-circle mr-6 "
                >
                  <div className="indicator">
                    <i className="fa-solid fa-cart-plus text-2xl text-[#fa4604]"></i>
                    <span className="badge w-7 h-7 indicator-item text-lg">
                      {cart.length || 0}
                    </span>
                  </div>
                </label>
              </Link>
              {/*---------User--------*/}
              {user ? (
                <Profile user={user}></Profile>
              ) : (
                <Link to="/">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="btn border-0 bg-[#fa4604] text-xl text-white"
                  >
                    <i className="fa-solid fa-user text-white hidden md:block "></i>
                    LogIn
                  </button>
                </Link>
              )}
            </div>
            <LoginModal></LoginModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
