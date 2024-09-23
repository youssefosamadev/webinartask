import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Help = () => {
  return (
    <section className=" text-left bg-[#FFF4E5] justify-center flex p-14 max-sm:p-2">
      <div className="  rounded-md border-solid border-[#181613] border-2 bg-[#ffffff] max-w-7xl">
        <h2 className=" text-3xl p-7 font-bold text-[#181613] max-md:text-lg">
          Need Help! Webinar Documentation
        </h2>
        <p className=" text-left pl-7 text-[#181613] px-52 max-sm:px-11 max-sm:pl-7">
          Need production help ? Webinar Documentation has you covered. We can
          help ensure you next webinar goes off <br /> without a hitch.
        </p>
        <div className="">
          <h4 className=" p-7 flex items-center gap-2 " >
            Help Center <FaArrowRight />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Help;
