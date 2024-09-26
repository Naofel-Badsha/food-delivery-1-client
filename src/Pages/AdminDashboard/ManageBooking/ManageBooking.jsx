import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { FaFirstOrder } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const ManageBooking = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payments?email=${user?.email}`
      );
      return res.json();
    },
  });
  console.log(orders);

  //----------hendleDeleteItem------------
  const handelDeleteOrder = (item) => {
    //console.log("DElete Ieams", item);
    //------------------------
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Cart item this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/payments/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your Cart item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold text-black py-2">
        Manage <span className="text-[#ff2200]">Booking</span>
      </h2>

      {/*----------Items--------Added-------Table-----------*/}
      <div div className="w-full">
        <div className="overflow-x-auto ">
          <table className="table">
            {/*-------------head-------------*/}
            <thead className="bg-[#fa4604] text-white text-xl w-full">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Transiaction Id</th>
                <th>Price</th>
                <th>Status</th>
                <th>Confirm</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/*--------Row------1-----By-----Tablle------body-----*/}
              {orders.map((item, index) => (
                <tr key={index}>
                  <td className="text-black text-xl">{index + 1}</td>
                  <td className="text-[15px] text-black">{item.email}</td>
                  <td className="text-[15px] text-black">
                    {item.transitionId}
                  </td>
                  <td className="text-[15px] text-black">$: {item.price}</td>
                  <td className="text-[15px] text-black">{item.status}</td>
                  <td>
                    <button className="btn border-0 bg-[#fa4604] text-white text-xl">
                      <FaFirstOrder className="text-2xl" />
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handelDeleteOrder(item)}
                      className="btn border-0 bg-[#fa4604] text-white text-xl"
                    >
                      <MdDeleteForever className="text-2xl" />
                    </button>
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

export default ManageBooking;
