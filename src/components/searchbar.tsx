import EmailForm from "./emailForm";
import { IoIosSend } from "react-icons/io";
import { RiMailAddFill } from "react-icons/ri";
import { useState } from "react";
import UplodeTmage from "./upload-image";
import ImageUplodeModal from "./imageUplodeModal";

const Searchbar = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleVerifyClick = () => {
    if (isValidEmail(email)) {
      setShowEmailForm(!showEmailForm);
    }
  };

  return (
    <div
      className={`w-full h-full min-h-screen flex flex-col items-start justify-start ${
        showEmailForm ? "pt-20" : "pt-60"
      }`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVerifyClick();
        }}
        className="w-1/2 mx-auto h-full p-5 flex flex-col items-center justify-center"
      >
        <span className="w-full text-5xl font-bold text-center">
          Test the Email Validator
        </span>
        <div className="w-full rounded-full bg-gray-100 flex items-center justify-center p-2 mt-15 hover:shadow-lg transition-shadow duration-500 ">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-full justify-center items-center flex focus-visible:outline-none px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className={`cursor-pointer rounded-2xl p-2 px-8 flex justify-center items-center gap-2 ${
                isValidEmail(email)
                  ? "bg-[#3D6BD8] text-white"
                  : "bg-gray-200 text-[#3D6BD8]"
              }`}
            >
              <p>Verify</p>
              <IoIosSend className="size-6" />
            </button>
            <button className="cursor-pointer bg-gray-200 rounded-2xl p-2 px-8 flex justify-center items-center gap-2 text-[#3D6BD8]">
              <RiMailAddFill className="size-5" />
              <p>Bulk</p>
            </button>
          </div>
        </div>
      </form>
      <fieldset className="flex w-1/5 mx-auto border-t border-gray-300 text-center mt-10">
        <legend className="px-5">Or</legend>
      </fieldset>

      <div className=" flex justify-center items-center rounded-full w-1/2 mx-auto p-6">
        <UplodeTmage />
      </div>

      {showEmailForm ? <EmailForm /> : null}
      <ImageUplodeModal/>
    </div>
  );
};

export default Searchbar;
