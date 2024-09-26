import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// const menuItem = {
//   name: data.name,
//   price: parseFloat(data.price),
//   category: data.category,
//   recipe: data.recipe,
//   image: hostingImage.data.data.display_url
//  };

const AddMenu = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const menuItem = {
      name: data.name,
      price: parseFloat(data.price),
      category: data.category,
      recipe: data.recipe,
      image: data.image,
    };
    fetch("http://localhost:5000/menu", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(menuItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Menu Add Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-black ">
        Add New <span className="text-[#ff2200]">Menu Items</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="py-10 mt-16 bg-rose-50 ">
          <div className="p-10">
            {/*------------Input--------1-------*/}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {/*---------------Form-----------1--------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black">
                    Recipe Name *
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Recipe Name"
                  className="input input-bordered w-full bg-white text-black"
                />
              </div>
              {/*---------------Form-----------2--------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black">Price *</span>
                </label>
                <input
                  type="text"
                  {...register("price")}
                  placeholder="Food Price....."
                  className="input input-bordered w-full bg-white text-black"
                />
              </div>
            </div>
            {/*---------------Form-----------3--------*/}
            <div className="form-control">
              <label className="form-control w-ful">
                <span className="label-text text-xl text-black">
                  Food Category *
                </span>
                <select
                  {...register("category")}
                  className="select select-bordered bg-white"
                  defaultValue="default"
                >
                  <option disabled value="default">
                    Select A Category.....
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                  <option value="offered">Offered</option>
                  <option value="popular">Popular</option>
                </select>
              </label>
            </div>

            {/*------------Input--------4-------*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl text-black">Recipe*</span>
              </label>
              <textarea
                type="text"
                {...register("recipe")}
                placeholder="Tell the worlds about your Recipe....."
                className="input input-bordered p-4 w-full bg-white text-black h-[150px]"
              ></textarea>
            </div>
            {/*------------Input--------3-------*/}
            <div className="form-control py-5">
              <label className="label">
                <span className="label-text text-xl text-black">
                  Photo Url*
                </span>
              </label>
              <input
                type="url"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full bg-white"
              />
            </div>

            <div className="">
              <button className="btn bg-[#ff2200] text-white border-0 w-full text-xl mt-3">
                Add Menu
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
