import { useState } from "react";

import { AiTwotoneLock } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import logo from "../assets/img/Truemaillogo.png";
import bgimage from "../assets/img/bgimage.png";
import Imagecomp from "../components/imagecomp";

const SignupPage = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const [password, setPassword] = useState("");
  const [username] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const usernameSchema = z
  //   .string()
  //   .min(1, "name is required")
  //   .regex(/^[a-zA-Z]/, "name start with letter")
  //   .regex(
  //     /^[a-zA-Z0-9_@.-]+$/,
  //     "name can contain letters, numbers, and symbols."
  //   );

  const emailSchema = z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format");

  const passwordSchema = z.object({
    password: z
      .string()
      .min(10, "Password must be at least 10 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one symbol")
      .refine(
        (val) =>
          !username || !val.toLowerCase().includes(username.toLowerCase()),
        {
          message: "Password cannot contain username",
        }
      ),
  });

  // const validateUsername = () => {
  //   try {
  //     usernameSchema.parse(username);
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // };

  const validateEmail = () => {
    try {
      emailSchema.parse(email);
      return true;
    } catch {
      return false;
    }
  };

  const validatePassword = () => {
    try {
      passwordSchema.parse({ password });
      return true;
    } catch {
      return false;
    }
  };

  const handleLogin = () => {
    // Reset error messages
    setEmailError("");
    setPasswordError("");

    // Check if fields are empty
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }

    // Only proceed if both fields are filled and valid
    if (email && password && validateEmail() && validatePassword()) {
      navigate("/");
    }
  };

  return (
    <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-white">
        <div className="flex w-full flex-col items-center justify-center p-10">
          <img src={logo} alt="" />
          <div className="mt-7 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">LOGIN</p>
            <p className="mt-3 text-sm">
              Please enter your informaton to access you'r account
            </p>
          </div>
          <div className="mt-6 flex w-full flex-col items-center gap-4 lg:w-[50%]">
            <div className="flex w-full gap-4 md:w-1/2 md:flex-col lg:w-full">
              <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-3xl border border-gray-200 p-2 transition-shadow duration-500 hover:shadow-lg md:p-3">
                <FcGoogle className="size-6" />
                <p className="text-md hidden md:block">
                  Login with <span className="font-bold">Google</span>
                </p>
              </button>
              <button className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-3xl border border-gray-200 p-2 transition-shadow duration-500 hover:shadow-lg md:p-3">
                <FaLinkedin className="size-6 fill-blue-600" />
                <p className="hidden text-lg md:block">
                  Login with <span className="font-bold">Linkedin</span>
                </p>
              </button>
            </div>
            <div className="flex w-full flex-col gap-4">
              <fieldset className="mt-2 w-full border-t border-gray-300 text-center">
                <legend className="px-2 text-[15px]">
                  <span className="font-bold">Login</span> with Others
                </legend>
              </fieldset>

              <div className="flex h-full w-full items-center gap-2 rounded-3xl bg-[#F0EDFFCC] p-3 transition-shadow duration-500 hover:shadow-md">
                <IoMailUnreadOutline className="ml-2 size-6" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="mr-3 w-full outline-none bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}
              {email && !validateEmail() && (
                <p className="text-sm text-red-500">
                  Please enter a valid email address
                </p>
              )}
              <div className="flex h-full w-full items-center gap-2 rounded-3xl bg-[#F0EDFFCC] p-3 transition-shadow duration-500 hover:shadow-md">
                <AiTwotoneLock className="ml-2 size-6" />
                <div className="flex w-full items-center">
                  <input
                    type={eye ? "password" : "text"}
                    placeholder="Enter Password"
                    className="w-full outline-none bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <div onClick={() => setEye(!eye)}>
                    {eye ? (
                      <RiEyeLine className="ml-2 mr-2 text-2xl" />
                    ) : (
                      <RiEyeOffLine className="ml-2 mr-2 text-2xl" />
                    )}
                  </div>
                </div>
              </div>
              {passwordError && (
                <p className="text-sm text-red-500">{passwordError}</p>
              )}
              <div className="flex items-end justify-end">
                <a
                  href="#"
                  className="md:ml-70 ml-40 font-semibold text-blue-400"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex w-full items-center justify-center">
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  className="rounded-full mt-5 w-full cursor-pointer bg-[#0F162E] p-4 px-5 text-center text-white transition-shadow duration-500 hover:shadow-lg md:px-10"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p>
              Already have an account?
              <Link to="/signup" className="ml-1 font-bold text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img src={bgimage} alt="" className="h-screen w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Imagecomp />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
