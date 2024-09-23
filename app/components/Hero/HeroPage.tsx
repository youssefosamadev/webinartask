import React from "react";
import Image1 from "../../../public/imgs/HeroImg.png";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div>
      <h2 className="text-center text-3xl m-7 font-bold text-[#181613] max-md:text-lg">
        All-in-One Solution for <br></br> Effortless Webinar Hosting
      </h2>
      <p className=" text-center text-[#181613] m-2">
        Create immersive live Webinar experiences with everything you need. Join
        industry experts for a <br></br> transformative learning experience and
        gain the audience you need.
      </p>
      <div className="flex justify-center content-center m-10 ">
        <button className=" bg-[#F8B517] rounded-md mr-5 pt-[14px] pr-[44px] pb-[14px] pl-[44px] max-md:pt-[8px] max-md:pr-[8px] max-md:pb-[8px] max-md:pl-[8px] ">
          Plans & Pricing
        </button>
        <button className="rounded-md border-solid border-[#181613] border-2 pt-[14px] pr-[44px] pb-[14px] pl-[44px] max-md:pt-[8px] max-md:pr-[8px] max-md:pb-[8px] max-md:pl-[8px]">
          Contact Us
        </button>
      </div>
      <div className="flex justify-center content-center">
        <Image src={Image1} />
      </div>
    </div>
  );
};

export default HeroPage;
