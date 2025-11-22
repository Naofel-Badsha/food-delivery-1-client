import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Categories = () => {
    useEffect(() => {
      AOS.init({duration: "2000"}) 
    },[])

  const categoryriesItems = [
    {
      id: 2,
      title: "Burger",
      des: "(86 dishes)",
      image: "https://i.ibb.co/WkrKm5w/img1.png",
    },
    {
      id: 2,
      title: "Break Fast",
      des: "(12 break fast)",
      image: "https://i.ibb.co/6BpVFB4/img2.png",
    },
    {
      id: 3,
      title: "Dessert",
      des: "(48 dessert)",
      image: "https://i.ibb.co/hMfYfTp/img3.png",
    },
    {
      id: 4,
      title: "Browes All",
      des: "(255 items)",
      image: "https://i.ibb.co/hfHp1Hf/img4.png",
    },
  ];

  return (
    <section className="container m-auto py-16">
      <div className="text-center">
        <h5 className="subTitle">Customer Favorites</h5>
        <h1 className="title">Popular Category</h1>
      </div>

      {/*-----------container-----*/}
      <div
        className="flex flex-col md:flex-row  flex-wrap gap-8 justify-around items-center mt-12"
        data-aos="fade-right"
      >
        {categoryriesItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6  w-72 mx-auto text-center cursor-pointer border-2 border-[#fa4604] hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex items-center justify-center mx-auto">
              <img
                src={item.image}
                className="bg-sky-200 p-5 rounded-full w-28 h-28 "
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
