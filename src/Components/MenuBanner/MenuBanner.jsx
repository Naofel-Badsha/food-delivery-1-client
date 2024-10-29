import { Link } from "react-router-dom";

const MenuBanner = () => {
  return (
    <div className="py-48 px-6 flex flex-col justify-center items-center">
      {/*------------Text-------1--------*/}
      <div className="text-center">
        <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight">
          For the Love of Delicious{" "}
          <span className="text-[#fa4604]">Food🥑</span>
        </h2>
        <p className="text-xl text-[#4a4a4a] py-4 md:w-4/5 mx-auto">
          Come with family & feel the enjoy for mouthwatering food such as Greek
          Salad 🥗, Lasagne🥝, Butternut🥜, Pumpkin🍏, Tokusen🌮 Wagys🍅,
          Olivas🍇 Rellenas and more for a moderate cost
        </p>
        <div className="py-4">
          <Link to="/contactUs">
            <btton className="btn border-0 bg-[#fa4604] text-xl text-white">
              Contact Now
            </btton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
