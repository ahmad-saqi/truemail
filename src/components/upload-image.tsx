import { useState } from "react";

import { useNavigate } from "react-router-dom";

import uploadImage from "../assets/img/upload.svg";

const UploadFile = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    if (fileName) {
      // You can add file validation or upload logic here if needed
      navigate("/records");
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-4">
      <div className="mt-10 flex h-72 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-primary bg-white p-16">
        <input
          type="file"
          accept=".csv,.txt,.xls,.xlsx"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          {fileName ? (
            <p className="text-lg font-semibold text-gray-700">
              Selected File: {fileName}
            </p>
          ) : (
            <div className="cursor-pointer rounded-md p-2 text-gray-500">
              <div className="mb-5 flex items-center justify-center">
                <img src={uploadImage} alt="upload" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold text-[#3D6BD8]/70">
                  Drag and Drop anywhere on the page, or
                  <span className="ml-2 mr-2 text-xl font-semibold text-[#3D6BD8]">
                    click
                  </span>
                  to Upload files.
                </p>
                <p className="text-sm">Supports: CSV, TXT, XLS, or XLSX</p>
              </div>
            </div>
          )}
        </label>
      </div>
      <div className="flex w-full items-center justify-end">
        <button
          onClick={handleSubmit}
          className="mt-5 rounded-full bg-primary px-9 py-3 text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
