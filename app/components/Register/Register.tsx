import React from "react";
import upcoming from "../../../public/imgs/upcoming.png";
import Thanks from "../../../public/imgs/Thanks.png";
import inbox from "../../../public/imgs/inbox.png";
import Registerr from "../../../public/imgs/Register.png";
import Brand from "../../../public/imgs/Brand.png";
import RegisterNow from "../../../public/imgs/RegisterNow.png";
import Image from "next/image";

const Register = () => {
  return (
    <section className="mb-4">
      <h2 className="text-center text-3xl m-7 font-bold text-[#181613] max-md:text-lg">
        Get to Know V.Connct Webinar
      </h2>
      <p className=" text-center text-[#181613] m-2">
        Explore the seamless flow of V.connct webinars, ensuring a smooth
        experience for both hosts and participants.
      </p>

      <div className=" justify-center items-center gap-6 flex max-sm:flex-col ">
        <div className="grid grid-rows-1">
          <div className=" max-w-80 rounded-md text-center border-solid border-[#181613] border-2 p-3 max-sm:mx-6">
            <h3 className="text-2xl">Webinar Schedule</h3>
            <p className="text-sm">
              Plan your events with precision, ensuring that your audience knows
              when to tune in.
            </p>
            <Image src={upcoming} />
          </div>
          <div className=" max-w-80  rounded-md text-center border-solid border-[#181613] border-2 p-5 mt-7 max-sm:mx-6">
            <h3 className="text-2xl m-2">Brand Identity</h3>
            <Image src={Brand} />
          </div>
        </div>

        <div className=" max-w-80  rounded-md text-center border-solid border-[#181613] border-2 p-1 max-sm:mx-6">
          <Image src={Thanks} />
          <div className="my-5">
            <h3 className="text-2xl mt-2 mb-2">Register form</h3>
            <p>
              Easily collect participant information with our user-friendly
              registration forms.
            </p>
          </div>
          <Image src={RegisterNow} />
        </div>
        <div className="grid grid-rows-1">
          <div className=" max-w-80 rounded-md text-center border-solid border-[#181613] border-2 p-5 mb-7 max-sm:mx-6">
            <h3 className="text-2xl m-2">Shareable Card</h3>
            <Image src={Registerr} />
          </div>
          <div className=" max-w-80 rounded-md text-center border-solid border-[#181613] border-2 p-3 max-sm:mx-6">
            <h3 className="text-2xl">Email Notifications</h3>
            <p className="text-sm">
              Keep participants informed with emails for registration
              confirmation, webinar start & end.
            </p>
            <Image src={inbox} />
          </div>
        </div>
      </div>
      <div className="flex justify-center content-center m-10 ">
        <button className=" bg-[#1B1B1B] text-slate-100 rounded-md mr-5 pt-[14px] pr-[44px] pb-[14px] pl-[44px] max-md:pt-[8px] max-md:pr-[8px] max-md:pb-[8px] max-md:pl-[8px] ">
          Plans & Pricing
        </button>
      </div>
    </section>
  );
};

export default Register;
