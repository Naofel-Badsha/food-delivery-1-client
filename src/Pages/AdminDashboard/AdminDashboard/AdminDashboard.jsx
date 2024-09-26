import FoodAreaChart from "../../../Components/Recharts/FoodAreaChart/FoodAreaChart";
import FoodBarChart from "../../../Components/Recharts/FoodBarChart/FoodBarChart";
import FoodPieChart from "../../../Components/Recharts/FoodPieChart/FoodPieChart";
import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";

const AdminDashboard = () => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-black ">
        Hi, <span className="text-[#ff2200]">Naofel Badsha </span>
      </h2>

      {/*--------------Cart------------*/}
      <div className="flex gap-6 flex-col lg:flex-row py-10">
        {/*----------------------*/}
        <div className="w-full border-2 border-[#ff2200] px-4 py-6 rounded-xl text-center">
          <h3 className="text-2xl text-black">Revenus</h3>
          <div className="flex gap-5 items-center justify-center mt-3">
            <FaDollarSign className="text-5xl text-[#ff2200] " />
            <h5 className="text-5xl text-black">520.7</h5>
          </div>
        </div>
        {/*-----------------------*/}
        <div className="w-full border-2 border-[#ff2200] px-4 py-6 rounded-xl text-center">
          <h3 className="text-2xl text-black">Users</h3>
          <div className="flex gap-5 items-center justify-center mt-3">
            <FaUsers className="text-5xl text-[#ff2200]" />
            <h5 className="text-5xl text-black">120</h5>
          </div>
        </div>
        {/*------------------------*/}
        <div className="w-full border-2 border-[#ff2200] px-4 py-6 rounded-xl text-center">
          <h3 className="text-2xl text-black">Menu Items</h3>
          <div className="flex gap-5 items-center justify-center mt-3">
            <MdMenuBook className="text-5xl text-[#ff2200]" />
            <h5 className="text-5xl text-black">166</h5>
          </div>
        </div>
        <div className="w-full border-2 border-[#ff2200] px-4 py-6 rounded-xl text-center">
        <h3 className="text-2xl text-black">Orders</h3>
          <div className="flex gap-5 items-center justify-center mt-3">
            <MdBorderColor className="text-5xl text-[#ff2200]" />
            <h5 className="text-5xl text-black">292</h5>
          </div>
        </div>
      </div>

      {/*--------------Chart------------*/}
      <div>
        <div className="shadow-xl border-2 border-[#ff2200] p-4">
          <FoodAreaChart></FoodAreaChart>
        </div>

        <div className="flex gap-6 flex-col lg:flex-row py-6">
          <div className="flex-1 shadow-xl border-2 border-[#ff2200] p-4">
            <FoodBarChart></FoodBarChart>
          </div>
          <div className="flex-1 shadow-xl border-2 border-[#ff2200] p-4">
            <FoodPieChart></FoodPieChart>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
