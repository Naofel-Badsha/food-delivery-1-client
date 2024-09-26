import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({duration: "2000"}) 
  },[])
  return (
    <div className="container m-auto">
      {/*------------Text-------1--------*/}
      <div className="text-center py-28">
        <h2 className="text-4xl text-black md:text-5xl font-bold md:leading-tight leading-tight">
          Our <span className="text-[#fa4604]">Contact 📞</span>
        </h2>
      </div>

      <div className="flex gap-10 flex-col lg:flex-row">
        {/*-----------Img------------*/}
        <div className="flex-1" data-aos="fade-right">
          <img src="https://i.ibb.co/Jqm1ZbF/contact.gif" />
        </div>

        {/*-------------From---------------*/}
        <div className="flex-1" data-aos="fade-left">
          <div className=" bg-[#edeaea] w-full shadow-2xl rounded-lg">
            <form className="card-body">
              {/*----------Input--------1--------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered w-full bg-white text-black text-xl"
                />
              </div>
              {/*----------Input--------2--------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full bg-white text-black text-xl"
                />
              </div>
              {/*----------Input--------3--------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Food Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Food Name"
                  className="input input-bordered w-full bg-white text-black text-xl" 
                />
              </div>
              {/*----------Input--------4--------*/}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl text-black font-bold">Messages</span>
                </label>
                <textarea
                  type="messages"
                  placeholder="Enter Your Messages"
                  className="input input-bordered w-full h-[150px] p-4 bg-white text-black text-xl"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#fa4604] text-xl text-white border-0">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
