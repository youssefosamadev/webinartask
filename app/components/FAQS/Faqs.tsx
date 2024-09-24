"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion w-4/5 mx-auto my-10">
      <div className="accordion-item border-b border-gray-300">
        <h2 className="accordion-header">
          <button
            onClick={() => toggleAccordion(1)}
            className="flex justify-between items-center w-full text-left px-4 py-3 text-lg font-medium focus:outline-none"
          >
            How many participants can I host in a webinar?
            {activeIndex === 1 ? (
              <ChevronUpIcon className="h-5 w-5" style={{ color: "#F8B517" }} />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5"
                style={{ color: "#F8B517" }}
              />
            )}
          </button>
        </h2>
        <div
          className={`accordion-collapse overflow-hidden transition-all duration-300 ${
            activeIndex === 1 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="accordion-body px-4 py-3 text-gray-700">
            <strong>V.connct supports up to 5000 participants, offering scalability for events of any size.</strong>
          </div>
        </div>
      </div>

      {/* Accordion Item #2 */}
      <div className="accordion-item border-b border-gray-300">
        <h2 className="accordion-header">
          <button
            onClick={() => toggleAccordion(2)}
            className="flex justify-between items-center w-full text-left px-4 py-3 text-lg font-medium focus:outline-none"
          >
            Can I live stream my webinars?
            {activeIndex === 2 ? (
              <ChevronUpIcon className="h-5 w-5" style={{ color: "#F8B517" }} />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5"
                style={{ color: "#F8B517" }}
              />
            )}
          </button>
        </h2>
        <div
          className={`accordion-collapse overflow-hidden transition-all duration-300 ${
            activeIndex === 2 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="accordion-body px-4 py-3 text-gray-700">
            <strong>Absolutely! Enjoy the benefits of reaching a wider audience in real-time.</strong>
          </div>
        </div>
      </div>

      <div className="accordion-item border-b border-gray-300">
        <h2 className="accordion-header">
          <button
            onClick={() => toggleAccordion(4)}
            className="flex justify-between items-center w-full text-left px-4 py-3 text-lg font-medium focus:outline-none"
          >
            Are email notifications automated?
            {activeIndex === 4 ? (
              <ChevronUpIcon className="h-5 w-5" style={{ color: "#F8B517" }} />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5"
                style={{ color: "#F8B517" }}
              />
            )}
          </button>
        </h2>
        <div
          className={`accordion-collapse overflow-hidden transition-all duration-300 ${
            activeIndex === 4 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="accordion-body px-4 py-3 text-gray-700">
            <strong>Yes, V.connct sends automated emails for registration, start, and end times.</strong>
          </div>
        </div>
      </div>

      {/* Accordion Item #3 */}
      <div className="accordion-item border-b border-gray-300">
        <h2 className="accordion-header">
          <button
            onClick={() => toggleAccordion(3)}
            className="flex justify-between items-center w-full text-left px-4 py-3 text-lg font-medium focus:outline-none"
          >
            How long can a webinar last?
            {activeIndex === 3 ? (
              <ChevronUpIcon className="h-5 w-5" style={{ color: "#F8B517" }} />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5"
                style={{ color: "#F8B517" }}
              />
            )}
          </button>
        </h2>
        <div
          className={`accordion-collapse overflow-hidden transition-all duration-300 ${
            activeIndex === 3 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="accordion-body px-4 py-3 text-gray-700">
            <strong>Webinars can extend up to 30 hours, providing flexibility for various event durations.</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
