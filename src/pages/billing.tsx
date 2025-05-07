import Navbar from "../components/navbar";
import Atm from "../assets/images/card-pos.png";
import Payment from "../components/payment";
import Invoice from "../components/invoice";
// import SuccessModal from "../components/successModal";

const Billing = () => {
  return (
    <div className="h-screen bg-[#F5F6F8CC]">
      <Navbar />
      <div className="pt-10 h-screen">
        <div className="flex h-full ">
          {/* sidebar */}
          <div className=" flex flex-col items-start justify-start h-full p-10 pt-20 w-[15%]">
            <div className="flex items-center gap-3">
              <img src={Atm} alt="" className="size-6" />
              <p className="font-semibold text-2xl">Billing</p>
            </div>
            <ul className="flex flex-col gap-3 ml-10 mt-5 list-disc">
              <li className="cursor-pointer text-[#3D6BD8] ">Payment Method</li>
              <li className="cursor-pointer">Invoices</li>
            </ul>
          </div>
          <div className="px-10 w-full">
          <Payment/>
          <Invoice/>
          </div>
        </div>
      </div>
      {/* <SuccessModal/> */}
    </div>
  );
};

export default Billing;
