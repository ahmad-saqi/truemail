import { BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";



import Navbar from "@/components/navbar";
import OverviewPichart from "@/components/overview-pichart";



import MailWhite from "../assets/img/mailWhite.svg";
import MaxReach from "../assets/img/maxreach.svg";
import OverViewImg from "../assets/img/overviewimg.svg";





const Overview = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="p-20">
        <div className="mt-20 h-full w-full space-y-12 rounded-xl bg-white p-12">
          <div className="grid grid-cols-4">
            <div className="col-span-3 flex items-center justify-between">
              <div>
                <p>Name</p>
                <p className="font-bold">Holiday Event</p>
              </div>
              <img src={OverViewImg} alt="" />
              <div>
                <p>Emails</p>
                <p className="font-bold">37,227</p>
              </div>
              <img src={OverViewImg} alt="" />
              <div>
                <p>Uploaded</p>
                <p className="font-bold">02/27/2025</p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-10 py-0 text-white"
                onClick={() => navigate("/view-emails")}>
                <img src={MailWhite} alt="" className="size-5" />
                Email
              </button>
            </div>
          </div>
          <div className="h-[2px] w-full bg-gray-300"></div>
          <div className="grid grid-cols-2 items-center">
            <div className="">
              <OverviewPichart />
            </div>
            <div>
              <h1>Conversion Funnel</h1>
              <div className="grid grid-cols-2 gap-[10%]">
                <div className="flex flex-col gap-4">
                  <div className="flex h-10 w-full items-center justify-start rounded-xl bg-green-500 pl-4">
                    <p className="font-bold text-white">Deliverable</p>
                  </div>
                  <div className="flex h-10 w-2/4 items-center justify-start rounded-xl bg-red-500 pl-4">
                    <p className="font-bold text-white">Undeliverable</p>
                  </div>
                  <div className="flex h-10 w-3/5 items-center justify-start rounded-xl bg-yellow-400 pl-4">
                    <p className="font-bold text-white">Risky</p>
                  </div>
                  <div className="flex h-10 w-2/4 items-center justify-start rounded-xl bg-primary pl-4">
                    <p className="font-bold text-white">Duplicate</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="h-12 font-bold">25,027</p>
                  <p className="h-12 font-bold">257</p>
                  <p className="h-12 font-bold">2027</p>
                  <p className="h-12 font-bold">5,027</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[2px] w-full bg-gray-300"></div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 justify-center items-center  bg-gray-100 rounded-xl py-4 w-72 border border-gray-200">
              <BadgeCheck fill="#3D6BD8" className="text-white size-10" />
              <h1 className="font-bold">
                Maximum Deliverability
              </h1>
              <p className="text-xs text-gray-500">
                Include deliverable emails only
              </p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center  bg-gray-100 rounded-xl py-4 w-72 border border-gray-200">
              <img src={MaxReach} alt="" />
              <h1 className="font-bold">
               Maximum Reach
              </h1>
              <p className="text-xs text-gray-500">
                Include risky emails also
              </p>
            </div>

          </div>
          <div className="flex justify-end">
            <button className=" rounded-full bg-primary px-9 py-3 text-white">Download as csv</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;