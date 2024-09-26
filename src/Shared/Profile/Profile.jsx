import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = ({ user }) => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container m-auto">
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="flex items-center justify-end">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button">
            {/*-------Profile----Image------*/}
            <div className="w-12 h-12 rounded-full cursor-pointer">
              {user.photoURL ? (
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={user.photoURL}
                  />            
              ) : (
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://i.ibb.co/MNgxcZ3/user-1.png"
                  />
              )}
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-white min-h-full text-xl text-black w-56 md:w-80 lg:w-80 p-4 gap-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/updateProfile">Profile</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              {user ? (
                <a onClick={handleLogout}>Log Out</a>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
