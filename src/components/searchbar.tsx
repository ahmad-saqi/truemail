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
    <div
      className="flex h-full  w-full flex-col items-start justify-start"
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
        <div className="mt-14 flex w-full items-center justify-center rounded-full bg-white p-4 shadow-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex bg-transparent sw h-full flex-1 items-center justify-center px-4 focus-visible:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-full p-3 px-8 font-bold ${
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
