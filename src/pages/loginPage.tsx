import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiTwotoneLock } from "react-icons/ai";
import { RiEyeLine } from "react-icons/ri";
import Imagecomp from "../components/imagecomp";
import bgimage from "../assets/images/bgimage.png";
import logo from "../assets/images/Truemaillogo.png";
import { useState } from "react";
import { RiEyeOffLine } from "react-icons/ri";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const usernameSchema = z
    .string()
    .min(1, "name is required")
    .regex(/^[a-zA-Z]/, "name start with letter")
    .regex(
      /^[a-zA-Z0-9_@.-]+$/,
      "name can contain letters, numbers, and symbols."
    );

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

  const validateUsername = () => {
    try {
      usernameSchema.parse(username);
      return true;
    } catch {
      return false;
    }
  };

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
      navigate('/');
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center p-10 w-full">
          <img src={logo} alt="" />
          <div className="flex flex-col justify-center items-center mt-7">
            <p className="text-2xl font-bold">LOGIN</p>
            <p className="text-sm mt-3">
              Please enter your informaton to access you'r account
            </p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-[50%] gap-4 mt-6">
            <div className="flex md:flex-col gap-4 w-full md:w-1/2 lg:w-full">
              <button className="flex gap-3 justify-center cursor-pointer items-center hover:shadow-lg transition-shadow duration-500 w-full border border-gray-200 rounded-3xl p-2 md:p-3">
                <FcGoogle className="size-6" />
                <p className="hidden md:block text-md">
                  Login with <span className="font-bold">Google</span>
                </p>
              </button>
              <button className="flex gap-4 justify-center cursor-pointer items-center w-full border border-gray-200 hover:shadow-lg transition-shadow duration-500 rounded-3xl p-2 md:p-3">
                <FaLinkedin className="fill-blue-600 size-6" />
                <p className="hidden md:block text-lg">
                  Login with <span className="font-bold">Linkedin</span>
                </p>
              </button>
            </div>
            <div className="flex flex-col gap-4">
            <fieldset className="w-full border-t mt-2 border-gray-300 text-center">
              <legend className="px-2 text-[15px]">
                <span className="font-bold">Login</span> with Others
              </legend>
            </fieldset>

            <div className="bg-[#F0EDFFCC] w-full h-full flex  items-center gap-2 rounded-3xl p-3  hover:shadow-md duration-500 transition-shadow ">
              <IoMailUnreadOutline className="size-6 ml-2" />
              <input
                type="email"
                placeholder="Enter Email"
                className="outline-none w-full mr-3"
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
            <div className="bg-[#F0EDFFCC] w-full h-full flex  items-center gap-2 rounded-3xl p-3  hover:shadow-md duration-500 transition-shadow ">
              <AiTwotoneLock className="size-6 ml-2" />
              <div className="flex items-center w-full">
                <input
                  type={eye ? "password" : "text"}
                  placeholder="Enter Password"
                  className="outline-none w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div onClick={() => setEye(!eye)}>
                  {eye ? (
                    <RiEyeLine className="mr-2 ml-2 text-2xl" />
                  ) : (
                    <RiEyeOffLine className="mr-2 ml-2 text-2xl" />
                  )}
                </div>
              </div>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
            <div className="flex justify-end items-end">
              <a
                href="#"
                className="text-blue-400 ml-40 md:ml-70 font-semibold"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center items-center w-full ">
              <Link 
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
                className="mt-5 text-white text-center bg-[#0F162E] w-full rounded-4xl p-2 cursor-pointer hover:shadow-lg transition-shadow duration-500 px-5 md:px-10"
              >
                Login
              </Link>
            </div>
          </div>
            </div>

          <div className="mt-10">
            <p>
              Already have an account?
              <Link to="/signup" className="text-blue-500 font-bold ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <img src={bgimage} alt="" className="w-full h-screen object-cover " />
        <div className="absolute inset-0 flex justify-center items-center ">
          <Imagecomp />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
