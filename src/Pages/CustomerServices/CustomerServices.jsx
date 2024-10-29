const CustomerServices = () => {
  return (
    <div className="container m-auto">
      {/*------------Text-------1--------*/}
      <div className="text-center py-28">
        <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight">
          Customer <span className="text-[#fa4604]">Services🚴</span>
        </h2>
      </div>

      <div className="px-6 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2 ">
        {/*--------Services--------1------------*/}
        <div
          className="border-2 hover:border-[#fa4604] duration-150 p-3"
          data-aos="fade-right"
        >
          <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">
            Online Order
          </h2>
          <p>
            Our food delivery service makes ordering your favorite meals
            effortless and convenient. Browse our extensive menu featuring a
            variety of cuisines, and place your order online in minutes. Enjoy
            fast delivery straight to your door within 30-45 minutes, complete
            with real-time tracking to keep you updated on your order's status.
          </p>
        </div>
        {/*--------Services--------2------------*/}
        <div
          className="border-2 hover:border-[#fa4604] duration-150 p-3"
          data-aos="fade-left"
        >
          <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">
            Table Booking
          </h2>
          <p>
            Our table booking service allows you to secure a spot at your
            favorite restaurant effortlessly. Choose your preferred date and
            time, and select the number of guests for a seamless dining
            experience. Enjoy peace of mind with instant confirmation and modify
            your reservation easily, ensuring a delightful meal every time.
          </p>
        </div>
        {/*--------Services--------3------------*/}
        <div
          className="border-2 hover:border-[#fa4604] duration-150 p-3"
          data-aos="fade-right"
        >
          <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">
            Order Tracking
          </h2>
          <p>
            Our order tracking feature lets you monitor your food delivery in
            real-time. Receive instant updates on your order status, from
            preparation to dispatch. With GPS tracking, you can see your
            delivery driver’s location, ensuring you know exactly when your meal
            will arrive. Enjoy transparency and peace of mind with every order!
          </p>
        </div>
        {/*--------Services--------4------------*/}
        <div
          className="border-2 hover:border-[#fa4604] duration-150 p-3"
          data-aos="fade-left"
        >
          <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">
            Menu Categories for Delivery
          </h2>
          <p>
            Our food delivery service offers a diverse menu categorized for your
            convenience. Enjoy delicious appetizers like spring rolls and wings,
            hearty main courses including pizzas and burgers, and delightful
            desserts like cakes and ice cream. Quench your thirst with
            refreshing beverages, ensuring there's something for everyone to
            enjoy!
          </p>
        </div>
        {/*--------Services--------5------------*/}
        <div
          className="border-2 hover:border-[#fa4604] duration-150 p-3"
          data-aos="fade-right"
        >
          <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">
            Special Diets and Preferences
          </h2>
          <p>
            We cater to various dietary needs, offering a selection of vegan and
            vegetarian dishes, such as quinoa salads and veggie stir-fries. For
            those with gluten sensitivities, our menu features gluten-free
            options like grilled chicken salads and rice bowls. Enjoy flavorful
            meals that align with your dietary preferences without compromise!
          </p>
        </div>
        {/*--------Services--------6------------*/}
        <div
          className="border-2 hover:border-[#fa4604] duration-150 p-3"
          data-aos="fade-left"
        >
          <h2 className="text-xl md:text-2xl lg:text-2xl text-[#fa4604] font-bold py-4">
          Delivery Area Information
          </h2>
          <p>
            We cater to various dietary needs, offering a selection of vegan and
            vegetarian dishes, such as quinoa salads and veggie stir-fries. For
            those with gluten sensitivities, our menu features gluten-free
            options like grilled chicken salads and rice bowls. Enjoy flavorful
            meals that align with your dietary preferences without compromise!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServices;
