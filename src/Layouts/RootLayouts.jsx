import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const RootLayouts = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <Navbar></Navbar>
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default RootLayouts;
