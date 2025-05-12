import { useState } from "react";

import { IoIosSend } from "react-icons/io";
import { RiMailAddFill } from "react-icons/ri";

import EmailForm from "./emailForm";
import UplodeTmage from "./upload-image";

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
      className={`flex h-full min-h-screen w-full flex-col items-start justify-start ${
        showEmailForm ? "pt-20" : "pt-60"
      }`}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleVerifyClick();
        }}
        className="mx-auto flex h-full w-1/2 flex-col items-center justify-center p-5"
      >
        <span className="w-full text-center text-5xl font-bold">
          Test the Email Validator
        </span>
        <div className="mt-15 flex w-full items-center justify-center rounded-full bg-gray-100 p-2 transition-shadow duration-500 hover:shadow-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-full flex-1 items-center justify-center px-4 focus-visible:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-2xl p-2 px-8 ${
                isValidEmail(email)
                  ? "bg-[#3D6BD8] text-white"
                  : "bg-gray-200 text-[#3D6BD8]"
              }`}
            >
              <p>Verify</p>
              <IoIosSend className="size-6" />
            </button>
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gray-200 p-2 px-8 text-[#3D6BD8]">
              <RiMailAddFill className="size-5" />
              <p>Bulk</p>
            </button>
          </div>
        </div>
      </form>
      <fieldset className="mx-auto mt-10 flex w-1/5 border-t border-gray-300 text-center">
        <legend className="px-5">Or</legend>
      </fieldset>

      <div className="mx-auto flex w-1/2 items-center justify-center rounded-full p-6">
        <UplodeTmage />
      </div>

      {showEmailForm ? <EmailForm /> : null}
      {/* <ImageUplodeModal /> */}
    </div>
  );
};

export default Searchbar;
