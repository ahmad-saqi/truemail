import { BadgeCheck } from "lucide-react";

import Line from "../../assets/img/pricing.svg";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 lg:px-20">
      <h1 className="text-4xl font-bold">Flexible Pricing Options</h1>
      <p className="text-gray-500">
        Choose the option that best fits your business needs.
      </p>
      <p className="text-primary">Pay-As-You-Go</p>
      <div className="mt-5 grid w-full lg:grid-cols-2">
        <div className="mx-5 space-y-2 rounded-[40px] bg-white p-10 lg:mx-0 lg:mt-10 lg:rounded-none lg:rounded-l-[40px]">
          <h1 className="text-center text-3xl font-bold">
            How many emails do you have?
          </h1>
          <p className="w-full rounded-full bg-gray-100 py-2 text-center">
            5,000
          </p>
          <p className="w-full py-2 text-center">or, select an amount</p>
          <p className="w-full rounded-full bg-gray-100 py-2 text-center font-bold">
            2,000 <span className="text-xs font-light">credits for</span> $18
          </p>
          <p className="w-full rounded-full bg-gray-100 py-2 text-center font-bold">
            5,000 <span className="text-xs font-light">credits for</span> $38
          </p>
          <p className="w-full rounded-full bg-gray-100 py-2 text-center font-bold">
            10,000 <span className="text-xs font-light">credits for</span> $75
          </p>
          <p className="w-full rounded-full bg-gray-100 py-2 text-center font-bold">
            25,000 <span className="text-xs font-light">credits for</span> $175
          </p>
        </div>
        <div className="flex flex-col items-center justify-between rounded-[40px] bg-primary p-10 lg:rounded-none lg:rounded-r-[40px] lg:rounded-t-[40px]">
          <h1 className="text-2xl font-bold text-white">$38</h1>
          <div className="ml-12 flex w-full items-center justify-center gap-10">
            <div>
              <h1 className="text-2xl text-white">5,000</h1>
              <p className="text-gray-300">credits</p>
            </div>
            <img src={Line} alt="" />
            <div>
              <h1 className="text-2xl text-white">$0.0076</h1>
              <p className="text-gray-300">Cost Per Credit</p>
            </div>
          </div>
          <button className="w-full rounded-full bg-[#0F162E] py-4 text-sm text-white">
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
