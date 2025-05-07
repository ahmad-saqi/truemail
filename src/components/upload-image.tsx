import { useRef, useState } from "react";
import uplaodeimage from "../assets/images/uplaodeimage.png";

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
    <div className="flex items-center justify-center w-full mx-auto g-red-400">
      <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-[#3D6BD8] cursor-pointer rounded-4xl mt-10 p-16">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer ">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="max-h-48 rounded-lg "
            />
          ) : (
            <div className="text-gray-500  rounded-md p-2 cursor-pointer">
              <div className="flex items-center justify-center mb-5">
                <img src={uplaodeimage} alt="" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xl text-[#3D6BD8]/70 font-semibold">
                  Drag and Drop anywhere on the page, or
                  <span className="text-[#3D6BD8] text-xl ml-2 mr-2 font-semibold cursor-pointer">
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
