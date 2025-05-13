import Navbar from "@/components/navbar";

import charticon from "../assets/img/charticon.svg";
import mailicon from "../assets/img/mailicon.svg";

const HelpPage = () => {
  return (
    <div className="bg-[#F5F6F8CC]">
      <Navbar />
      <div className="flex h-screen w-full items-center justify-center bg-[#F5F6F8CC] p-20 pt-20">
        <div className="w-full rounded-xl bg-white p-10">
          <p className="text-center text-3xl font-bold">How can we help you?</p>
          <fieldset className="mt-5 flex border-t border-gray-300 text-center"></fieldset>
          <div className="mt-5 flex justify-between">
            <div>
              <p className="text-3xl font-semibold">
                Frequently Read Articles{" "}
              </p>
            </div>
            <div className="w-[30%]">
              <input
                type="search"
                placeholder="Search our help center... "
                className="flex h-full w-full items-start justify-start rounded-full bg-white px-10 py-5 shadow-md focus-visible:outline-none"
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-16">
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>Understanding Apple Private Email Relay Service ad- dresses (@privaterelay.appleid.com)</p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>"Risky" emails </p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-16">
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>Verification results: All possible states and reasons </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>Integrating with HubSpot </p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-16">
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>Launch Guide: Migrating from TheChecker </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>Integrating with Brevo </p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-3xl font-bold">Browse All Categories </p>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">
                Chat with us or send us an email.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex gap-1 rounded-full bg-[#3D6BD8] px-5 py-3 text-white">
                <img src={mailicon} alt="" />
                Chat with us
              </button>
              <button className="flex gap-1 rounded-full bg-[#3D6BD8] px-5 py-3 text-white">
                <img src={charticon} alt="" />
                Send us an email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
