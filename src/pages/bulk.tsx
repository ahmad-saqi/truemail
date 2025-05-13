import { useState } from "react";

import CopyPaste from "@/components/copy-paste";
import Navbar from "@/components/navbar";
import UplodeTmage from "@/components/upload-image";

import CopyBlue from "../assets/img/copyBlue.svg";
import CopyWhite from "../assets/img/copyWhite.svg";
import PcBlue from "../assets/img/pcBlue.svg";
import PcWhite from "../assets/img/pcWhite.svg";

const Bulk = () => {
  const [selectedSource, setSelectedSource] = useState<"computer" | "copy">(
    "computer"
  );

  return (
    <div>
      <Navbar />
      <div className="flex h-full min-h-screen flex-col items-center justify-center bg-gray-100">
        <div className="flex w-2/3 flex-col items-center h-full min-h-[calc(100vh-350px)] justify-start gap-4 rounded-2xl bg-white p-8">
          <h1 className="text-2xl font-bold">Select a Source</h1>
          <div className="flex items-center justify-center gap-4">
            {/* My Computer Button */}
            <button
              className={`flex items-center gap-2 rounded-lg px-4 py-2 ${
                selectedSource === "computer"
                  ? "bg-primary text-white"
                  : "border border-primary bg-primary/20 text-primary"
              }`}
              onClick={() => setSelectedSource("computer")}
            >
              <img
                src={selectedSource === "computer" ? PcWhite : PcBlue}
                alt="pc icon"
              />
              My Computer
            </button>

            {/* Copy & Paste Button */}
            <button
              className={`flex items-center gap-2 rounded-lg px-4 py-2 ${
                selectedSource === "copy"
                  ? "bg-primary text-white"
                  : "border border-primary bg-primary/20 text-primary"
              }`}
              onClick={() => setSelectedSource("copy")}
            >
              <img
                src={selectedSource === "copy" ? CopyWhite : CopyBlue}
                alt="copy icon"
              />
              Copy & Paste
            </button>
          </div>

          {/* Conditionally render components */}
          {selectedSource === "computer" && <UplodeTmage />}
          {selectedSource === "copy" && <CopyPaste />}
        </div>
      </div>
    </div>
  );
};

export default Bulk;
