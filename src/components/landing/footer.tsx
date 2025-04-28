import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 bg-[#0F162E] py-8 pt-16">
      <div className="flex w-full flex-col items-center justify-between gap-4 px-4 lg:flex-row lg:px-20">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Get started today</h1>
          <p className="text-gray-400">
            Free list analysis and free test credits
          </p>
        </div>
        <div className="flex flex-row gap-4 space-y-4 lg:flex-col">
          <button className="flex gap-4 rounded-full bg-white px-6 py-3 text-primary">
            Try It Free
            <ArrowRight />
          </button>
          <p className="text-gray-400">Includes 100 free credits</p>
        </div>
      </div>
      <div className="h-[0.5px] w-full bg-gray-500"></div>
      <div className="flex w-full items-center justify-between px-20">
        <h1 className="hidden text-2xl font-bold text-white lg:block">
          LOGO HERE
        </h1>
        <div className="flex gap-4">
          <p className="text-xs text-gray-300">Cookies Policy</p>
          <p className="text-xs text-gray-300">Legal Terms</p>
          <p className="text-xs text-gray-300">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
