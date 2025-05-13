import { useState } from "react";

import { BadgeCheck } from "lucide-react";

import Line from "../../assets/img/pricing.svg";

// update path if needed

const pricingData = [
  {
    id: 1,
    price: "$18",
    credits: "2,000",
    costPerCredit: "$0.009",
  },
  {
    id: 2,
    price: "$38",
    credits: "5,000",
    costPerCredit: "$0.0076",
  },
  {
    id: 3,
    price: "$75",
    credits: "10,000",
    costPerCredit: "$0.0075",
  },
  {
    id: 4,
    price: "$175",
    credits: "25,000",
    costPerCredit: "$0.007",
  },
];

const Pricing = () => {
  const [pricing, setPricing] = useState(pricingData[0]);

  const isActive = (id: number) => pricing.id === id;

  return (
    <div
      id="pricing"
      className="flex flex-col items-center justify-center gap-4 px-4 py-4 lg:px-20"
    >
      <h1 className="text-4xl font-bold">Flexible Pricing Options</h1>
      <p className="text-gray-500">
        Choose the option that best fits your business needs.
      </p>
      <p className="text-primary">Pay-As-You-Go</p>
      <div className="mt-5 grid w-full lg:grid-cols-2">
        {/* Left Pricing Options */}
        <div className="mx-5 space-y-2 rounded-[40px] bg-white p-10 lg:mx-0 lg:mt-10 lg:rounded-none lg:rounded-l-[40px]">
          <h1 className="text-center text-3xl font-bold">
            How many emails do you have?
          </h1>
          <p className="w-full rounded-full bg-gray-100 py-2 text-center">
            {pricing.credits}
          </p>
          <p className="w-full py-2 text-center">or, select an amount</p>

          {pricingData.map((item) => (
            <button
              key={item.id}
              onClick={() => setPricing(item)}
              className={`w-full rounded-full py-2 text-center font-bold transition-all duration-200 ${
                isActive(item.id)
                  ? "border border-primary bg-gray-100 text-primary"
                  : "bg-gray-100 text-black"
              }`}
            >
              {item.credits}
              <span className="text-xs font-light">credits for</span>{" "}
              {item.price}
            </button>
          ))}
          
        </div>

        {/* Right Pricing Summary */}
        <div className="flex flex-col items-center justify-between gap-2 rounded-[40px] bg-primary p-10 lg:rounded-none lg:rounded-r-[40px] lg:rounded-t-[40px]">
          <h1 className="text-2xl font-bold text-white">{pricing.price}</h1>
          <div className="ml-6 flex w-full items-center justify-center gap-10">
            <div>
              <h1 className="text-2xl text-white">{pricing.credits}</h1>
              <p className="text-gray-300">credits</p>
            </div>
            <img src={Line} alt="" />
            <div>
              <h1 className="text-2xl text-white">{pricing.costPerCredit}</h1>
              <p className="text-gray-300">Cost Per Credit</p>
            </div>
          </div>

          {/* Image display if available */}
       

          <button className="w-full rounded-full bg-[#0F162E] py-4 text-sm text-white hover:bg-white hover:text-[#0F162E]">
            Get Started Free
          </button>
          <p className="text-sm text-gray-300">Includes 250 free credits</p>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-4">
              <BadgeCheck className="fill-white text-primary" />
              <p className="text-sm text-gray-200">No monthly payments.</p>
            </div>
            <div className="flex gap-4">
              <BadgeCheck className="fill-white text-primary" />
              <p className="text-sm text-gray-200">Buy only what you need.</p>
            </div>
            <div className="flex gap-4">
              <BadgeCheck className="fill-white text-primary" />
              <p className="text-sm text-gray-200">Credits never expire.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
