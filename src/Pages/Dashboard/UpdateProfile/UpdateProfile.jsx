import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  const {updateUserProfile} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname  || "/";

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    //------USer-----Update----Profile-----
     updateUserProfile(name, photoURL)
     .then(() => {
      navigate(from, {replace: true})
     })
    .catch((error) => {
    });
    console.log(name, photoURL);
  };
  return (
    <div className="container m-auto">
      <div className="max-w-md bg-white rounded-2xl shadow-2xl shadow-black mx-auto  my-28">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
          <h3 className="text-2xl text-center text-black">
            Update Your Profile
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered bg-slate-100"
              {...register("name")}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-black">
                Uplode Photo
              </span>
            </label>
            {/* <input
              type="file"
              className="file-input file-input-bordered w-full bg-slate-100 cursor-pointer "
              {...register("photoURL")}
           /> */}
            <input
              type="text"
              placeholder="Chose Your Photo"
              className="input input-bordered bg-slate-100"
              {...register("photoURL")}
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn border-0 bg-[#fa4604] text-xl text-white">
              Update{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
