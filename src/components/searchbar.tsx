import { useState } from "react";

import { IoIosSend } from "react-icons/io";

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
    <div className="flex h-full w-full flex-col items-start justify-start">
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
        <div className="relative mt-8 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex h-full w-full items-center justify-center rounded-full bg-white p-8 shadow-md focus-visible:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="absolute right-2 top-3 flex gap-2">
            <button
              type="submit"
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-full p-4 px-8 text-lg font-bold ${
                isValidEmail(email)
                  ? "bg-[#3D6BD8] text-white"
                  : "bg-gray-200 text-[#3D6BD8]"
              }`}
            >
              <p>Verify</p>
              <IoIosSend className="size-6" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
