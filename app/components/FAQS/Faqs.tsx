"use client";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How many participants can I host in a webinar?",
    answer:
      "V.connect supports up to 5000 participants, offering scalability for events of any size.",
  },
  {
    question: "Can I live stream my webinars?",
    answer:
      "Absolutely! Enjoy the benefits of reaching a wider audience in real-time.",
  },
  {
    question: "How long can a webinar last?",
    answer:
      "Webinars can extend up to 30 hours, providing flexibility for various event durations.",
  },
  {
    question: "Are email notifications automated?",
    answer:
      "Yes, V.connect sends automated emails for registration, start, and end times.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-5">
      <h1 className="text-3xl font-bold text-center my-8">FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <span className="text-yellow-500">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>
          <div
            className={`transition-max-height duration-500 ease-in-out ${
              openIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}
          >
            <p className="text-gray-600 mb-4">{faq.answer}</p>
          </div>
        </div>
      ))}
      
    </section>
  );
}
