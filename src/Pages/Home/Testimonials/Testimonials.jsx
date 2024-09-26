import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({duration: "2000"}) 
  },[])
  return (
    <div className="container m-auto py-16 px-6">
      <div className="flex  flex-col md:flex-row items-center justify-center gap-12  ">
        {/*--------------1--------------*/}
        <div className="md:w-1/2 bg-gradient-to-r from-[#d06161] form-0% to-[#fcfcfc] to-100%" data-aos="fade-right">
          <div className="w-full m-auto">
            <img
              src="https://i.ibb.co/DbkctB3/food-test-1.png"
              className=" m-auto"
            />
          </div>
        </div>
        {/*--------------2--------------*/}
        <div className="md:w-1/2" data-aos="fade-left">
          <div className="text-left">
            <h5 className="subTitle">Testimonials</h5>
            <h1 className="title md:w-[380px] lg:md:w-[520px]">
              What Our Customers Say About Us
            </h1>
            <blockquote className="text-xl text-slate-500 py-4">
              "I had the pleausre of dinige at Food last night, and I'm still
              ravinng about the experience! the attention to delail in
              presntation and services was impeccable"
            </blockquote>
            {/*-----------------------*/}
            <div className="flex items-center flex-wrap gap-4">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar border-0">
                  <div className="w-12">
                    <img src="https://i.ibb.co/LShJ9XG/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar border-0">
                  <div className="w-12">
                    <img src="https://i.ibb.co/82k87K7/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar border-0">
                  <div className="w-12">
                    <img src="https://i.ibb.co/CzqcZLZ/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder border-0 bg-[#fa4604]">
                  <div className="text-white w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-xl font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                <i className="fa-solid fa-star text-xl text-[#fa4604]"></i>
                <span className="font-medium">4.9</span> <span className="text-xl text-slate-500">(20.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
