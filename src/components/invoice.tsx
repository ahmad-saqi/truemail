import { FaLongArrowAltRight } from "react-icons/fa";

const Invoice = () => {
  return (
    <div className="pt-20">
      <div className="h-full w-full rounded-2xl bg-white">
        <p className="px-10 py-5 text-2xl font-bold">Invoice</p>
        <div className="flex w-full gap-44 bg-[#F5F6F8CC] px-10 py-4">
          <p>Amount</p>
          <p>Status</p>
          <p>Number</p>
          <p>Created</p>
        </div>
        <ul className="flex items-center justify-start gap-40 px-10 py-4">
          <li className="text-lg font-bold">$42.56</li>
          <li className="rounded-full bg-[#3D6BD8] px-7 py-2 text-center text-white">
            Paid
          </li>
          <li>JKD2665156</li>
          <li>02/20/2025</li>
          <div className="flex items-center justify-center gap-2 rounded-full bg-[#DFDFDF] px-5 py-2 text-[#3D6BD8] hover:gap-3">
            <p className="font-semibold">View</p>
            <FaLongArrowAltRight />
          </div>
        </ul>
        <ul className="flex items-center justify-start gap-40 px-10 py-4">
          <li className="text-lg font-bold">$42.56</li>
          <li className="rounded-full bg-[#3D6BD8] px-7 py-2 text-center text-white">
            Paid
          </li>
          <li>JKD2665156</li>
          <li>02/20/2025</li>
          <div className="flex items-center justify-center gap-2 rounded-full bg-[#DFDFDF] px-5 py-2 text-[#3D6BD8] hover:gap-3">
            <p className="font-semibold">View</p>
            <FaLongArrowAltRight />
          </div>
        </ul>
        <ul className="flex items-center justify-start gap-40 px-10 py-4">
          <li className="text-lg font-bold">$42.56</li>
          <li className="rounded-full bg-[#3D6BD8] px-7 py-2 text-center text-white">
            Paid
          </li>
          <li>JKD2665156</li>
          <li>02/20/2025</li>
          <div className="flex items-center justify-center gap-2 rounded-full bg-[#DFDFDF] px-5 py-2 text-[#3D6BD8] hover:gap-3">
            <p className="font-semibold">View</p>
            <FaLongArrowAltRight />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Invoice;
