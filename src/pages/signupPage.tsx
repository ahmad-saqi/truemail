import { useState } from "react";

import { AiTwotoneLock } from "react-icons/ai";
import { BiSolidErrorAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

import logo from "../assets/img/aerow.svg";
import bgimage from "../assets/img/aerow.svg";
import Imagecomp from "../components/imagecomp";

const SignupPage = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [usernameError, setUsernameError] = useState("");
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

  // const isFormValid =  validateUsername() && validateEmail() && validatePassword();
  const hasMinLength = password.length >= 10;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const doesNotContainUsername =
    username && !password.toLowerCase().includes(username.toLowerCase());

  const handleSignup = () => {
    // Reset error messages
    setUsernameError("");
    setEmailError("");
    setPasswordError("");

    // Check fields in order
    if (!username) {
      setUsernameError("Name is required");
      return;
    }
    if (!validateUsername()) {
      setUsernameError("Name must start with a letter");
      return;
    }

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail()) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (!validatePassword()) {
      setPasswordError("Password does not meet requirements");
      return;
    }

    // If all validations pass, proceed with signup
    navigate("/login");
  };

  return (
    <div className="grid h-screen w-full grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-white">
        <div className="flex w-full flex-col items-center justify-center p-10">
          <img src={logo} alt="" />
          <div className="mt-3 flex flex-col items-center justify-center md:mt-7">
            <p className="text-2xl font-bold">Sign Up</p>
            <p className="mt-1 text-sm md:mt-3 md:text-base">
              Signup to get 100 free credits • And unlock exclusive features
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
            <div className="flex flex-col gap-4">
              <fieldset className="mt-2 w-full border-t border-gray-300 text-center">
                <legend className="px-2 text-[15px]">
                  <span className="font-bold">Sign Up</span> with Others
                </legend>
              </fieldset>

              <div className="flex h-full w-full items-center gap-2 rounded-3xl bg-[#F0EDFFCC] p-3 transition-shadow duration-500 hover:shadow-md">
                <BsPerson className="ml-2 size-6" />
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="mr-3 w-full bg-[#F0EDFFCC] outline-none"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError("");
                  }}
                  required
                />
              </div>
              {usernameError && (
                <p className="text-sm text-red-500">{usernameError}</p>
              )}

              <div className="flex h-full w-full items-center gap-2 rounded-3xl bg-[#F0EDFFCC] p-3 transition-shadow duration-500 hover:shadow-md">
                <IoMailUnreadOutline className="ml-2 size-6" />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="mr-3 w-full bg-[#F0EDFFCC] outline-none"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  required
                />
              </div>
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}

              <div className="flex h-full w-full items-center gap-2 rounded-3xl bg-[#F0EDFFCC] p-3 transition-shadow duration-500 hover:shadow-md">
                <AiTwotoneLock className="ml-2 size-6" />
                <div className="flex w-full items-center">
                  <input
                    type={eye ? "password" : "text"}
                    placeholder="Enter Password"
                    className="w-full bg-[#F0EDFFCC] outline-none"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
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
              <div className="space-y-2">
                <div className="flex items-center justify-start gap-2">
                  {hasMinLength ? (
                    <FaCheck className="size-4 text-green-500" />
                  ) : (
                    <BiSolidErrorAlt className="size-4 text-[#3D6BD8]" />
                  )}
                  <p>At least 10 characters long</p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  {hasUpperCase && hasLowerCase && hasNumber && hasSymbol ? (
                    <FaCheck className="size-4 text-green-500" />
                  ) : (
                    <BiSolidErrorAlt className="size-4 text-[#3D6BD8]" />
                  )}
                  <p>
                    Must include at least one uppercase letter, one <br />
                    lowercase letter, one number, and one symbol.
                  </p>
                </div>
                <div className="flex items-center justify-start gap-2">
                  {doesNotContainUsername ? (
                    <FaCheck className="size-4 text-green-500" />
                  ) : (
                    <BiSolidErrorAlt className="size-4 text-[#3D6BD8]" />
                  )}
                  <p>Does not contain user name or full name</p>
                </div>
              </div>
              <p className="text-sm">
                By clicking, you agree to our
                <a
                  href="#"
                  className="ml-1 mr-2 border-b border-blue-500 font-semibold text-blue-600"
                >
                  Privacy Policy
                </a>
                &
                <a
                  href="#"
                  className="ml-2 border-b border-blue-500 font-semibold text-blue-600"
                >
                  Terms of Service.
                </a>
              </p>
              <div className="flex w-full items-center justify-center">
                <button
                  onClick={handleSignup}
                  className="mt-5 w-full cursor-pointer rounded-full bg-[#0F162E] p-4 px-5 text-center text-white transition-shadow duration-500 hover:shadow-lg md:px-10"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-10">
            <p>
              Already have an account?
              <Link to="/login" className="ml-1 font-bold text-blue-500">
                Login
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
