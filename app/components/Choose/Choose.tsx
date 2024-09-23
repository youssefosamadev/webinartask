import React from "react";
import Image from "next/image";
import Like from "../../../public/imgs/Like.svg";
import scenery from "../../../public/imgs/scenery.svg";
import users from "../../../public/imgs/users.svg";
import interfacee from "../../../public/imgs/rss interface.svg";
import cloud from "../../../public/imgs/approved cloud.svg";
import stopwatch from "../../../public/imgs/stopwatch.svg";

const data = [
  {
    id: 1,
    src: scenery,
    title: "User-Friendly Interface",
    desc: "Navigate effortlessly through our user-friendly interface.",
  },
  {
    id: 2,
    src: Like,
    title: "Comprehensive Features",
    desc: "Enjoy a wide array of features. Tailor each webinar to your unique needs.",
  },
  {
    id: 3,
    src: users,
    title: "Up to 5000 Participants",
    desc: "Host anything from intimate seminars to grand conferences.",
  },
  {
    id: 4,
    src: interfacee,
    title: "Live Stream Capabilities",
    desc: "Connect with participants globally in real-time with our live streaming option.",
  },
  {
    id: 5,
    src: stopwatch,
    title: "30-Hour Webinar Duration",
    desc: "Enjoy webinar durations for those in-depth discussions and comprehensive sessions.",
  },
  {
    id: 6,
    src: cloud,
    title: "Cloud Recording Storage",
    desc: "Benefit from our cloud recording to ensuring you never miss a crucial detail.",
  },
];
const Choose = () => {
  return (
    <section className="bg-zinc-950	text-slate-100 py-11 ">
      <div className="container m-auto">
        <h2 className="text-center text-4xl m-7 font-bold max-md:text-lg text-slate-100">
          Why Choose V.connct Webinar?
        </h2>
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1  max-sm:mx-6  ">
          {data.map((item, id) => (
            <div className="  rounded-md text-center border-solid border-white border-2 p-5">
              <Image className="mb-2" src={item.src} />
              <h3 className="text-xl text-left">{item.title}</h3>
              <p className="text-sm text-left mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center content-center mt-10  ">
          <button className="text-black	 bg-[#F8B517] rounded-md mr-5 pt-[14px] pr-[44px] pb-[14px] pl-[44px] max-md:pt-[8px] max-md:pr-[8px] max-md:pb-[8px] max-md:pl-[8px] ">
            Plans & Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Choose;
