import { FaFolderClosed } from "react-icons/fa6";

import box from "../assets/images/Drepbox.png";
import aws from "../assets/images/aws.png";
import google from "../assets/images/googel.png";
import oneDrivex from "../assets/images/oneDrive.png";
import UplodeTmage from "./upload-image";

const ImageUplodeModal = () => {
  return (
    <div className="absolute inset-0 flex h-screen items-center justify-center bg-black/60">
      <div className="rounded-4xl flex w-2/3 flex-col items-center justify-center bg-white p-10 px-20">
        <p className="mb-5 text-3xl font-bold">Select a Source</p>
        <div className="flex gap-4">
          <div className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-[#3D6BD8]/30 bg-[#3D6BD8]/15 px-5 py-2 hover:border-2 hover:border-[#3D6BD8] hover:bg-[#3D6BD8]/30">
            <FaFolderClosed className="text-[#3D6BD8]" />
            <p className="text-[#3D6BD8]">My Computer</p>
          </div>
          <div className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-[#3D6BD8]/30 bg-[#3D6BD8]/15 px-5 py-2 hover:border-2 hover:border-[#3D6BD8] hover:bg-[#3D6BD8]/30">
            <FaFolderClosed className="text-[#3D6BD8]" />
            <p className="text-[#3D6BD8]">My Computer</p>
          </div>
        </div>

        <UplodeTmage />

        <p className="mt-7 text-gray-400">Connect to your cloud based files</p>
        <div className="mt-8 flex gap-8">
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
