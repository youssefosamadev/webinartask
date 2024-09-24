import React from "react";
import Image1 from "../../../public/imgs/HeroImg.png";
import Imagemobail from "../../../public/imgs/hero section one web.svg";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl m-7  text-[#181613] max-md:text-xl">
        All-in-One Solution for <br></br> Effortless Webinar Hosting
      </h2>
      <p className=" text-center text-[#181613] m-2 text-lg sm:text-xl lg:text-2xl">
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
      <div className="flex justify-center items-center">
        <Image src={Image1} className="hidden sm:block    " />
      </div>
      <div className="flex justify-center items-center">
        <Image src={Imagemobail} className="block sm:hidden w-full max-w-xs" />
      </div>
    </div>
  );
};

export default HeroPage;
