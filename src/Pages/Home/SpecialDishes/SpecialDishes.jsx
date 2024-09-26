
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./Testimonial.css";

// import required modules
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import SpecialDishesCard from "./SpecialDishesCard";

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        // console.log(specials)
        setRecipes(specials);
      });
  }, []);



  return (
    <div className="container m-auto my-16 px-6">
      <div className="text-left py-8">
        <h5 className="subTitle">Customer Favorites</h5>
        <h1 className="title md:w-[380px] lg:w-[520px]">Special Dishes Form Our Menu</h1>
        <h3 className="text-xl text-sky-600 font-bold">Special Dishes Items: {recipes.length}</h3>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={true}
        grabCursor={true}
        delay={"100"}
        loop={true}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div>
          {/*-----------Slider-------1-------*/}
          {recipes.map((item, i) => (
            <SwiperSlide>
            <SpecialDishesCard
              key={i} item={item}
            ></SpecialDishesCard>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>



      {/*-------Slider----Card-------*/}
    </div>
  );
};

export default SpecialDishes;
