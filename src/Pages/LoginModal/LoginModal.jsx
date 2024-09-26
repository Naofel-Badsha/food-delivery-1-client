import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
const LoginModal = () => {
  //--------UseContext---------
  const {singInUser, singInWithGoogle } = useContext(AuthContext);
  const [erroeMessage, setErroeMessage] = useState("")

  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname  || "/";

    //-----Form---Submit----react-hook-form------
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      const email = data.email;
      const password = data.password;
      console.log(email, password)

      singInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login SuccesFull.....?");
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
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle ">
      <div className="modal-box bg-white">
        <div className="modal-action flex items-center justify-center mt-0">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-xl font-bold text-black">Please Login!</h3>
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
              erroeMessage ? <p className="text-red-600 italic">{erroeMessage}</p> : ""
            }

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn border-0 bg-[#fa4604] text-lg text-white"
              />
            </div>
            <p className="mt-2">
              Donot have an account Please?{" "}
              <Link to="/singUp" className="text-lg underline text-[#fa4604]">
                SingUp
              </Link>
            </p>

            {/*-------Social-------login------*/}
            <div className="flex items-center justify-center gap-6 mt-4">
              <button
                onClick={handleSingInGoogle}
                className="btn btn-circle hover:bg-[#fa4604] border-0"
              >
                <i class="fa-brands fa-google text-xl text-white"></i>
              </button>
              <button className="btn btn-circle hover:bg-[#fa4604] border-0">
                <i class="fa-brands fa-facebook text-xl text-white"></i>
              </button>
              <button className="btn btn-circle hover:bg-[#fa4604] border-0">
                <i class="fa-brands fa-github text-xl text-white"></i>
              </button>
            </div>
            {/*-------Modal----Close---Button------*/}
            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-md btn-circle btn-ghost absolute right-3 top-4 text-2xl"
            >
              ✕
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;
