import { useState } from "react";
import MenuBanner from "../../../Components/MenuBanner/MenuBanner";
import { useEffect } from "react";
import SpecialDishesCard from "../../Home/SpecialDishes/SpecialDishesCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  //-------LodedDate--------
  useEffect(() => {
    //fetch data form the backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/menu");
        const data = await response.json();
        // console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data...?", error);
      }
    };
    //-----Called----The---Function
    fetchData();
  }, []);

  //------Filtaring-----Data----items-------
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  //------Show----All----Data----Function-------
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  //------Sorting based on A-Z, Z-A, Low-High, High-Low----
  const handleSortChang = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];
    //----Logic----&----Conditions------
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        //----Logic----&----Conditions----block-----
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  useEffect(() => {
    AOS.init({duration: "2000"}) 
  },[])

  //-------Pagination-----Logic--------
  const indexOflastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOflastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOflastItem);
  const paginate = (pageNumner) => setCurrentPage(pageNumner)

  return (
    <div className="bg-gradient-to-r from-[#fafafa] form-0% to-[#fcfcfc] to-100%">
      <div className="container m-auto px-6">
        {/*------------MenuBanner------------*/}
        <MenuBanner></MenuBanner>

        {/*----------Menu------Shop-------Section-------*/}
        <div className="">
          {/*------Filtering----&-----Sorting-----*/}
          <div className="flex items-center justify-between flex-wrap py-10">

            {/*------All---Categoty----Btns---Filtering----*/}
            <div className="flex justify-start md:items-center md:gap-6 gap-4 flex-wrap text-xl">
              {/*----------Button--------1-------*/}
              <button
                onClick={showAll}
                className={
                  selectedCategory === "all" ? "text-[#fa4604] underline" : ""
                }
              >
                All
              </button>
              {/*----------Button--------2-------*/}
              <button
                onClick={() => filterItems("salad")}
                className={
                  selectedCategory === "salad" ? "text-[#fa4604] underline" : ""
                }
              >
                Salad
              </button>
              {/*----------Button--------3-------*/}
              <button
                onClick={() => filterItems("pizza")}
                className={
                  selectedCategory === "pizza" ? "text-[#fa4604] underline" : ""
                }
              >
                Pizza
              </button>
              {/*----------Button--------4-------*/}
              <button
                onClick={() => filterItems("soup")}
                className={
                  selectedCategory === "soup" ? "text-[#fa4604] underline" : ""
                }
              >
                Soups
              </button>
              {/*----------Button--------5-------*/}
              <button
                onClick={() => filterItems("dessert")}
                className={
                  selectedCategory === "dessert"
                    ? "text-[#fa4604] underline"
                    : ""
                }
              >
                Desserts
              </button>
              {/*----------Button--------6-------*/}
              <button
                onClick={() => filterItems("drinks")}
                className={
                  selectedCategory === "drinks"
                    ? "text-[#fa4604] underline"
                    : ""
                }
              >
                Drinks
              </button>
              {/*----------Button--------&-------*/}
              <button
                onClick={() => filterItems("offered")}
                className={
                  selectedCategory === "offered"
                    ? "text-[#fa4604] underline"
                    : ""
                }
              >
                Offered
              </button>
            </div>

            {/*---------Filtering Base Sorting--------*/}
            <div className="flex items-center justify-end  rounded-sm">
              <div className="bg-black">
                <i className="fa-solid fa-filter w-6 h-6 mt-1  text-center text-white"></i>
              </div>
              {/*-------Sorting-------Optioon------*/}
              <select
                name="sort"
                id="sort"
                onChange={(e) => handleSortChang(e.target.value)}
                value={sortOption}
                className="bg-black text-white h-7 px-2 py01 rounded-sm"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low-to-High</option>
                <option value="high-to-low">High-to-Low</option>
              </select>
            </div>
          </div>

          {/*-----Product----Cart------*/}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-right">
            {/**
             *----------Before----filteredItems-------
             *----------After----currentItems-------
            */}
            {currentItems.map((item) => (
              <SpecialDishesCard key={item._id} item={item}></SpecialDishesCard>
            ))}
          </div>
        </div>


        {/*------------Pagination------------*/}
        <div className="flex items-center justify-center py-10">
          {
            Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_, index) =>(
              <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? "  bg-[#fa4604] text-white" : "bg-slate-400 text-black"}`}>
                {index + 1}
              </button>
            ))  
          }
        </div>

      </div>
    </div>
  );
};

export default Menu;
