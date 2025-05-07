import Atm from "../assets/images/card-pos.png";
import Invoice from "../components/invoice";
import Navbar from "../components/navbar";
import Payment from "../components/payment";

// import SuccessModal from "../components/successModal";

const Billing = () => {
  return (
    <div className="h-screen bg-[#F5F6F8CC]">
      <Navbar />
      <div className="h-screen pt-10">
        <div className="flex h-full">
          {/* sidebar */}
          <div className="flex h-full w-[15%] flex-col items-start justify-start p-10 pt-20">
            <div className="flex items-center gap-3">
              <img src={Atm} alt="" className="size-6" />
              <p className="text-2xl font-semibold">Billing</p>
            </div>
            <ul className="ml-10 mt-5 flex list-disc flex-col gap-3">
              <li className="cursor-pointer text-[#3D6BD8]">Payment Method</li>
              <li className="cursor-pointer">Invoices</li>
            </ul>
          </div>
          <div className="w-full px-10">
            <Payment />
            <Invoice />
          </div>
        </div>
      </div>
      {/* <SuccessModal/> */}
    </div>
  );
};

export default Billing;
