import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Order = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://food-delivery-1-server.vercel.app/payments?email=${user?.email}`
      );
      return res.json();
    },
  });
  console.log(orders);
  //---------Formate---------date--------
  const formateDate = (creationTime) => {
    const createdDate = new Date(creationTime);
    return createdDate.toLocaleDateString();
  };
  return (
    <div className="container m-auto">
      {/*------------Text-------1--------*/}
      <div className="py-10 px-6 flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight">
            All Your <span className="text-[#fa4604]">Orders!🥑</span>
          </h2>
        </div>
      </div>

      {/*----------Items--------Added-------Table-----------*/}
      <div div className="w-full">
        <div className="overflow-x-auto ">
          <table className="table">
            {/*-------------head-------------*/}
            <thead className="bg-[#fa4604] text-white text-xl w-full">
              <tr>
                <th>#</th>
                <th>Order Date</th>
                <th>Transiaction Id</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/*--------Row------1-----By-----Tablle------body-----*/}
              {orders.map((item, index) => (
                <tr key={index}>
                  <td className="text-black text-xl">{index + 1}</td>
                  <td className="text-[15px] text-black">
                    {formateDate(item.creationTime)}
                  </td>
                  <td className="text-[15px] text-black">
                    {item.transitionId}
                  </td>
                  <td className="text-[15px] text-black">$: {item.price}</td>
                  <td className="text-[15px] text-black">{item.status}</td>
                  <td>
                    <Link to="/contactUs">
                      <button className="btn border-0 bg-[#fa4604] text-white text-xl">
                        Contact
                      </button>
                    </Link>
                  </td>
                  <th></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
