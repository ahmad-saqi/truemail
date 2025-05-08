import { useRef, useState } from "react";

import uplaodeimage from "../assets/img/uplaodeimage.png";

const UplodeTmage = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="g-red-400 mx-auto flex w-full items-center justify-center">
      <div className="rounded-4xl mt-10 flex w-full cursor-pointer flex-col items-center justify-center border-2 border-dashed border-[#3D6BD8] p-16">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-48 rounded-lg"
            />
          ) : (
            <div className="cursor-pointer rounded-md p-2 text-gray-500">
              <div className="mb-5 flex items-center justify-center">
                <img src={uplaodeimage} alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold text-[#3D6BD8]/70">
                  Drag and Drop anywhere on the page, or
                  <span className="ml-2 mr-2 cursor-pointer text-xl font-semibold text-[#3D6BD8]">
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
    </div>
  );
};

export default UplodeTmage;
