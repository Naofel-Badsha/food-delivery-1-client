import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginModal from "../LoginModal/LoginModal";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const SingUp = () => {
  const {createNewUser, singInWithGoogle, updateUserProfile} = useContext(AuthContext)
  const [erroeMessage, setErroeMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname  || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    console.log(email, password)
   //------Posted--And--Creadt--user--by--Database-----
    const users = {name, email}
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
    .then((res) => res.json())
    .then(data => {
      console.log(data)
    })



    //---------Create----A---NawUser---------
    createNewUser(email, password)
    .then((result) => {
      console.log(user);
      alert("User Create SuccesFull.....?");
      document.getElementById("my_modal_5").close()
      navigate(from, {replace: true})
      form.reset()
    })
    .catch((error) => {
      const erroeMessage = error.messge;
      setErroeMessage("Provide a content email and passwors")
    });
  };


    //-----------Google-----SingIn-------
    const handleSingInGoogle = () => {
      singInWithGoogle()
        .then((result) => {
          const user = result.user;
          console.log(user);
          alert("Google Login SuccesFull.....?");
          navigate(from, {replace: true})
        })
        .catch((error) => {
          console.log(error);
        });
      }


  return (
    <div className="max-w-md bg-white rounded-2xl shadow shadow-black mx-auto  my-28">
      <div className="flex items-center justify-center mt-0">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <h3 className="text-xl font-bold text-black">Please Registation!</h3>
          {/*----------Name--------*/}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl text-black">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered bg-white text-black w-full"
              {...register("name")}
            />
          </div>
          {/*----------Email--------*/}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl text-black">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered bg-white text-black w-full"
              {...register("email")}
            />
          </div>
          {/*----------Password--------*/}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-xl text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered bg-white text-black w-full"
              {...register("password")}
            />
            <label className="label mt-1 ">
              <a href="#" className="text-sm link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
            {/*-------Error-----*/}
            {
              erroeMessage ? <p className="text-red-600 italic">{erroeMessage }</p> : ""
            }
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Registation"
              className="btn border-0 bg-[#fa4604] text-lg text-white"
            />
          </div>
          <p className="mt-2">
            Have an account Please?{" "}
            <button
              className="text-lg underline text-[#fa4604]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>
          </p>
          <Link
            to="/"
            className="btn btn-ghost btn-circle bg-[#fa4604] text-2xl text-white hover:text-black absolute right-10 top-10 "
          >
            ✕
          </Link>

          {/*-------Social-------login------*/}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button onClick={handleSingInGoogle}
             className="btn btn-circle hover:bg-[#fa4604] border-0">
              <i class="fa-brands fa-google text-xl text-white"></i>
            </button>
            <button className="btn btn-circle hover:bg-[#fa4604] border-0">
              <i class="fa-brands fa-facebook text-xl text-white"></i>
            </button>
            <button className="btn btn-circle hover:bg-[#fa4604] border-0">
              <i class="fa-brands fa-github text-xl text-white"></i>
            </button>
          </div>
        </form>
      </div>
      <LoginModal></LoginModal>
    </div>
  );
};

export default SingUp;
