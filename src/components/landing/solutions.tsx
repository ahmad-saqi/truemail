import { useState } from "react";

import { ArrowRight, BadgeCheck, MailPlus, MailSearch, Repeat } from "lucide-react";

import SolutionImg from "../../assets/img/solutionimg.svg";

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState<
    "bulk" | "realTime" | "auto" 
  >("bulk");

  const renderContent = () => {
    switch (activeSolution) {
      case "bulk":
        return (
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-4 justify-start items-start">
              <h1 className="text-5xl text-start leading-[1.3]">Clean Your Email List in 3 Easy Steps</h1>
              <p className="text-left text-gray-500">
                Ensure your emails reach the inbox every time with our powerful
                verification and cleaning process. Upload any sized list or
                connect to over 85 integrations for seamless cleaning.
              </p>
              <div className="flex gap-4">
                <BadgeCheck className="fill-black text-white" />
                <p className="text-gray-500">Upload your existing list.</p>
              </div>
              <div className="flex gap-4">
                <BadgeCheck className="fill-black text-white" />
                <p className="text-gray-500">Download your freshly cleaned list.</p>
              </div>
              <div className="flex gap-4">
                <BadgeCheck className="fill-black text-white" />
                <p className="text-gray-500">Deliver up to 99.9% of your emails with confidence.</p>
              </div>
              <button className="flex gap-2 px-8 py-4 mt-6 bg-primary text-white rounded-full">Try it Free <ArrowRight/></button>
            </div>
            <div className="flex justify-end ">
              <img src={SolutionImg} alt="" />
            </div>
          </div>
        );
      case "realTime":
        return <p>Real-Time Email Verification Content</p>;
      case "auto":
        return <p>Automated List Cleaning Content</p>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 px-20 py-20">
      <div className="mb-8 flex w-full justify-center">
        <h1 className="text-4xl font-extrabold">Three Solutions, One Goal.</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 border-b-2 text-center md:grid-cols-3">
        <div
          className={`mx-20 flex cursor-pointer items-center justify-center gap-2 pb-2 ${
            activeSolution === "bulk" ? "border-b-[3px] border-black" : ""
          }`}
          onClick={() => setActiveSolution("bulk")}
        >
          <MailPlus size={32} />
          <p>Bulk Email List Cleaning</p>
        </div>
        <div
          className={`mx-20 flex cursor-pointer items-center justify-center gap-2 pb-2 ${
            activeSolution === "realTime" ? "border-b-[3px] border-black" : ""
          }`}
          onClick={() => setActiveSolution("realTime")}
        >
          <MailSearch size={32} />
          <p>Real-Time Email Verification</p>
        </div>
        <div
          className={`mx-20 flex cursor-pointer items-center justify-center gap-2 pb-2 ${
            activeSolution === "auto" ? "border-b-[3px] border-black" : ""
          }`}
          onClick={() => setActiveSolution("auto")}
        >
          <Repeat size={32} />
          <p>Automated List Cleaning</p>
        </div>
      </div>

      <div className="mt-8 h-full min-h-[400px] text-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default Solutions;
