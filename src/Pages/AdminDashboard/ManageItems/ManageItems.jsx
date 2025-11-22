import React from "react";
import useManageItemsMenu from "../../../Hooks/useManageItemsMenu";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, refetch] = useManageItemsMenu();


  //----------hendleDeleteItem------------
  const hendleDeleteItem = (item) => {
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
        fetch(`https://food-delivery-1-server.vercel.app/menu/${item._id}`, {
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
    <div className="p-4">
      <h2 className="text-2xl font-bold text-black ">
        Manage All{" "}
        <span className="text-[#ff2200]">Menu Items: {menu.length}</span>
      </h2>

      {/*----------Items--------Added-------Table-----------*/}
      <div div className="w-full mt-7">
        <div className="overflow-x-auto ">
          <table className="table">
            {/*-------------head-------------*/}
            <thead className="bg-[#fa4604] text-white text-xl w-full">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Items Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/*--------Row------1-----By-----Tablle------body-----*/}
              {menu.map((item, index) => (
                <tr key={index}>
                  <td className="text-black text-xl">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="rounded-full border-2 border-sky-700 h-1w-16 w-16">
                          <img src={item.image} className="object-cover" />
                        </div>
                      </div>
                    </div>
                    
                  </td>
                  <td className="text-[18px] text-black">{item.name}</td>
                  <td className="text-[18px] text-black">{item.category}</td>
                  <td className="text-[18px] text-black">$: {item.price}</td>
                  <th>
                    <Link to={`/updateMenu/${item._id}`}>
                      <button className="btn bg-sky-800 border-0">
                        <FaEdit className="text-2xl text-white" />
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => hendleDeleteItem(item)}
                      className="btn bg-[#fa4604] border-0"
                    >
                      <MdDeleteForever className="text-2xl text-white" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
