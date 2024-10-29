import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SpecialDishesCard = ({ item }) => {
  const { _id, name, image, price } = item;
  const [isHeartFillted, setIsHeartFillted] = useState(false);
  const { user } = useContext(AuthContext);
  //console.log(user)

  //------Navigate------And----Location-----
  const navigate = useNavigate();
  const loacation = useLocation();

  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted);
  };

  //-------Handle------Addto-------Cart--------
  const handleAddToCart = (item) => {
    //console.log("Add to Cart added....?", item);
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      // console.log(cartItem)
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Added Cart Success",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: "Please Login..?",
              text: "Without an account can't able to add products!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Singup Now!",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/singUp", { state: { from: location } });
              }
            });
          }
        });
    }
  };

  return (
    <div>
      <div className="card card-compact bg-white shadow-xl relative border-2 hover:-translate-y-2 duration-200">
        <div className="flex items-center justify-between">
          {/*------------Heart-----------*/}
          <div
            onClick={handleHeartClick}
            className={`gap-1 absolute right-2 top-2 p-4 ${
              isHeartFillted ? "text-black" : "text-[#fa4604]"
            }`}
          >
            <i className="fa-solid fa-heart text-3xl cursor-pointer"></i>
          </div>
          {/*------------Eye-----------*/}
          {/* to={`/menu/${item._id}`} */}
          <Link>
            <div className="gap-1 top-2 p-4">
              <i className="fa-solid fa-eye text-3xl text-sky-700 cursor-pointer"></i>
            </div>
          </Link>
        </div>

        <figure className="w-full h-[300px] m-auto">
          <img src={item.image} className="object-cover w-full h-[300px]" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p className="text-xl"> whose shoes does he choose?</p>
          <div className="card-actions justify-between items-center">
            <h5 className="font-semibold text-xl text-black">
              <span className="text-xl text-sky-700">$: </span>
              {item.price}
            </h5>
            <button
              onClick={() => handleAddToCart(item)}
              className="btn border-0 text-xl bg-[#fa4604]"
            >
              <i className="fa-solid fa-cart-plus text-3xl text-[#fff]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDishesCard;
