import { useState } from "react";

import { RiEyeLine } from "react-icons/ri";
import { RiEyeOffLine } from "react-icons/ri";

const ProfileForm = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [eye1, setEye1] = useState(true);
  const [eye2, setEye2] = useState(true);
  const [eye, setEye] = useState(true);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 pt-20">
      <div className="w-[80%] rounded-3xl bg-white px-10 py-3">
        <div className="border-b border-gray-200">
          <p className="mb-5 mt-4 text-xl font-semibold">Edit Profile</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-16">
          <div className="w-full">
            <p className="mb-2 mt-5 text-lg font-semibold">Full Name</p>
            <input
              type="text"
              className="w-full rounded-full bg-gray-100 p-4 outline-none"
              placeholder="Enter you'r name"
            />
          </div>
          <div className="w-full">
            <p className="mb-2 mt-5 text-lg font-semibold">Email</p>
            <input
              type="email"
              className="w-full rounded-full bg-gray-100 p-4 outline-none"
              placeholder="Enter you'r email"
            />
          </div>
        </div>
        <div className="mt-15 mb-5 flex justify-end">
          <button className="cursor-pointer rounded-full border bg-[#3D6BD8] px-7 py-4 text-white hover:border-[#3D6BD8] hover:bg-white hover:text-[#3D6BD8]">
            Save
          </button>
        </div>
      </div>
      <div className="w-[80%] rounded-3xl bg-white px-10 py-3">
        <div className="border-b border-gray-200">
          <p className="mb-5 mt-4 text-xl font-semibold">Change Password</p>
        </div>
        <div className="w-full">
          <p className="mb-2 mt-5 text-lg font-semibold">
            Enter Your Current Password
          </p>
          <div className="flex w-full items-center rounded-full bg-gray-100 px-3 text-gray-400">
            <input
              type={eye1 ? "password" : "text"}
              placeholder="Enter Password"
              className="w-full p-4 outline-none"
              value={password1}
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
              required
            />

            <div onClick={() => setEye1(!eye1)}>
              {eye1 ? (
                <RiEyeLine className="ml-2 mr-2 text-2xl text-black" />
              ) : (
                <RiEyeOffLine className="ml-2 mr-2 text-2xl text-black" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-16">
          <div className="w-full">
            <p className="mb-2 mt-5 text-lg font-semibold">
              Enter New Password
            </p>
            <div className="flex w-full items-center rounded-full bg-gray-100 px-3 text-gray-400">
              <input
                type={eye ? "password" : "text"}
                placeholder="Enter Password"
                className="w-full p-4 outline-none"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />

              <div onClick={() => setEye(!eye)}>
                {eye ? (
                  <RiEyeLine className="ml-2 mr-2 text-2xl text-black" />
                ) : (
                  <RiEyeOffLine className="ml-2 mr-2 text-2xl text-black" />
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="mb-2 mt-5 text-lg font-semibold">
              Confirm New Password
            </p>
            <div className="flex w-full items-center rounded-full bg-gray-100 px-3 text-gray-400">
              <input
                type={eye2 ? "password" : "text"}
                placeholder="Enter Password"
                className="w-full p-4 outline-none"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                required
              />

              <div onClick={() => setEye2(!eye2)}>
                {eye2 ? (
                  <RiEyeLine className="ml-2 mr-2 text-2xl text-black" />
                ) : (
                  <RiEyeOffLine className="ml-2 mr-2 text-2xl text-black" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15 mb-5 flex justify-end">
          <button className="cursor-pointer rounded-full border bg-[#3D6BD8] px-7 py-4 text-white hover:border-[#3D6BD8] hover:bg-white hover:text-[#3D6BD8]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
