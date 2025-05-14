
import { z } from "zod";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import Imagecomp from "../components/imagecomp";
import bgimage from "../assets/img/bglines.svg"
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../assets/img/aerow.svg";
import { Link, useNavigate } from "react-router-dom";

const FrogetPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailSchema = z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format");

  const validateEmail = () => {
    try {
      emailSchema.parse(email);
      return true;
    } catch {
      return false;
    }
  };

  const handleReset = () => {
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (validateEmail()) {
      // Simulate success — replace with your API logic
      navigate("/");
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-10 w-full ">
          <img src={logo} alt="" />
          <div className="flex flex-col justify-center w-full items-center mt-7">
            <p className="text-2xl font-bold">FORGOT PASSWORD?</p>
            <p className="text-sm mt-3">
              No Worries, We'll send you reset instructions.
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-4 mt-6">
            <div className="flex flex-col gap-4 w-1/2">
              <div className="bg-[#F0EDFFCC] w-full h-full flex items-center gap-2 rounded-3xl p-3 hover:shadow-md duration-500 transition-shadow">
                <BsPerson className="size-6 ml-2" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="outline-none w-full mr-3 bg-[#F0EDFFCC]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
              {email && !validateEmail() && (
                <p className="text-red-500 text-sm">
                  Please enter a valid email address
                </p>
              )}
             <div className="flex w-full items-center justify-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleReset();
                  }}
                  className="rounded-full mt-5 w-full cursor-pointer bg-[#0F162E] p-4 px-5 text-center text-white transition-shadow duration-500 hover:shadow-lg md:px-10"
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2 hover:gap-3 mt-10 items-center justify-center w-full">
            <FaArrowLeftLong />
            <Link to="/login" className="font-bold ml-1">
              Back To Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <img src={bgimage} alt="" className="w-full h-screen object-cover" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Imagecomp />
        </div>
      </div>
    </div>
  );
};

export default FrogetPage;
