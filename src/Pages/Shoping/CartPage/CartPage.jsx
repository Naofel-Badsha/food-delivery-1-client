import React, { useContext, useState } from "react";
import CartBanner from "../../../Components/CartBanner/CartBanner";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CartPage = () => {
  useEffect(() => {
    AOS.init({duration: "2000"}) 
  },[])

  const [cart, refetch] = useCart();
  // console.log(cart)
  const { user } = useContext(AuthContext);

  //------Calculete-----Quantity-----Price------
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  //------Calculete------Total--------Price------
  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);
  const orderTotal = cartSubTotal;

  //---------Increass----&------Decreass------State----
  const [cartItems, setCartItems] = useState([]);

  //--------handleIncreass-----Function------
  const handleIncreass = (item) => {
    // console.log(item._id)
    fetch(`http://localhost:5000/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        refetch();
        setCartItems(updatedCart);
        console.log(data);
      });
    refetch();
  };

  //--------handleDecreass-----Function------
  const handleDecreass = (item) => {
    //  console.log(item._id)
    if (item.quantity > 1) {
      fetch(`http://localhost:5000/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          });
          refetch();
          setCartItems(updatedCart);
          console.log(data);
        });
      refetch();
    } else {
      Swal.fire({
        title: "Surry....?",
        text: "Item Can't be Zero?",
        icon: "warning",
      });
    }
  };

  //---------Deleted------Cart--------Item-------
  const handleItemDelete = (item) => {
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
        fetch(`http://localhost:5000/carts/${item._id}`, {
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
    <div className="container m-auto">
      {/*----------CartBanner----------*/}
      <CartBanner></CartBanner>

      {/*----------Items--------Added-------Table-----------*/}
      <div div className="w-full" data-aos="fade-right">
        <div className="overflow-x-auto ">
          <table className="table">
            {/*-------------head-------------*/}
            <thead className="bg-[#fa4604] text-white text-xl w-full">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Items Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/*--------Row------1-----By-----Tablle------body-----*/}
              {cart.map((item, index) => (
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
                  <td className="text-[15px] text-black">{item.name}</td>

                  <td className="text-[15px] text-black">
                    <button
                      className="btn btn-ghost btn-sm text-xl"
                      onClick={() => handleDecreass(item)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={() => console.log(item.quantity)}
                      className="bg-white w-10 mx-2 text-center text-xl overflow-hidden appearance-none"
                    />
                    <button
                      className="btn btn-ghost btn-sm text-xl"
                      onClick={() => handleIncreass(item)}
                    >
                      +
                    </button>
                  </td>
                  <td className="text-[15px] text-black">
                    $: {calculatePrice(item).toFixed(2)}
                  </td>
                  <th>
                    <button
                      onClick={() => handleItemDelete(item)}
                      className="btn bg-[#fa4604] border-0"
                    >
                      <i className="fa-solid fa-trash text-2xl text-white "></i>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/*----------Customer--------Details------*/}
      <div className="flex items-start flex-col lg:flex-row gap-10 py-10 px-6">
        {/*-----------Div------1-------*/}
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-bold text-black text-2xl">Customer Details</h3>
          <p className="text-2xl text-black ">
            Name:{" "}
            <small className="text-lg text-slate-600">{user.displayName}</small>
          </p>
          <p className="text-2xl text-black ">
            Email:{" "}
            <small className="text-lg text-slate-600">{user.email}</small>
          </p>
          <p className="text-2xl text-black ">
            User_id:{" "}
            <small className="text-lg text-slate-600">{user.uid}</small>
          </p>
          <p className="text-2xl text-black ">
            Created At:{" "}
            <small className="text-lg text-slate-600">
              {user.metadata?.creationTime}
            </small>
          </p>
          <p className="text-2xl text-black ">
            Last Sign In Time:{" "}
            <small className="text-lg text-slate-600">
              {user.metadata?.lastSignInTime}
            </small>
          </p>
        </div>

        {/*-----------Div------1-------*/}
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-bold text-black text-2xl">Shoping Details</h3>
          <p className="text-2xl text-black ">
            Total Items: <small>{cart.length}</small>
          </p>
          <p className="text-2xl text-black py-3">
            Total Price: $<small>{orderTotal.toFixed(2)}</small>
          </p>
          <Link to="/processCheckout">
            <button className="btn border-0 bg-[#fa4604] text-xl text-white">
              Procceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
