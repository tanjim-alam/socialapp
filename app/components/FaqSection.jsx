"use client";
import React, { useState } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

function FaqSection() {
  const faqData = [
    {
      id: 1,
      heading: "Select Service",
      description: "Select the service you need from the available options.",
    },
    {
      id: 2,
      heading: "Choose Packages",
      description: "Select the service you need from the available options.",
    },
    {
      id: 3,
      heading: "Complete Payment",
      description: "Select the service you need from the available options.",
    },
    {
      id: 4,
      heading: "Select Service",
      description: "Select the service you need from the available options.",
    },
    {
      id: 5,
      heading: "Choose Packages",
      description: "Select the service you need from the available options.",
    },
    {
      id: 6,
      heading: "Complete Payment",
      description: "Select the service you need from the available options.",
    },
  ];

  const [currId, setCurrId] = useState(null);

  function handleFaq(id) {
    setCurrId(currId === id ? null : id); // Toggle FAQ open/close based on id
  }

  return (
    <div className="w-[90%] xl:w-[80%] m-auto flex justify-center">
      <div className="my-10 w-full">
        <h3 className="text-center text-4xl text-[#0d1821] font-bold mb-10">
          Frequently Asked Questions
        </h3>
        <div className="m-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqData.map((data) => (
            <div
              key={data.id}
              className="w-full shadow-md rounded-lg overflow-hidden flex flex-col"
            >
              <h4
                onClick={() => handleFaq(data.id)}
                className="p-3 rounded shadow flex justify-between cursor-pointer gap-2 items-center text-lg text-white font-semibold bg-[var(--primary)]"
              >
                {data.heading}
                <FaArrowAltCircleDown
                  className={`transition-transform duration-300 ${
                    currId === data.id ? "rotate-180" : ""
                  }`}
                />
              </h4>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  currId === data.id ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="p-4 leading-relaxed text-slate-800 text-[17px]">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
