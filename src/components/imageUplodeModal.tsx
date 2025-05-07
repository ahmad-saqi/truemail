import UplodeTmage from "./upload-image";
import aws from "../assets/images/aws.png";
import box from "../assets/images/Drepbox.png";
import google from "../assets/images/googel.png";
import { FaFolderClosed } from "react-icons/fa6";
import oneDrivex from "../assets/images/oneDrive.png";

const ImageUplodeModal = () => {
  return (
    <div className="bg-black/60 h-screen flex justify-center items-center absolute inset-0">
      <div className="bg-white rounded-4xl w-2/3 p-10 px-20 flex flex-col items-center justify-center">
        <p className="text-3xl mb-5 font-bold">Select a Source</p>
        <div className="flex  gap-4">
          <div className="flex gap-3 border-2 border-[#3D6BD8]/30 hover:border-2 hover:border-[#3D6BD8] items-center justify-center bg-[#3D6BD8]/15  hover:bg-[#3D6BD8]/30 cursor-pointer rounded-xl px-5 py-2">
            <FaFolderClosed className="text-[#3D6BD8]" />
            <p className="text-[#3D6BD8]">My Computer</p>
          </div>
          <div className="flex gap-3 border-2 border-[#3D6BD8]/30 hover:border-2 hover:border-[#3D6BD8] items-center justify-center bg-[#3D6BD8]/15  hover:bg-[#3D6BD8]/30 cursor-pointer rounded-xl px-5 py-2">
            <FaFolderClosed className="text-[#3D6BD8]" />
            <p className="text-[#3D6BD8]">My Computer</p>
          </div>
        </div>

        <UplodeTmage/>

        <p className="text-gray-400 mt-7">Connect to your cloud based files</p>
        <div className="flex gap-8 mt-8">
            <img src={box} alt="" className="cursor-pointer" />
            <img src={google} alt="" className="cursor-pointer" />
            <img src={oneDrivex} alt="" className="cursor-pointer" />
            <img src={aws} alt="" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ImageUplodeModal;
