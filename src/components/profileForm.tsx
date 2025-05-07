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
    <div className="pt-20 flex flex-col gap-4 h-screen w-full justify-center items-center">
      <div className="bg-white w-[80%] rounded-3xl px-10 py-3">
        <div className="border-b border-gray-200 ">
          <p className="mb-5 mt-4 text-xl font-semibold">Edit Profile</p>
        </div>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <div className="w-full">
            <p className="mt-5 text-lg font-semibold mb-2">Full Name</p>
            <input
              type="text"
              className="bg-gray-100 p-4 rounded-full w-full outline-none"
              placeholder="Enter you'r name"
            />
          </div>
          <div className="w-full">
            <p className="mt-5 text-lg font-semibold mb-2">Email</p>
            <input
              type="email"
              className="bg-gray-100 p-4 rounded-full w-full outline-none"
              placeholder="Enter you'r email"
            />
          </div>
        </div>
        <div className="flex justify-end mt-15 mb-5">
          <button className="bg-[#3D6BD8] hover:bg-white border hover:text-[#3D6BD8] cursor-pointer hover:border-[#3D6BD8] rounded-full px-7 py-4 text-white">
            Save
          </button>
        </div>
      </div>
      <div className="bg-white w-[80%] rounded-3xl px-10 py-3">
      <div className="border-b border-gray-200 ">
          <p className="mb-5 mt-4 text-xl font-semibold">Change Password</p>
        </div>
        <div className="w-full">
            <p className="mt-5 text-lg font-semibold mb-2">Enter Your Current Password</p>
            <div className="flex items-center w-full bg-gray-100 rounded-full px-3 text-gray-400">
                <input
                  type={eye1 ? "password" : "text"}
                  placeholder="Enter Password"
                  className="p-4 w-full outline-none"
                  value={password1}
                  onChange={(e) => {
                    setPassword1(e.target.value);
                  }}
                  required
                />

                <div onClick={() => setEye1(!eye1)}>
                  {eye1 ? (
                    <RiEyeLine className="mr-2 ml-2 text-2xl text-black" />
                  ) : (
                    <RiEyeOffLine className="mr-2 ml-2 text-2xl text-black" />
                  )}
                </div>
              </div>
          </div>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <div className="w-full">
            <p className="mt-5 text-lg font-semibold mb-2">Enter New Password</p>
            <div className="flex items-center w-full bg-gray-100 rounded-full px-3 text-gray-400">
                <input
                  type={eye ? "password" : "text"}
                  placeholder="Enter Password"
                  className="p-4 w-full outline-none"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />

                <div onClick={() => setEye(!eye)}>
                  {eye ? (
                    <RiEyeLine className="mr-2 ml-2 text-2xl text-black" />
                  ) : (
                    <RiEyeOffLine className="mr-2 ml-2 text-2xl text-black" />
                  )}
                </div>
              </div>
          </div>
          <div className="w-full">
            <p className="mt-5 text-lg font-semibold mb-2">Confirm New Password</p>
            <div className="flex items-center w-full bg-gray-100 rounded-full px-3 text-gray-400">
                <input
                  type={eye2 ? "password" : "text"}
                  placeholder="Enter Password"
                  className="p-4 w-full outline-none"
                  value={password2}
                  onChange={(e) => {
                    setPassword2(e.target.value);
                  }}
                  required
                />

                <div onClick={() => setEye2(!eye2)}>
                  {eye2 ? (
                    <RiEyeLine className="mr-2 ml-2 text-2xl text-black" />
                  ) : (
                    <RiEyeOffLine className="mr-2 ml-2 text-2xl text-black" />
                  )}
                </div>
              </div>
          </div>
        </div>
        <div className="flex justify-end mt-15 mb-5 ">
          <button className="bg-[#3D6BD8] hover:bg-white border hover:text-[#3D6BD8] cursor-pointer hover:border-[#3D6BD8] rounded-full px-7 py-4 text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
