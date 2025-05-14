import Navbar from "@/components/navbar";

import General from "../assets/img/General.svg";
import mailicon from "../assets/img/mailicon.svg";
import Pricing from "../assets/img/PricingHepl.svg";
import charticon from "../assets/img/charticon.svg";
import Verification from "../assets/img/Verification.svg";
import Integrations from "../assets/img/Integrations.svg";
import Api from "../assets/img/api.svg";
import Deliverability from "../assets/img/Deliverability.svg";

const HelpPage = () => {
  return (
    <div className="bg-[#F5F6F8CC]">
      <Navbar />
      <div className="flex  w-full bg-[#F5F6F8CC] md:px-20 p-5 h-full pt-20">
        <div className="mt-20 md:mt-5 w-full rounded-xl bg-white px-10 py-5">
          <p className="text-center text-3xl font-bold">How can we help you?</p>
          <fieldset className="mt-5 flex border-t border-gray-300 text-center"></fieldset>
          <div className="mt-5 md:flex justify-between">
            <div>
              <p className="text-3xl font-semibold">Frequently Read Articles</p>
            </div>
            <div className="md:w-[30%]">
              <input
                type="search"
                placeholder="Search our help center... "
                className="flex h-full w-full items-start justify-start rounded-full bg-white px-10 py-5 shadow-md focus-visible:outline-none"
              />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>
                  Understanding Apple Private Email Relay Service ad- dresses
                  (@privaterelay.appleid.com)
                </p>
              </div>
            
           
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>"Risky" emails </p>
              </div>
            
           
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>Verification results: All possible states and reasons </p>
              </div>
            
            
              <div className="flex w-full rounded-full bg-gray-100 p-4">
                <p>Integrating with HubSpot </p>
              </div>
           
          
            <div className="flex w-full rounded-full bg-gray-100 p-4">
              <p>Launch Guide: Migrating from TheChecker </p>
            </div>
            <div className="flex w-full rounded-full bg-gray-100 p-4">
              <p>Integrating with Brevo </p>
            </div>
          </div>

         <div className="w-full">
           <p className="mt-5 text-2xl md:text-3xl font-bold w-full">Browse All Categories </p>
         </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex w-full items-center justify-start gap-5 rounded-2xl bg-gray-100 p-4">
              <div className="rounded-full bg-primary/10 p-3 size-18">
                <img src={General} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">General</p>
                <p className="line-clamp-2">
                  General topics like Terms of Use, Account, etc.
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-5 rounded-2xl bg-gray-100 p-4">
              <div className="rounded-full bg-primary/10 p-3 size-18">
                <img src={Pricing} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="mb-1 font-semibold">Pricing & Billing </p>
                <p className="line-clamp-2">
                  Want to know more about prices or in-voices? This section is
                  for you
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-5 rounded-2xl bg-gray-100 p-4">
              <div className="rounded-full bg-primary/10 size-18 p-3">
                <img src={Verification} alt=""  />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">Email List Verification </p>
                <p className="line-clamp-2">
                  Understanding the results and other articles.
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-5 rounded-2xl bg-gray-100 p-4">
              <div className="rounded-full bg-primary/10 size-18 p-3">
                <img src={Integrations} alt=""  />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">App Integrations </p>
                <p className="line-clamp-2">
                  Check the integrations available and how to use them,
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-5 rounded-2xl bg-gray-100 p-4">
              <div className="rounded-full bg-primary/10 size-18 p-3">
                <img src={Deliverability} alt=""  />
              </div>
              <div className="flex flex-col">
                <p className="mb-1 font-semibold">Deliverability </p>
                <p className="line-clamp-2">
                  General information about Deliverability
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-start gap-5 rounded-2xl bg-gray-100 p-4">
              <div className="rounded-full bg-primary/10 size-18 p-3">
                <img src={Api} alt=""  />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">API</p>
                <p className="line-clamp-2">
                  Check the integrations available and how to use them,
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex  items-center justify-between mt-10">
            <div>
              <p className="text-lg text-[#0F162E]">
                Chat with us or send us an email.
              </p>
            </div>
            <div className="lg:flex gap-3">
              <button className="flex gap-1 mb-5 md:mb-0 mt-5  rounded-full bg-[#3D6BD8] px-5 py-4 text-white">
                <img src={mailicon} alt="" />
                Chat with us
              </button>
              <button className="flex gap-1 mb-5 md:mb-0 mt-5  rounded-full bg-[#3D6BD8] px-5 py-4 text-white">
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
