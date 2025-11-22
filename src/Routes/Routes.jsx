import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Shoping/Menu/Menu";
import CustomerServices from "../Pages/CustomerServices/CustomerServices";
import SingUp from './../Pages/SingUp/SingUp';
import LoginModal from './../Pages/LoginModal/LoginModal';
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Pages/Dashboard/UpdateProfile/UpdateProfile";
import CartPage from "../Pages/Shoping/CartPage/CartPage";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard/AdminDashboard";
import Users from "../Pages/AdminDashboard/Users/Users";
import AddMenu from "../Pages/AdminDashboard/AddMenu/AddMenu";
import ManageItems from "../Pages/AdminDashboard/ManageItems/ManageItems";
import UpdateMenu from "../Pages/AdminDashboard/UpdateMenu/UpdateMenu";
import Payment from "../Pages/Shoping/Payment/Payment";
import Order from "../Pages/Dashboard/Order/Order";
import ManageBooking from "../Pages/AdminDashboard/ManageBooking/ManageBooking";
import OurOffers from "../Pages/OurOffers/OurOffers";
import ContactUs from "../Pages/ContactUs/ContactUs";
import CustomerSupport from "../Pages/AdminDashboard/CustomerSupport/CustomerSupport";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <PrivateRoute><Menu></Menu></PrivateRoute>
      },
      {
        path: "/customerServices",
        element: <CustomerServices></CustomerServices>
      },
      {
        path: "/offer",
        element: <OurOffers></OurOffers>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/cartPage",
        element: <PrivateRoute><CartPage></CartPage></PrivateRoute>,
      },
      {
       path: "/updateProfile",
       element: <UpdateProfile></UpdateProfile>
      },
      {
       path: "/order",
       element: <Order></Order>
      },
      {
        path: "/loginModal",
        element: <LoginModal></LoginModal>
      },
      {
        path: "/processCheckout",
        element: <Payment></Payment>
      }
    ],
  },
  {
    path: "/singUp",
    element: <SingUp></SingUp>
  },
  {
    path: "",
    element: <PrivateRoute><DashboardLayouts></DashboardLayouts></PrivateRoute>,
    children:[
      {
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>
      },
      {
        path: "manageBooking",
        element: <ManageBooking></ManageBooking>
      },
      {
        path: "users",
        element: <Users></Users>
      },
      {
        path: "addMenu",
        element: <AddMenu></AddMenu>
       },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>
       },
      {
        path: "updateMenu/:id",
        element: <UpdateMenu></UpdateMenu>,
        loader: ({params}) => fetch(`https://food-delivery-1-server.vercel.app/menu/${params.id}`)
       },
       {
        path: "customerSupport",
        element: <CustomerSupport></CustomerSupport>
       },
    ]

  }
]);

export default router;
