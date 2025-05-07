import { FaLongArrowAltRight } from "react-icons/fa";
const Invoice = () => {
  return (
    <div className="pt-20">
        <div className="bg-white w-full h-full rounded-2xl">
            <p className="text-2xl font-bold px-10 py-5">Invoice</p>
            <div className="bg-[#F5F6F8CC] flex gap-44 py-4 px-10 w-full">
                <p>Amount</p>
                <p>Status</p>
                <p>Number</p>
                <p>Created</p>
            </div>
            <ul className=" flex gap-40 px-10 py-4 justify-start items-center">
                <li className="font-bold text-lg">$42.56</li>
                <li className="bg-[#3D6BD8] rounded-full text-white px-7 py-2 text-center">Paid</li>
                <li>JKD2665156</li>
                <li>02/20/2025</li>
                <div className="flex gap-2 hover:gap-3 bg-[#DFDFDF] rounded-full justify-center items-center px-5 py-2 text-[#3D6BD8]">
                    <p className=" font-semibold">View</p>
                    <FaLongArrowAltRight/>
                </div>
            </ul>
            <ul className=" flex gap-40 px-10 py-4 justify-start items-center">
                <li className="font-bold text-lg">$42.56</li>
                <li className="bg-[#3D6BD8] rounded-full text-white px-7 py-2 text-center">Paid</li>
                <li>JKD2665156</li>
                <li>02/20/2025</li>
                <div className="flex gap-2 hover:gap-3 bg-[#DFDFDF] rounded-full justify-center items-center px-5 py-2 text-[#3D6BD8]">
                    <p className=" font-semibold">View</p>
                    <FaLongArrowAltRight/>
                </div>
            </ul>
            <ul className=" flex gap-40 px-10 py-4 justify-start items-center">
                <li className="font-bold text-lg">$42.56</li>
                <li className="bg-[#3D6BD8] rounded-full text-white px-7 py-2 text-center">Paid</li>
                <li>JKD2665156</li>
                <li>02/20/2025</li>
                <div className="flex gap-2 hover:gap-3 bg-[#DFDFDF] rounded-full justify-center items-center px-5 py-2 text-[#3D6BD8]">
                    <p className=" font-semibold">View</p>
                    <FaLongArrowAltRight/>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Invoice